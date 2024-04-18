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

export const testStyleAndClass = (
  element: HTMLElement, 
  container: HTMLElement, 
  computedColor: string, 
  className: string) => {
  expect(window.getComputedStyle(element).color).toBe(computedColor)
  expect(container.getElementsByClassName(className)).toHaveLength(1)
}

describe("TextAnnotate",()=>{
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
      />
    );
    const splits = ["this is a test", "tagA", "test", "tagB", ", wahoooo"];
    splits.forEach((val) => expect(screen.getByText(val)).toBeTruthy());
  });

  test("passes mark style and classname", ()=>{
    const {container} = render(<TextAnnotate
        markClassName="blah"
        markStyle={{color:"green"}}
        content={testContent}
        value={[{ start: 0, end: 5, tag: "PERSON", text: "this ", extra: 1 }]}
      />)

    const mark = screen.getByText("this")
    testStyleAndClass(mark, container, 'green', 'blah')
  })

  test("passes tag style and classname", ()=>{
    const {container} = render(<TextAnnotate
      tagClassName="blah"
      tagStyle={{color:"green"}}
      content={testContent}
      value={[{ start: 0, end: 5, tag: "PERSON", text: "this ", extra: 1 }]}
    />);

  const tag = screen.getByText("PERSON");
  testStyleAndClass(tag, container, 'green', 'blah')
  });
})
