import React from "react";
import Annotator from "./Annotator";
import { AnnotateTag } from "../types/annotate-types";

export type TextAnnotateProps<T> = {
  content: string;
  value: T[];
  onChange?: (value: T[]) => void;
  getSpan?: (span: T) => T;
  style?: React.CSSProperties;
  className?: string;
};

const TextAnnotate = <T extends AnnotateTag>(props: TextAnnotateProps<T>) => {
  return <Annotator isBlendable={false} {...props} />;
};

export default TextAnnotate;
