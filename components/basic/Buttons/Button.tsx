import React, { Props } from "react";
import styled, { css } from "styled-components";
import withDefaultProps from "../../../helpers/withDefaultProps";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";

enum ButtonSize {
   DYNAMIC,
   SMALL,
   MEDIUM,
   LARGE
}

interface StyledButtonProps {
   size: ButtonSize;
}

const StyledButton = styled.button<StyledButtonProps>`
   position: relative;
   cursor: pointer;

   background-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.TAN};

   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.STRONG};

   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
   padding-right: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
   padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
   padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};

   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREY};
   font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
   font-weight: 600;
   letter-spacing: 1px;
   white-space: nowrap;

   transition: background-color 0.15s ease-in, color 0.15s ease-in, color 0.2s ease-in;

   &:hover {
      color: #fff;
      background-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.BLUE};
   }
`;

export interface ButtonProps extends ComponentBaseProps {
   size?: ButtonSize;
   secondary?: boolean;
}

const ButtonDefaultProps: ButtonProps = {
   size: ButtonSize.DYNAMIC
};

const Button: React.FC<ButtonProps> = ({ size, secondary, children }) => {
   return <StyledButton size={size}>{children}</StyledButton>;
};

export default withComponentBase<ButtonProps>(Button, ButtonDefaultProps);
