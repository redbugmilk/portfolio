import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "./Button.js";

describe("Button", () => {
  it("should be disable", () => {
    render(
      <CustomButton
        label="Press"
        disabled
        onClick={() => console.log("test")}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
  it("should call function on click", () => {
    const onClick = jest.fn();
    render(<CustomButton label="Press" disabled onClick={onClick()} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
