import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import github from "prism-react-renderer/themes/github";
import dracula from "prism-react-renderer/themes/dracula";
import { demoStyles as useStyles } from "./demo/styles";
import Section from "./Section";
import { demos, BLEND_SCOPE, TAG_SCOPE } from "./content/demo";

interface DemoProps {
  activeHandler: (sectionName: string) => void;
  clickSection: string;
  mode: string;
  sectionRefs: {
    demo: React.MutableRefObject<HTMLDivElement | null>;
    live: React.MutableRefObject<HTMLDivElement | null>;
  };
  sectionNames: {
    demo: string;
    live: string;
  };
  demoScope: typeof TAG_SCOPE | typeof BLEND_SCOPE;
  content: { heading: string; instruction: string[] };
}

const Demo: React.FC<DemoProps> = ({
  activeHandler,
  mode,
  sectionRefs,
  sectionNames,
  demoScope,
  content,
}) => {
  const classes = useStyles();

  const { scope, src } = demos[demoScope];
  return (
    <div>
      <Box>
        <h3>{content.heading}</h3>
      </Box>
      <Box pl={2} mb={2}>
        {content.instruction.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </Box>
      <LiveProvider code={src} scope={scope}>
        <Section
          ref={sectionRefs.demo}
          sectionName={sectionNames.demo}
          activeHandler={activeHandler}
        >
          <LivePreview />
        </Section>
        <Section
          ref={sectionRefs.live}
          sectionName={sectionNames.live}
          activeHandler={activeHandler}
        >
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
