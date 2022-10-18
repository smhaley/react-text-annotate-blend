import { MarkedSpan, Span } from "../../types/annotate-types";
export declare const generalSplitClick: <T extends Span>(split: Span, value: T[], isBlendable: boolean, onChange?: ((value: T[]) => void) | undefined) => void;
export declare const generalHandleMouseUp: <T extends Span>(content: string, value: T[], isBlendable: boolean, getSpan: (span: T) => T, onChange?: ((value: T[]) => void) | undefined) => void;
export declare const generateSplits: <T extends Span>(content: string, value: T[], isBlendable: boolean) => MarkedSpan[];
