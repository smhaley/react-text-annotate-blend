interface Split {
    start: number;
    end: number;
}
interface Tag extends Split {
    text?: string;
    tag?: string;
    color?: string;
    __index__?: number;
}
interface Blend extends Split {
    text?: string;
    tag: string;
    color: string;
}
export declare const focusOverlap: (baseTag: Tag, splits: Array<Tag>) => Blend[];
export declare const getOverlap: (splits: Array<Tag>) => Blend[];
export declare const blender: (tags: Array<Tag>) => {
    tags: (Tag | Blend | {
        start: number;
        end: number;
        color?: string | undefined;
        index?: number | undefined;
    })[];
    blendIndices: number[];
};
export {};
