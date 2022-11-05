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
import Section from "./Section";

const scope = { TextAnnotateBlend, init, Selector, Div, demoText };

interface DemoProps {
  activeHandler: (sectionName: string) => void;
  clickSection: string;
  mode: string;
  sectionRefs: {
    demo:  React.MutableRefObject<HTMLDivElement | null>;
    live:  React.MutableRefObject<HTMLDivElement | null>;
  }
  sectionNames: 
    {
      demo:  string;
      live:  string;
    }

}

const Demo: React.FC<DemoProps> = ({
  activeHandler,
  // clickSection,
  mode,
  sectionRefs,
  sectionNames
}) => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <h3>Live Demo - Text Annotate Blend</h3>
      </Box>
      <Box pl={2} mb={2}>
        <p>Simply highlight to tag & click to untag</p>
        <p>To create a blend, overlap an existing tag.</p>
      </Box>
      <LiveProvider code={blendSrc} scope={scope}>
        <Section ref={sectionRefs.demo} sectionName = {sectionNames.demo} activeHandler={activeHandler}>
          <LivePreview />
        </Section>
        <Section ref={sectionRefs.live} sectionName = {sectionNames.live} activeHandler={activeHandler}>
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
        </Section>
      </LiveProvider>
    </div>
  );
};

export default Demo;
