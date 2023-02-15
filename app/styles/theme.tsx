import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import type { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    palette: PaletteOptions;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: PaletteOptions | undefined;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
