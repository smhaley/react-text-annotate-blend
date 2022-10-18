import React from "react";
import SplitTag from "./SplitTag";
import {
  generalSplitClick,
  generalHandleMouseUp,
  generateSplits,
} from "./utils/annotation-utils";
import { Span, AnnotateTag } from "../types/annotate-types";
import { TextAnnotateProps } from "./TextAnnotate";

export interface AnnotatorProps<T> extends TextAnnotateProps<T> {
  isBlendable: boolean;
}

const TextAnnotator = <T extends AnnotateTag>({
  content,
  value,
  isBlendable,
  onChange,
  getSpan,
  style,
  className,
}: AnnotatorProps<T>) => {
  const annotateGetSpan = (span: T): T => {
    if (getSpan) return getSpan(span) as T;
    return { start: span.start, end: span.end } as T;
  };

  const decoratedMouseUp = () => {
    return () =>
      generalHandleMouseUp(
        content,
        value,
        isBlendable,
        annotateGetSpan,
        onChange
      );
  };

  const decoratedHandleSplitClick = () => {
    return (split: Span) =>
      generalSplitClick(split, value, isBlendable, onChange);
  };

  const handleMouseUp = decoratedMouseUp();
  const handleSplitClick = decoratedHandleSplitClick();

  const splits = generateSplits(content, value, isBlendable);

  return (
    <div className={className} style={style} onMouseUp={handleMouseUp}>
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

export default TextAnnotator;
