import React, { useRef, useEffect } from "react";
// import TextAnnotateBlend from "../components/TextAnnotateBlend";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import useIntersectionObserver from "./useIntersectionObserver";
import Install from "./Install";
import { TextAnnotateBlend } from "react-text-annotate-blend";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import github from "prism-react-renderer/themes/github";
import dracula from "prism-react-renderer/themes/dracula";

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
  demoDiv: {
    overflowX: "auto",
  },
}));

const init = [
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

const code = `
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
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <Box className={classes.demoDiv} p={2}>
        {children}
      </Box>
    </Paper>
  );
};

const scope = { TextAnnotateBlend, init, Selector, Div, demoText };

interface DemoProps {
  activeHandler: (index: number) => void;
  clickSection: string;
  darkMode: boolean;
}

const Demo: React.FC<DemoProps> = ({
  activeHandler,
  clickSection,
  darkMode,
}) => {
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
  }, [demoEntry, codeEntry, activeHandler]);

  useEffect(() => {
    const node = refs[clickSection];
    if (node && node.current) {
      node.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickSection]);

  return (
    <>
      <Box pt={2}>
        <h3>TextAnnotateBlend</h3>
      </Box>
      <Install darkMode={darkMode} />
      <Box pl={2} mb={2}>
        Simply highlight to tag & click to untag
      </Box>
      <LiveProvider code={code} scope={scope}>
        <div ref={demoRef}>
          <LivePreview />
        </div>
        <div ref={codeRef}>
          <Box pt={4}>
            <h3>Live Code</h3>
          </Box>
          <Box pb={3}>
            <Paper elevation={2} className={classes.liveCode}>
              <LiveEditor theme={darkMode ? dracula : github} />
              <Box className={classes.error}>
                <LiveError />
              </Box>
            </Paper>
          </Box>
        </div>
      </LiveProvider>
    </>
  );
};

export default Demo;
