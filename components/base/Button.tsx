import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../../helpers/withDefaultProps";
import { ThemeContainer } from "../../themes/definitions/Theme";

interface StyledButtonProps {}

const StyledButton = styled.button<StyledButtonProps>`
   position: relative;
   cursor: pointer;

   border-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREEN};
   border-style: solid;
   border-width: 2px;
   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.WEAK};

   padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
   padding-right: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
   padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};

   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREEN};
   font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.M};
   font-weight: 500;
   letter-spacing: 1px;

   background-color: #fff;

   transition: background-color 0.15s ease-in, color 0.15s ease-in;

   &:hover {
      color: #fff;
      background-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREEN};
   }
`;

interface ButtonProps extends Props<any> {}

const ButtonDefaultProps: ButtonProps = {};

const Button: React.FC<ButtonProps> = ({ children }) => {
   return <StyledButton>{children}</StyledButton>;
};

export default withDefaultProps<ButtonProps>(Button, ButtonDefaultProps);
