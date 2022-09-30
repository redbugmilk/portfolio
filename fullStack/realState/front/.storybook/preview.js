import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/themes/theme.js";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme(true)}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
