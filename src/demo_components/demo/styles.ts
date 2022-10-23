import { makeStyles } from "@material-ui/core/styles";

export const demoStyles = makeStyles((theme) => ({
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
