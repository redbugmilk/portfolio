import { muiTheme } from "storybook-addon-material-ui";
import {
  themeOptionsDark,
  themeOptionsLight,
} from "../src/themes/themeOptions";

export const decorators = [muiTheme([themeOptionsDark, themeOptionsLight])];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
