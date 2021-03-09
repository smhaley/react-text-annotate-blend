import React, { useState } from "react";
import TextAnnotateBlend from "./components/TextAnnotateBlend"

let colA = "rgb(179, 245, 66)";
let colB = "#42f5f5";
let colC = "rgb(179, 245, 66)"


const init = [
  {
    "start": 0,
    "end": 14,
    "text": "This component",
    "tag": "tagA",
    "color": "rgb(179, 245, 66)"
  },
  {
    "start": 5,
    "end": 19,
    "text": "component lets",
    "tag": "tagB",
    "color": "#42f5f5"
  },
  {
    "start": 24,
    "end": 29,
    "text": "blend",
    "tag": "tagC",
    "color": "rgb(179, 245, 66)"
  },
  {
    "start": 30,
    "end": 41,
    "text": "annotations",
    "tag": "tagA",
    "color": "rgb(179, 245, 66)"
  }
]
//node_modules/react
export default function App() {
  const [value, setValue] = useState(init);
  const [tag, setTag] = useState("tagA");

  const handleChange = (value: any) => {
    setValue(value);
  };

  interface Colors {
    [key: string]: string;
    tagA: string;
    tagB: string;
  }

  const COLORS: Colors = {
    tagA: colA,
    tagB: colB,
    tagC: colC,
  };

  return (
    <>
      <div>
        <h3>React TextAnnotateBlend Minimum Example</h3>
      </div>
      <div >
        <TextAnnotateBlend
          style={{
            maxWidth: 500,
            fontSize: "20px",
            lineHeight: 5,
          }}
          content="This component lets you blend annotations!"
          onChange={handleChange}
          value={value}
          getSpan={(span:any) => ({
            ...span,
            tag: tag,
            color: COLORS[tag],
          })}
        />
      </div>
      <select value={tag} onChange={(e) => setTag(e.target.value)}>
        <option value="tagA">tagA</option>
        <option value="tagB">tagB</option>
        <option value="tagC">tagC</option>
      </select>

      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
}
