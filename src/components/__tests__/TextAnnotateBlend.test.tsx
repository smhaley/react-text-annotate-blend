import React from "react";
import TextAnnotateBlend from "../TextAnnotateBlend";
import { render, screen } from "@testing-library/react";
import { testStyleAndClass } from "./TextAnnotate.test";

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
describe("TextAnnotateBlend", () => {
  test("renders without getSpan", () => {
    render(
      <TextAnnotateBlend
        content={testContent}
        value={[{ start: 0, end: 5, tag: "PERSON", text: "this ", extra: 1 }]}
      />
    );
  });
  
  test("renders when value and getSpan return match", () => {
    render(
      <TextAnnotateBlend
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
  
  test("render does not duplicate blends", () => {
    render(
      <TextAnnotateBlend
        content={testContent}
        value={testVal}
        onChange={() => {}}
      />
    );
    const splits = ["this is a", "test", ", wahoooo"];
    splits.forEach((val) => expect(screen.getByText(val)).toBeTruthy());
  });
  test("passes mark style and classname", ()=>{
    const {container} = render(<TextAnnotateBlend
        markClassName="blah"
        markStyle={{color:"green"}}
        content={testContent}
        value={[{ start: 0, end: 5, tag: "PERSON", text: "this ", extra: 1 }]}
      />)

    const mark = screen.getByText("this")
    testStyleAndClass(mark, container, 'green', 'blah')
  })

  test("passes tag style and classname", ()=>{
    const {container} = render(<TextAnnotateBlend
      tagClassName="blah"
      tagStyle={{color:"green"}}
      content={testContent}
      value={[{ start: 0, end: 5, tag: "PERSON", text: "this ", extra: 1 }]}
    />);

  const tag = screen.getByText("PERSON");
  testStyleAndClass(tag, container, 'green', 'blah')
  });
})
