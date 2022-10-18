import React from "react";
import { TextAnnotate, AnnotateTag } from "react-text-annotate-blend";

/*
Stateful example with blended tags not allowed
*/

const init: AnnotateTag[] = [
  {
    start: 10,
    end: 22,
    text: "many stories",
    tag: "tagC",
    color: "#4b46cd",
  },
  {
    start: 15,
    end: 28,
    text: "stories about",
    tag: "tagB",
    color: "#42f5f5",
  },
  {
    start: 120,
    end: 124,
    text: "each",
    tag: "tagC",
    color: "#4b46cd",
  },
];

const demoText =
  "There are many stories about the origins of cyclo-cross. One is that European road racers in the early 1900s would race each other to the next town over from them and that they were allowed to cut through farmers' fields or over fences, or take any other shortcuts, in order to make it to the next town first. This was sometimes called steeple chase as the only visible landmark in the next town was often the steeple.";

type COLOR_TYPE = {
  [key: string]: string;
  tagA: string;
  tagB: string;
  tagC: string;
};

function StatefulBlend() {
  const [value, setValue] = React.useState(init);
  const [tag, setTag] = React.useState("tagA");

  const handleChange = (value: AnnotateTag[]) => {
    setValue(value);
  };

  const COLORS: COLOR_TYPE = {
    tagA: "rgb(179, 245, 66)",
    tagB: "#42f5f5",
    tagC: "#4b46cd",
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        <TextAnnotate
          style={{
            fontSize: "1.2rem",
          }}
          content={demoText}
          onChange={handleChange}
          value={value}
          getSpan={(span) => ({
            ...span,
            tag: tag,
            color: COLORS[tag],
          })}
        />
      </div>

      <select onChange={(e) => setTag(e.target.value)}>
        {Object.keys(COLORS).map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>

      <h3>Current Stored Value</h3>
      <div>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
}

export default StatefulBlend;
