import { createTheme } from "@mui/material";
export const shades = {
  primary: {
    500: "#000000",
  },
  secondary: {
    300: "#d6001c",
    500: "#d6001c",
  },
  netural: {
    100: "#f5f5f5",
    500: "#cfcdcd",
    700: "#7c7b7b",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    netural: {
      dark: shades.netural[700],
      main: shades.netural[500],
      light: shades.netural[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
