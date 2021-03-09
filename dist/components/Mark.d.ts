import React from "react";
export interface MarkProps {
    key: string;
    content: string;
    start: number;
    end: number;
    tag: string;
    color?: string;
    onClick: (arg0: any) => any;
}
declare const Mark: React.FC<MarkProps>;
export default Mark;
