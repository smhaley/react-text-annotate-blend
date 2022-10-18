import React from "react";
import "./App.css";
import { AnnotateBlendTag, TextAnnotateBlend } from "react-text-annotate-blend";

const value: AnnotateBlendTag[] = [
  {
    start: 5,
    end: 29,
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
    <TextAnnotateBlend
      content="This component lets you blend annotations!"
      value={value}
    />
  );
}

export default StatelessBlend;
