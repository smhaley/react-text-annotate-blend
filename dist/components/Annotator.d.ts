/// <reference types="react" />
import { AnnotateTag } from "../types/annotate-types";
import { TextAnnotateProps } from "./TextAnnotate";
export interface AnnotatorProps<T> extends TextAnnotateProps<T> {
    isBlendable: boolean;
}
declare const TextAnnotator: <T extends AnnotateTag>({ content, value, isBlendable, onChange, getSpan, style, className, }: AnnotatorProps<T>) => JSX.Element;
export default TextAnnotator;
