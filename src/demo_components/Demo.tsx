import React, { useRef, useEffect } from "react";
import TextAnnotateBlend from "../components/TextAnnotateBlend";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import useIntersectionObserver from "./useIntersectionObserver";
import Install from "./Install"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import github from "prism-react-renderer/themes/github";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  liveCode: {
    backgroundColor: "#f6f8fa",
  },
  error: {
    backgroundColor: "#ff5555",
    color: "#f9ded9",
  },
}));

const init = [
  {
    start: 6,
    end: 14,
    text: "are many",
    tag: "tagA",
    color: "rgb(179, 245, 66)",
  },
  {
    start: 10,
    end: 23,
    text: "many stories ",
    tag: "tagC",
    color: "#4B46CD",
  },
  {
    start: 78,
    end: 82,
    text: "road",
    tag: "tagB",
    color: "#42f5f5",
  },
];

const code = `function App () {
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
            maxWidth: 500,
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

const demoText =
  "There are many stories about the origins of cyclo-cross. One is that European road racers in the early 1900s would race each other to the next town over from them and that they were allowed to cut through farmers' fields or over fences, or take any other shortcuts, in order to make it to the next town first. This was sometimes called steeple chase as the only visible landmark in the next town was often the steeple.";

interface SelectorProps {
  value: string;
  handler: () => {};
}

const Selector: React.FC<SelectorProps> = ({ value, handler }) => {
  return (
    <Box p={2}>
      <FormControl variant="outlined">
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={value}
          onChange={handler}
        >
          <MenuItem value="tagA">tagA</MenuItem>
          <MenuItem value="tagB">tagB</MenuItem>
          <MenuItem value="tagC">tagC</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const Div: React.FC = ({ children }) => {
  return (
    <Paper elevation={2}>
      <Box p={2}>{children}</Box>
    </Paper>
  );
};

const scope = { TextAnnotateBlend, init, Selector, Div, demoText };

interface DemoProps {
  activeHandler: (index: number) => void;
  clickSection: string;
}

const Demo2: React.FC<DemoProps> = ({ activeHandler, clickSection }) => {
  const classes = useStyles();

  const demoRef = useRef<HTMLDivElement | null>(null);
  const codeRef = useRef<HTMLDivElement | null>(null);

  const refs = {
    TextAnnotateBlend: demoRef,
    "Live Code": codeRef,
  };

  const demoEntry = useIntersectionObserver(demoRef, {});
  const codeEntry = useIntersectionObserver(codeRef, {});

  useEffect(() => {
    const demoVisible = !!demoEntry?.isIntersecting;
    const codeVisible = !!codeEntry?.isIntersecting;
    if (demoVisible) {
      activeHandler(0);
    }
    if (codeVisible) {
      activeHandler(1);
    }
  }, [demoEntry, codeEntry]);

  useEffect(() => {
    const node = refs[clickSection];
    if (node && node.current) {
      node.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [clickSection]);

  return (
    <div ref={demoRef}>
      <Box pt={2}>
        <h3>TextAnnotateBlend</h3>
      </Box>
      <Install/>
      <Box pl={2} mb={2}>
        Simply highlight to tag & click to untag
      </Box>
      <LiveProvider code={code} scope={scope}>
        <div>
          <LivePreview />
        </div>
        <div ref={codeRef}>
          <Box pt={4}>
            <h3>Live Code</h3>
          </Box>
          <Box pb={3}>
            <Paper elevation={2} className={classes.liveCode}>
              <LiveEditor theme={github} />

              <Box className={classes.error}>
                <LiveError />
              </Box>
            </Paper>
          </Box>
        </div>
      </LiveProvider>
    </div>
  );
};

export default Demo2;
