import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../../../helpers/withDefaultProps";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";

interface StyledButtonProps {}

const StyledButton = styled.button<StyledButtonProps>`
   position: relative;
   cursor: pointer;

   background-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.TAN};

   /* border-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREEN};
   border-style: solid;
   border-width: 2px; */
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

export interface ButtonProps extends ComponentBaseProps {}

const ButtonDefaultProps: ButtonProps = {};

const Button: React.FC<ButtonProps> = ({ children }) => {
   return <StyledButton>{children}</StyledButton>;
};

export default withComponentBase<ButtonProps>(Button, ButtonDefaultProps);
