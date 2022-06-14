import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import theme from "./themes/theme";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={theme(isDarkTheme)}>
      <CssBaseline />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
