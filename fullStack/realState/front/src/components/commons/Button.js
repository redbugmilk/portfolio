import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
const SIZE = {
  small: "small",
  large: "large",
};

function CustomButton({ label, size, onClick, disabled, color }) {
  const spacing = size === SIZE.small ? 1 : 4;
  return (
    <Button p={spacing} onClick={onClick} color={color} disabled={disabled}>
      {label}
    </Button>
  );
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([SIZE.small, SIZE.large]),
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  color: PropTypes.oneOf(["primary", "secondary", "default"]),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  size: SIZE.small,
  disabled: false,
};

export default CustomButton;
