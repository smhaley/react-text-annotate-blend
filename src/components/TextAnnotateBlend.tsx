import React from "react";
import Annotator from "./Annotator";
import { AnnotateBlendTag } from "../types/annotate-types";
import { TextAnnotateProps } from "./TextAnnotate";

const TextAnnotateBlend = <T extends AnnotateBlendTag>(
  props: TextAnnotateProps<T>
) => {
  return <Annotator isBlendable {...props} />;
};

export default TextAnnotateBlend;
