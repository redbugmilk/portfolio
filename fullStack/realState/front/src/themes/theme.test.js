import theme from "./theme";

describe("theme()", () => {
  it("sets dark theme", () => {
    const isDark = true;
    theme(isDark);
  });
  it("sets light theme", () => {
    const isLight = false;
    theme(isLight);
  });
});
