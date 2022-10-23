import React, { useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { useIntersectionObserver } from "./hooks";
import { TextAnnotateBlend } from "react-text-annotate-blend";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import github from "prism-react-renderer/themes/github";
import dracula from "prism-react-renderer/themes/dracula";
import { demoText } from "./content/demo";

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

interface SelectorProps {
  value: string;
  handler: () => {};
}

const Selector: React.FC<SelectorProps> = ({ value, handler }) => {
  const tags = ["tagA", "tagB", "tagC"];
  return (
    <Box p={2}>
      <FormControl variant="outlined">
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={value}
          onChange={handler}
        >
          {tags.map((tag) => (
            <MenuItem value={tag}>{tag}</MenuItem>
          ))}
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
  mode: string;
  demoSrc: string;
  init: {
    start: number;
    end: number;
    text: string;
    tag: string;
    color: string;
  }[];
}

const Demo: React.FC<DemoProps> = ({
  activeHandler,
  clickSection,
  mode,
  demoSrc,
  init,
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
    <div>
      <Box>
        <h3>Live Demo - Text Annotate Blend</h3>
      </Box>
      <Box pl={2} mb={2}>
        <p>Simply highlight to tag & click to untag</p>
        <p>To create a blend, overlap an existing tag.</p>
      </Box>
      <LiveProvider code={demoSrc} scope={scope}>
        <div ref={demoRef}>
          <LivePreview />
        </div>
        <div ref={codeRef}>
          <Box pt={4}>
            <h3>Live Code</h3>
          </Box>
          <Box pb={3}>
            <Paper elevation={2} className={classes.liveCode}>
              <LiveEditor theme={mode === "dark" ? dracula : github} />
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

export default Demo;
