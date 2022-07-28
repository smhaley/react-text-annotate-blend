import React from 'react';

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
    style?: React.CSSProperties;
};
declare type TextAnnotateBlendProps<T> = TextBaseProps<T>;
declare const TextAnnotateBlend: <T extends Span>(props: TextAnnotateBlendProps<T>) => JSX.Element;

export { TextAnnotateBlend };
