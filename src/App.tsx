import React, { useState, useRef } from "react";
import NavBar from "./demo_components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/core";
import Heading from "./demo_components/Heading";
import Props from "./demo_components/Props";
import Demo from "./demo_components/Demo";
import Section from "./demo_components/Section";
import { lightTheme, darkTheme } from "./muiThemes";
import { useDarkMode } from "./demo_components/hooks";
import * as Sections from "./constants";
import {
  contentBlend,
  contentTag,
  AnnotateBlendTagType,
  AnnotateTagType,
} from "./demo_components/content/props";
import {
  BLEND_SCOPE,
  TAG_SCOPE,
  tagDemoContent,
  blendDemoContent,
} from "./demo_components/content/demo";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  main: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: "220px",
    },
  },
  divider: {
    height: 10,
    borderRadius: 10,
  },
}));

export default function App() {
  const classes = useStyles();

  const [activeProp, setActiveProp] = useState(Sections.BLEND_DEMO);
  const [demoSection, setDemoSection] = useState("");
  const [mode, setMode] = useDarkMode();

  const refs = {
    [Sections.BLEND_DEMO]: useRef<HTMLDivElement | null>(null),
    [Sections.BLEND_LIVE]: useRef<HTMLDivElement | null>(null),
    [Sections.BLEND_PROPS]: useRef<HTMLDivElement | null>(null),
    [Sections.TAG_DEMO]: useRef<HTMLDivElement | null>(null),
    [Sections.TAG_LIVE]: useRef<HTMLDivElement | null>(null),
    [Sections.TAG_PROPS]: useRef<HTMLDivElement | null>(null),
  };

  const activeHandler = (sectionName: string) => {
    setActiveProp(sectionName);
  };

  const modeHandler = (mode: string) => {
    setMode(mode);
  };

  const clickHandler = (section: string) => {
    const node = refs[section];
    if (node && node.current) {
      node.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setDemoSection("");
    } else {
      setDemoSection(section);
    }
  };

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar
        clickHandler={clickHandler}
        setMode={modeHandler}
        mode={mode}
        activeSection={activeProp}
      />
      <main className={classes.content}>
        <Container maxWidth="md" style={{ height: "100%" }}>
          <Toolbar />
          <Paper className={classes.main}>
            <Heading mode={mode} />
            <Divider />
            <Box pb={7}>
              <Demo
                activeHandler={activeHandler}
                clickSection={demoSection}
                mode={mode}
                sectionRefs={{
                  live: refs[Sections.BLEND_LIVE],
                  demo: refs[Sections.BLEND_DEMO],
                }}
                sectionNames={Sections.blendDemoSections}
                demoScope={BLEND_SCOPE}
                content={blendDemoContent}
              />
              <Section
                ref={refs[Sections.BLEND_PROPS]}
                sectionName={Sections.BLEND_PROPS}
                activeHandler={activeHandler}
              >
                <Props
                  mode={mode}
                  propContent={contentBlend}
                  tagType={AnnotateBlendTagType}
                />
              </Section>
            </Box>
            <Divider className={classes.divider} />
            <Box pt={6} pb={6}>
              <Demo
                activeHandler={activeHandler}
                clickSection={demoSection}
                mode={mode}
                sectionRefs={{
                  live: refs[Sections.TAG_LIVE],
                  demo: refs[Sections.TAG_DEMO],
                }}
                sectionNames={Sections.tagDemoSections}
                demoScope={TAG_SCOPE}
                content={tagDemoContent}
              />
              <Section
                ref={refs[Sections.TAG_PROPS]}
                sectionName={Sections.TAG_PROPS}
                activeHandler={activeHandler}
              >
                <Props
                  mode={mode}
                  propContent={contentTag}
                  tagType={AnnotateTagType}
                />
              </Section>
            </Box>
          </Paper>
        </Container>
      </main>
    </ThemeProvider>
  );
}
