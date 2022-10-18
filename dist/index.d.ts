import React from 'react';

declare type Span = {
    start: number;
    end: number;
    text?: string;
    color?: string;
    tag?: string;
};
interface AnnotateTag extends Span {
    className?: string;
}
interface AnnotateBlendTag extends Span {
}

declare type TextAnnotateProps<T> = {
    content: string;
    value: T[];
    onChange?: (value: T[]) => void;
    getSpan?: (span: T) => T;
    style?: React.CSSProperties;
    className?: string;
};
declare const TextAnnotate: <T extends AnnotateTag>(props: TextAnnotateProps<T>) => JSX.Element;

declare const TextAnnotateBlend: <T extends AnnotateBlendTag>(props: TextAnnotateProps<T>) => JSX.Element;

export { AnnotateBlendTag, AnnotateTag, TextAnnotate, TextAnnotateBlend };
