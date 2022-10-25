import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          boxSizing: "border-box !important",
          margin: 0,
          padding: 0,
        },
        body: {
          fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
          fontSize: "1rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#53555f",
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Bellefair", "serif"].join(","),
    },
    h2: {
      fontFamily: ["Bellefair", "serif"].join(","),
    },
    h3: {
      fontFamily: ["Bellefair", "serif"].join(","),
    },
    h4: {
      fontFamily: ["Bellefair", "serif"].join(","),
    },
  },
});

export default theme;
