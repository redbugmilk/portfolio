import { createTheme } from "@mui/material/styles";
import theme from "./theme";

describe("theme()", () => {
  it("sets dark theme", () => {
    const isDark = true;
    const themeOptions = {
      palette: {
        type: "dark",
      },
    };
    jest.mock("@mui/material/styles/createTheme");
    theme(isDark);
    expect(createTheme).toBeCalled();
  });
  // it("sets light theme", () => {
  //   const isLight = false;
  //   const themeOptions = {
  //     palette: {
  //       type: "light",
  //     },
  //   };
  //   theme(isLight);
  // });
});
