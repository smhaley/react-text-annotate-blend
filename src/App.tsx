import React, { useState, useRef } from "react";
import NavBar from "./demo_components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
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
import AnnotateDemo from "./demo_components/AnnotateDemo";
import { annotateDemo, blendDemo } from "./demo_components/content/demo";
import { blendInit } from "./demo_components/content/demo";
import * as Sections from "./constants";

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
}));

export default function App() {
  const classes = useStyles();

  const [activeProp, setActiveProp] = useState(Sections.BLEND_DEMO);
  const [demoSection, setDemoSection] = useState("NA");
  const [activeDemoSection, setActiveDemoSection] = useState("");
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
    //active section
    setActiveProp(sectionName);
  };

  const modeHandler = (mode: string) => {
    setMode(mode);
  };
  //
  const clickHandler = (index: number, section: string) => {
    //scrolls to a section
    const node = refs[section];
    if (node && node.current) {
      node.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setDemoSection("NA");
    } else {
      setDemoSection(section);
    }
    setActiveDemoSection(section);
  };

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar
        // active={activeProp}
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
            <Demo
              activeHandler={activeHandler}
              clickSection={demoSection}
              mode={mode}
              sectionRefs={{
                live: refs[Sections.BLEND_LIVE],
                demo: refs[Sections.BLEND_DEMO],
              }}
              sectionNames = {{
                live: Sections.BLEND_LIVE,
                demo: Sections.BLEND_DEMO,
              }}
            />
            <Section
              ref={refs[Sections.BLEND_PROPS]}
              // index={2}
              sectionName = {Sections.BLEND_PROPS}
              activeHandler={activeHandler}
            >
              <Props mode={mode} />
            </Section>
            <AnnotateDemo
              activeHandler={activeHandler}
              clickSection={demoSection}
              mode={mode}
            />
            <Section
              ref={refs[Sections.TAG_PROPS]}
              // index={5}
              sectionName = {Sections.TAG_PROPS}
              activeHandler={activeHandler}
            >
              <Props mode={mode} />
            </Section>
          </Paper>
        </Container>
      </main>
    </ThemeProvider>
  );
}
