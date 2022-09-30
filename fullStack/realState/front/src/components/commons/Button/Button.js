import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const SIZE = {
  small: "small",
  large: "large",
};

function CustomButton({ label, size, onClick, disabled, color, variant }) {
  return (
    <Button
      size={size}
      onClick={onClick}
      color={color}
      disabled={disabled}
      variant={variant}
    >
      {label}
    </Button>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([SIZE.small, SIZE.large]),
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  size: SIZE.small,
  disabled: false,
  variant: "contained",
};

export default CustomButton;
