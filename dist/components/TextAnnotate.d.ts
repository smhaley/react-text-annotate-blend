import React from "react";
import { AnnotateTag } from "../types/annotate-types";
export declare type TextAnnotateProps<T> = {
    content: string;
    value: T[];
    onChange?: (value: T[]) => void;
    getSpan?: (span: T) => T;
    style?: React.CSSProperties;
    className?: string;
};
declare const TextAnnotate: <T extends AnnotateTag>(props: TextAnnotateProps<T>) => JSX.Element;
export default TextAnnotate;
