export const TAG_TYPE = "AnnotateTagType";
export const BLEND_TYPE = "AnnotateBlendTagType";

export const generateContent = (typeName: string) => {
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
      desc: "Handler used to set updated value returned from <TextAnnotateBlend/>",
    },
    {
      name: "getSpan?",
      type: `(span: ${typeName}) => ${typeName}`,
      desc: "Passes color and label values along with any additional metadata to highlighted text spans",
    },
    {
      name: "style?",
      type: "React.CSSProperties",
      desc: "Style attributed to the text container.",
    },
    {
      name: "className?",
      type: "string",
      desc: "CSS class passed to the text container",
    },
    {
      name: "markClassName?",
      type: "string",
      desc: "Class passed to the the highlighted <mark/> tag",
    },
    { name: "markStyle?", type: "React.CSSProperties", desc: "Style passed to the the highlighted <mark/> tag" },
    { name: "tagClassName?", type: "string", desc: " Class passed to the the highlighted <span/> following a tag" },
    { name: "tagStyle?", type: "React.CSSProperties", desc: "styles passed to the the highlighted <span/> following a tag" },
  ];
};

export const tagContent = generateContent(TAG_TYPE);
export const blendContent = generateContent(BLEND_TYPE);

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

export const blendHeadingContent = {
  heading: "TextAnnotateBlend Props",
  typeName: "AnnotateBlendTag",
  subHeading: [
    "The primary type of the blending component.",
    "Additional expansion of this type is valid.",
  ],
};

export const tagHeadingContent = {
  heading: "TextAnnotate Props",
  typeName: "AnnotateTag",
  subHeading: [
    "The primary type of the non blending component.",
    "Additional expansion of this type is valid.",
  ],
};

export const contentBlend = {
  tableContent: generateContent("AnnotateBlendTag"),
  headingContent: blendHeadingContent,
};

export const contentTag = {
  tableContent: generateContent("AnnotateTag"),
  headingContent: tagHeadingContent,
};
