import { alpha } from "@mui/material/styles";

export const paletteDark = {
  type: "dark",
  text: {
    primary: "#fff",
    secondary: alpha("#ffffff", 0.7),
    disabled: alpha("#ffffff", 0.5),
    hint: alpha("#ffffff", 0.5),
  },
  primary: {
    main: "#bd0707",
    light: "#ca3838",
    dark: "#840404",
    contrastText: "#fff",
  },
  secondary: {
    main: "#ffc510",
    light: "#ffd03f",
    dark: "#b2890b",
    contrastText: alpha("#fff", 0.87),
  },
  error: {
    main: "#f44336",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  warning: {
    main: "#ff9800",
    light: "#ffb74d",
    dark: "#f57c00",
    contrastText: alpha("#fff", 0.87),
  },
  info: {
    main: "#2196f3",
    light: "#64b5f6",
    dark: "#1976d2",
    contrastText: "#fff",
  },
  success: {
    main: "#4caf50",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: alpha("#fff", 0.87),
  },
  divider: alpha("#fff", 0.1),
  background: {
    default: "#4c69f6",
    paper: "#4c94f6",
  },
};

export const paletteLight = {
  type: "light",
  text: {
    primary: alpha("#000", 0.87),
    secondary: alpha("#000", 0.54),
    disabled: alpha("#000", 0.38),
    hint: alpha("#000", 0.38),
  },
  primary: {
    main: "#bd0707",
    light: "#ca3838",
    dark: "#840404",
    contrastText: "#fff",
  },
  secondary: {
    main: "#ffc510",
    light: "#ffd03f",
    dark: "#b2890b",
    contrastText: alpha("#fff", 0.87),
  },
  error: {
    main: "#f44336",
    light: "#e57373",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  warning: {
    main: "#ff9800",
    light: "#ffb74d",
    dark: "#f57c00",
    contrastText: alpha("#fff", 0.87),
  },
  info: {
    main: "#2196f3",
    light: "#64b5f6",
    dark: "#1976d2",
    contrastText: "#fff",
  },
  success: {
    main: "#4caf50",
    light: "#81c784",
    dark: "#388e3c",
    contrastText: alpha("#fff", 0.87),
  },
  divider: alpha("#fff", 0.1),
  background: {
    default: "#4c69f6",
    paper: "#4c94f6",
  },
};
