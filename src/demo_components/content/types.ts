export const blendType  = `
type AnnotateBlendTag = {
  start: number;   //tag start position
  end: number;     //tag end position
  text?: string;   //tag text
  color?: string;  //tag color
  tag?: string;    //tag label
};
`;

export const annotateType  = `
type AnnotateBlendTag = {
  start: number;     //tag start position
  end: number;       //tag end position
  text?: string;     //tag text
  color?: string;    //tag color
  tag?: string;      //tag label
  className? string; //css className to apply to individual tag
};
`;