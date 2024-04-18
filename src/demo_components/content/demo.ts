import { TextAnnotate, TextAnnotateBlend } from "react-text-annotate-blend";
import Div from "../demo/Div";
import Selector from "../demo/Selector";

export const demoText =
  "There are many stories about the origins of cyclo-cross. One is that European road racers in the early 1900s would race each other to the next town over from them and that they were allowed to cut through farmers' fields or over fences, or take any other shortcuts, in order to make it to the next town first. This was sometimes called steeple chase as the only visible landmark in the next town was often the steeple.";

export const blendSrc = `
//import { TextAnnotateBlend } from "react-text-annotate-blend"

function App () {
    const [value, setValue] = React.useState(init);
    const [tag, setTag] = React.useState("tagA");
  
    const handleChange = (value) => {
      setValue(value);
    };
  
    const COLORS = {
      tagA: "rgb(179, 245, 66)",
      tagB: "#42f5f5",
      tagC: "#4b46cd",
    };

    return (
      <>
        <Div>
         <TextAnnotateBlend
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
        </Div>

        <Selector value = {tag} handler={(e) => setTag(e.target.value)}/>
        
        <h3>Current Stored Value</h3>

        <Div>
            <pre>{JSON.stringify(value, null, 2)}</pre>
        </Div>
      </>
    );
};`;

export const blendInit = [
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

export const tagInit = [
  {
    start: 0,
    end: 22,
    text: "There are many stories",
    tag: "tagA",
    color: "rgb(179, 245, 66)",
  },
  {
    start: 97,
    end: 108,
    text: "early 1900s",
    tag: "tagB",
    color: "#42f5f5",
  },
  {
    start: 249,
    end: 264,
    text: "other shortcuts",
    tag: "tagC",
    color: "#4b46cd",
  },
];

export const tagSrc = `
//import { TextAnnotate } from "react-text-annotate-blend"

function App () {
    const [value, setValue] = React.useState(init);
    const [tag, setTag] = React.useState("tagA");
  
    const handleChange = (value) => {
      setValue(value);
    };
  
    const COLORS = {
      tagA: "rgb(179, 245, 66)",
      tagB: "#42f5f5",
      tagC: "#4b46cd",
    };

    return (
      <>
        <Div>
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
        </Div>

        <Selector value = {tag} handler={(e) => setTag(e.target.value)}/>
        
        <h3>Current Stored Value</h3>

        <Div>
            <pre>{JSON.stringify(value, null, 2)}</pre>
        </Div>
      </>
    );
};`;

export const BLEND_SCOPE = "blendScope";
export const TAG_SCOPE = "tagScope";

export const blendScope = {
  TextAnnotateBlend,
  init: blendInit,
  Selector,
  Div,
  demoText,
};
export const tagScope = {
  TextAnnotate,
  init: tagInit,
  Selector,
  Div,
  demoText,
};

export const blendDemo = {
  scope: blendScope,
  src: blendSrc,
};

export const tagDemo = {
  scope: tagScope,
  src: tagSrc,
};

export const demos = {
  [BLEND_SCOPE]: blendDemo,
  [TAG_SCOPE]: tagDemo,
};

export const blendDemoContent = {
  heading: "Live Demo - Text Annotate Blend",
  instruction: [
    "Simply highlight to tag & click to untag",
    "To create a blend, overlap an existing tag",
    "Tags may only overlap at a given position one time"
  ],
};

export const tagDemoContent = {
  heading: "Live Demo - Text Annotate",
  instruction: [
    "Simply highlight to tag & click to untag",
    "This component does not support overlapping.",
  ],
};
