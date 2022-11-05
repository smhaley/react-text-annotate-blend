

const generateContent = (typeName: string) => {
  return [
    { name: "content", type: "string", desc: "Input string to annotate." },
    {
      name: "value",
      type: `${typeName}[]`,
      desc: "List of annotations to mark",
    },
    {
      name: "onChange?",
      type: `(value: ${typeName}[]) => void`,
      dec: "Handler used to set updated value returned from <TextAnnotateBlend/>",
    },
    {
      name: "getSpan?",
      type: `(span: ${typeName}) => ${typeName}`,
      desc: "Passes color and label values along with any additional metadata to highlighted text spans",
    },
    {
      name: "style?",
      type: "string",
      desc: "Style attributed to the text container.",
    },
  ]
} 

export const AnnotateBlendTagType = `
    type AnnotateBlendTag = {
      start: number;   //tag start position
      end: number;     //tag end position
      text?: string;   //tag text
      color?: string;  //tag color
      tag?: string;    //tag label
    };
`;

export const AnnotateTagType = `
    type AnnotateTag = {
      start: number;       //tag start position
      end: number;         //tag end position
      text?: string;       //tag text
      color?: string;      //tag color
      tag?: string;        //tag label
      className?: string;  //className to wrap tags
    };
`;

export const contentBlend = generateContent("AnnotateBlendTag")
export const contentTag = generateContent("AnnotateTag")
