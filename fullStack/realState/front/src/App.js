import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import theme from "./themes/theme";
import CustomButton from "./components/commons/Button/Button.js";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={theme(isDarkTheme)}>
      <CssBaseline />
      <div className="App">
        <p>Test</p>
        <CustomButton label="press this button" />
      </div>
    </ThemeProvider>
  );
}

export default App;
