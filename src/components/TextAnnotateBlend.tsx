import React from "react";
import { blender } from "./utils/blend";
import SplitTag from "./SplitTag";
import sortBy from "lodash.sortby";
import {
  selectionIsEmpty,
  selectionIsBackwards,
  splitWithOffsets,
  tagTransformer,
} from "./utils/utils";


interface Split {
  start: any;
  end: any;
}

interface TextSpan extends Span {
  text: string;
}

type Span = {
  start: number;
  end: number;
};


type TextBaseProps<T> = {
  content: string;
  value: T[];
  onChange: (value: T[]) => any;
  getSpan?: (span: TextSpan) => T;
  style?: React.CSSProperties;
};

type TextAnnotateBlendProps<T> = TextBaseProps<T>;

const TextAnnotateBlend = <T extends Span>(props: TextAnnotateBlendProps<T>) => {
  const getSpan = (span: TextSpan): T => {
    if (props.getSpan) return props.getSpan(span) as T;
    return { start: span.start, end: span.end } as T;
  };

  const handleMouseUp = () => {
    if (!props.onChange) return;

    const selection = window.getSelection();
    if (selection && selection.anchorNode && selection?.focusNode) {
      if (selectionIsEmpty(selection)) return;

      const startBase = selection.anchorNode.parentElement?.getAttribute(
        "data-start"
      );
      const endBase = selection.focusNode.parentElement?.getAttribute(
        "data-start"
      );
      if (startBase == null || endBase == null) return;

      let start = parseInt(String(startBase), 10) + selection.anchorOffset;
      let end = parseInt(String(endBase), 10) + selection.focusOffset;

      if (selectionIsBackwards(selection)) {
        [start, end] = [end, start];
      }
      tagTransformer(
        [
          ...props.value,
          getSpan({ start, end, text: content.slice(start, end) }),
        ],
        props.onChange
      );

      window.getSelection()?.empty();
    }
  };

  const handleSplitClick = ({ start, end }: Split) => {
    const selection = window.getSelection();

    let focusOffset = 0;
    let anchorOffset = 0;
    if (selection) {
      focusOffset = selection.focusOffset;
      anchorOffset = selection.anchorOffset;
    }
    if (focusOffset - anchorOffset !== 0) {
      return;
    }

    const { blendIndices } = blender(value);

    const currentTags = sortBy(props.value, ["start"]);

    const frontOverlapIndex = currentTags.findIndex(
      (tag, index) => tag.start === start && blendIndices.includes(index)
    );

    const rearOverlapIndex = currentTags.findIndex(
      (tag, index) => tag.end === end && blendIndices.includes(index)
    );

    const splitIndex = currentTags.findIndex(
      (s) => s.start === start && s.end === end
    );

    if (splitIndex >= 0) {
      tagTransformer(
        [
          ...currentTags.slice(0, splitIndex),
          ...currentTags.slice(splitIndex + 1),
        ],
        props.onChange
      );
    } else if (frontOverlapIndex >= 0) {
      tagTransformer(
        [
          ...currentTags.slice(0, frontOverlapIndex),
          ...currentTags.slice(frontOverlapIndex + 1),
        ],
        props.onChange
      );
    } else if (rearOverlapIndex >= 0) {
      tagTransformer(
        [
          ...currentTags.slice(0, rearOverlapIndex),
          ...currentTags.slice(rearOverlapIndex + 1),
        ],
        props.onChange
      );
    }
  };

  const { content, value, style } = props;
  const { tags } = blender(value);

  const splits = splitWithOffsets(content, tags);

  return (
    <div style={style} onMouseUp={handleMouseUp}>
      {splits.map((split) => (
        <SplitTag
          key={`${split.start}-${split.end}`}
          {...split}
          onClick={handleSplitClick}
        />
      ))}
    </div>
  );
};

export default TextAnnotateBlend;
