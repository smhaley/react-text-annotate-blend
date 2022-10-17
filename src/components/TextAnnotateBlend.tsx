import React from "react";
import Annotator from "./Annotator";
import { AnnotateBlendTag } from "../types/annotate-types";
import { TextAnnotateProps } from "./TextAnnotate";

const TextAnnotate = <T extends AnnotateBlendTag>(
  props: TextAnnotateProps<T>
) => {
  return <Annotator isBlendable {...props} />;
};

export default TextAnnotate;
