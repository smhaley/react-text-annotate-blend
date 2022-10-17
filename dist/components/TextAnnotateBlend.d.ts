/// <reference types="react" />
import { AnnotateBlendTag } from "../types/annotate-types";
import { TextAnnotateProps } from "./TextAnnotate";
declare const TextAnnotate: <T extends AnnotateBlendTag>(props: TextAnnotateProps<T>) => JSX.Element;
export default TextAnnotate;
