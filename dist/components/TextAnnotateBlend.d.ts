import React from "react";
interface TextSpan extends Span {
    text: string;
}
declare type Span = {
    start: number;
    end: number;
};
declare type TextBaseProps<T> = {
    content: string;
    value: T[];
    onChange: (value: T[]) => any;
    getSpan?: (span: TextSpan) => T;
};
declare type TextAnnotateBlendProps<T> = React.HTMLAttributes<HTMLDivElement> & TextBaseProps<T>;
declare const TextAnnotateBlend: <T extends Span>(props: TextAnnotateBlendProps<T>) => JSX.Element;
export default TextAnnotateBlend;
