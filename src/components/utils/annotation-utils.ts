import {
  selectionIsEmpty,
  selectionIsBackwards,
  tagTransformer,
  splitWithOffsets,
} from "./utils";
import sortBy from "lodash.sortby";
import { blender } from "./blend";
import { MarkedSpan, Span } from "../../types/annotate-types";

export const generalSplitClick = <T extends Span>(
  split: Span,
  value: T[],
  isBlendable: boolean,
  onChange?: (value: T[]) => void
) => {
  if (!onChange) return;

  const { start, end } = split;

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

  const currentTags = sortBy(value, ["start"]);

  const overLapLimit = isBlendable ? 1 : 0;

  const splitIndex = currentTags.findIndex(
    (s) => s.start === start && s.end === end
  );

  if (splitIndex >= 0) {
    tagTransformer(
      [
        ...currentTags.slice(0, splitIndex),
        ...currentTags.slice(splitIndex + 1),
      ],
      onChange,
      overLapLimit
    );
  }

  if (isBlendable) {
    const { blendIndices } = blender(value);

    const frontOverlapIndex = currentTags.findIndex(
      (tag, index) => tag.start === start && blendIndices.includes(index)
    );

    const rearOverlapIndex = currentTags.findIndex(
      (tag, index) => tag.end === end && blendIndices.includes(index)
    );

    if (frontOverlapIndex >= 0) {
      tagTransformer(
        [
          ...currentTags.slice(0, frontOverlapIndex),
          ...currentTags.slice(frontOverlapIndex + 1),
        ],
        onChange,
        overLapLimit
      );
    } else if (rearOverlapIndex >= 0) {
      tagTransformer(
        [
          ...currentTags.slice(0, rearOverlapIndex),
          ...currentTags.slice(rearOverlapIndex + 1),
        ],
        onChange,
        overLapLimit
      );
    }
  }
};

export const generalHandleMouseUp = <T extends Span>(
  content: string,
  value: T[],
  isBlendable: boolean,
  getSpan: (span: T) => T,
  onChange?: (value: T[]) => void
) => {
  if (!onChange) return;

  const selection = window.getSelection();
  if (selection && selection.anchorNode && selection?.focusNode) {
    if (selectionIsEmpty(selection)) return;

    const startBase =
      selection.anchorNode.parentElement?.getAttribute("data-start");
    const endBase =
      selection.focusNode.parentElement?.getAttribute("data-start");
    if (startBase == null || endBase == null) return;

    let start = parseInt(String(startBase), 10) + selection.anchorOffset;
    let end = parseInt(String(endBase), 10) + selection.focusOffset;

    if (selectionIsBackwards(selection)) {
      [start, end] = [end, start];
    }

    const overLapLimit = isBlendable ? 1 : 0;

    tagTransformer(
      [...value, getSpan({ start, end, text: content.slice(start, end) } as T)],
      onChange,
      overLapLimit
    );

    window.getSelection()?.empty();
  }
};

export const generateSplits = <T extends Span>(
  content: string,
  value: T[],
  isBlendable: boolean
): MarkedSpan[] => {
  if (isBlendable) {
    const { tags } = blender(value);
    return splitWithOffsets(content, tags);
  }
  return splitWithOffsets(content, value, true);
};
