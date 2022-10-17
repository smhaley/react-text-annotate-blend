/// <reference types="react" />
import { MarkedSpan } from "../types/annotate-types";
export interface MarkProps<T> {
    key: string;
    content: string;
    start: number;
    end: number;
    onClick: (arg: T) => void;
    tag?: string;
    color?: string;
    className?: string;
    index?: number;
}
declare const Mark: <T extends MarkedSpan>({ color, className, end, start, onClick, content, tag, }: MarkProps<T>) => JSX.Element;
export default Mark;
