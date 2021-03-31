import { createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiSvgIcon: {
      htmlColor: "white",
    },
  },

  palette: {
    primary: {
      main: "#47b4e2",
    },
    secondary: {
      main: "#4b46cd",
    },
  },
});

export const darkTheme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiSvgIcon: {
      htmlColor: "white",
    },
  },

  palette: {
    type: "dark",
    primary: {
      main: "#303030",
    },
    secondary: {
      main: purple[300],
    },
  },
});
