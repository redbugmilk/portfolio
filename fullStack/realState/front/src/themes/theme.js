import { createTheme } from "@mui/material/CssBaseline";
import { themeOptionsDark, themeOptionsLight } from "./themeOptions";

const theme = (isDark) => {
  const selectedTheme = isDark ? themeOptionsDark : themeOptionsLight;
  return createTheme(selectedTheme);
};

export default theme;
