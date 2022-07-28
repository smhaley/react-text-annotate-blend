import React from "react";
import "./App.css";
import { TextAnnotateBlend } from "react-text-annotate-blend";

const value = [
  {
    start: 5,
    end: 29,
    text: "component lets you blend",
    tag: "tagA",
    color: "rgb(179, 245, 66)",
  },
  {
    start: 24,
    end: 41,
    text: "blend annotations",
    tag: "tagB",
    color: "#42f5f5",
  },
];

function StatelessBlend() {
  return (
    <TextAnnotateBlend
      content="This component lets you blend annotations!"
      onChange={() => {}}
      value={value}
    />
  );
}

export default StatelessBlend;
