import React from "react";
import type { ButtonProps } from "./types";
import { StyledButton } from "./styles";

export const Button = ({
  children,
  style,
  ariaLabel,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      aria-label={ariaLabel}
      style={{
        ...style
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
