/// <reference types="react" />
import { MarkedSpan } from "../types/annotate-types";
export interface SplitProps<T> {
    key: string;
    content: string;
    start: number;
    end: number;
    tag?: string;
    color?: string;
    onClick: (span: T) => void;
    className?: string;
    mark?: boolean;
    index?: number;
}
declare const SplitTag: <T extends MarkedSpan>(props: SplitProps<T>) => JSX.Element;
export default SplitTag;
