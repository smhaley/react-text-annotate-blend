import React from "react";
import "./App.css";
import { AnnotateTag, TextAnnotate } from "react-text-annotate-blend";

const value: AnnotateTag[] = [
  {
    start: 0,
    end: 14,
    tag: "tagA",
    color: "rgb(179, 245, 66)",
  },
  {
    start: 24,
    end: 41,
    tag: "tagB",
    color: "#42f5f5",
  },
];

function StatelessBlend() {
  return (
    <TextAnnotate
      content="This component lets you blend annotations!"
      value={value}
    />
  );
}

export default StatelessBlend;
