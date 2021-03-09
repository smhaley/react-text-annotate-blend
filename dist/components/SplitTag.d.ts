import React from "react";
export interface SplitProps {
    key: string;
    content: string;
    start: number;
    end: number;
    tag?: string;
    color?: string;
    onClick: (arg0: any) => any;
}
declare const SplitTag: React.FC<SplitProps>;
export default SplitTag;
