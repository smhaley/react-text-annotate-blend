import React, { useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { useIntersectionObserver } from "./hooks";
import { TextAnnotateBlend } from "react-text-annotate-blend";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import github from "prism-react-renderer/themes/github";
import dracula from "prism-react-renderer/themes/dracula";
import { demoText } from "./content/demo";
import { demoStyles as useStyles } from "./demo/styles";
import { blendInit as init } from "./content/demo";
import Selector from "./demo/Selector";
import Div from "./demo/Div";
import { blendDemo as blendSrc } from "./content/demo";
import { TAG_DEMO, TAG_LIVE } from "../constants";

const scope = { TextAnnotateBlend, init, Selector, Div, demoText };

interface DemoProps {
  activeHandler: (activeSection: string) => void;
  clickSection: string;
  mode: string;
}

const Demo: React.FC<DemoProps> = ({ activeHandler, clickSection, mode }) => {
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
      activeHandler(TAG_DEMO);
    }
    if (codeVisible) {
      activeHandler(TAG_LIVE);
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
        <div ref={demoRef}>
      <Box>
        <h3>Live Demo - Text Annotate Blend</h3>
      </Box>
      <Box pl={2} mb={2}>
        <p>Simply highlight to tag & click to untag</p>
        <p>To create a blend, overlap an existing tag.</p>
      </Box>
      <LiveProvider code={blendSrc} scope={scope}>
        <div >
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
    </div>
  );
};

export default Demo;
