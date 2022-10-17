import { MarkedSpan, Span } from "../../types/annotate-types";
export declare const range: (start: number, end: number, length?: number) => number[];
export declare const hexToRGB: (col: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const rgbParse: (col: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const luminTest: (col: string) => boolean;
export declare const blend: (colA: string, colB: string) => string;
export declare const splitWithOffsets: <T extends Span>(text: string, offsets: T[], strict?: boolean | undefined) => MarkedSpan[];
export declare const strictSplitWithOffsets: (text: string, offsets: {
    start: number;
    end: number;
}[]) => ({
    start: number;
    end: number;
    content: string;
} | {
    mark: boolean;
    content: string;
    start: number;
    end: number;
})[];
export declare const selectionIsEmpty: (selection: Selection) => boolean;
export declare const selectionIsBackwards: (selection: Selection) => boolean;
export declare const tagTransformer: <T extends Span>(value: T[], onChange: (value: T[]) => T, overlapLimit: number) => void;
export declare const getOverlap: <T extends Span>(value: T[]) => number;
