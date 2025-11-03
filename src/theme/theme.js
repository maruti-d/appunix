import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00baff", // neon blue
    },
    background: {
      default: "#000000",
      paper: "#0a0a0a",
    },
    text: {
      primary: "#e8f9ff",
      secondary: "#77d7ff",
    },
  },
});
