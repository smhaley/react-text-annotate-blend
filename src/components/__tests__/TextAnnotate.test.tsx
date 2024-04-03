import React from "react";
import TextAnnotate from "../TextAnnotate";
import { render, screen } from "@testing-library/react";

const testContent = "this is a test, wahoooo";
const testVal = [
  {
    start: 0,
    end: 14,
    text: "this is a test",
    tag: "tagA",
    color: "rgb(240,100,3)",
  },
  {
    start: 10,
    end: 14,
    text: "test",
    tag: "tagB",
    color: "#563C5C",
  },
];

test("renders without getSpan", () => {
  render(
    <TextAnnotate
      content={testContent}
      value={[{ start: 0, end: 5, tag: "PERSON", text: "this ", extra: 1 }]}
    />
  );
});

test("renders when value and getSpan return match", () => {
  render(
    <TextAnnotate
      content={testContent}
      value={[{ start: 0, end: 5, tag: "PERSON", text: "foo", extra: 1 }]}
      onChange={() => {}}
      getSpan={(span) => ({
        ...span,
        tag: "FOO",
        text: "this ",
        extra: 1,
      })}
    />
  );
});

test("render duplicates overlapping tags -- with error message", () => {
  render(
    <TextAnnotate
      content={testContent}
      value={testVal}
      onChange={() => {}}
    />
  );
  const splits = ["this is a test", "tagA", "test", "tagB", ", wahoooo"];
  splits.forEach((val) => expect(screen.getByText(val)).toBeTruthy());
});
