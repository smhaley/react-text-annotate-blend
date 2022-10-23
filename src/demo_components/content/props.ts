export const content = [
  { name: "content", type: "string", desc: "Input string to annotate." },
  {
    name: "value",
    type: "AnnotateBlendTag[]",
    desc: "List of annotations to mark",
  },
  {
    name: "onChange?",
    type: "(value: AnnotateBlendTag[]) => void",
    dec: "Handler used to set updated value returned from <TextAnnotateBlend/>",
  },
  {
    name: "getSpan?",
    type: "(span: AnnotateBlendTag) => AnnotateBlendTag",
    desc: "Passes color and label values along with any additional metadata to highlighted text spans",
  },
  {
    name: "style?",
    type: "string",
    desc: "Style attributed to the text container.",
  },
];
