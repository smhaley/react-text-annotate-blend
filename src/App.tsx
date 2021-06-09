import React, { useState, useRef } from "react";
import NavBar from "./demo_components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/core";
import Heading from "./demo_components/Heading";
import Props from "./demo_components/Props";
import Demo from "./demo_components/Demo";
import Section from "./demo_components/Section";
import { lightTheme, darkTheme } from "./muiThemes";
import { useDarkMode } from "./demo_components/hooks";

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

  const [activeProp, setActiveProp] = useState(0);
  const [demoSection, setDemoSection] = useState("NA");
  const [mode, setMode] = useDarkMode();

  const propsRef = useRef<HTMLDivElement | null>(null);

  const refs = {
    Props: propsRef,
  };

  const activeHandler = (index: number) => {
    setActiveProp(index);
  };

  const modeHandler = (mode: string) => {
    setMode(mode);
  };
  //
  const clickHandler = (index: number, section: string) => {
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
  };

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar
        active={activeProp}
        clickHandler={clickHandler}
        setMode={modeHandler}
        mode={mode}
      />
      <main className={classes.content}>
        <Container maxWidth="md" style={{ height: "100%" }}>
          <Toolbar />

          <Paper className={classes.main}>
            <Heading mode={mode} />
            <Demo
              activeHandler={activeHandler}
              clickSection={demoSection}
              mode={mode}
            />
            <Section ref={propsRef} index={2} activeHandler={activeHandler}>
              <Props />
            </Section>
          </Paper>
        </Container>
      </main>
    </ThemeProvider>
  );
}
