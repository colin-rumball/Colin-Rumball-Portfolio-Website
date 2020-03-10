import React, { ReactElement } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import theme from "styled-theming";
import withDefaultProps from "../../../helpers/withDefaultProps";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";

export enum ButtonSize {
   DYNAMIC,
   SMALL,
   MEDIUM,
   LARGE
}

export interface StyledButtonProps {
   buttonSize: ButtonSize;
   secondary?: boolean;
}

export const PrimaryButtonStyle = css<StyledButtonProps>``;

export const SecondaryButtonStyle = css<StyledButtonProps>``;

const StyledButton = styled.button<StyledButtonProps>`
   ${props => (props.secondary ? SecondaryButtonStyle : PrimaryButtonStyle)};

   ${({ buttonSize, theme }: ThemeContainer) => {
      switch (buttonSize) {
         case ButtonSize.SMALL:
            return {
               width: "160px"
            };
         case ButtonSize.MEDIUM:
            return {
               width: "180px"
            };
         case ButtonSize.LARGE:
            return {
               width: "200px"
            };
      }
   }};

   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;

   cursor: pointer;

   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.BUTTON.BACKGROUND.DEFAULT};

   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.STRONG};

   padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};

   color: ${({ theme }: ThemeContainer) => theme.COMPONENTS.BUTTON.FONT_COLOR.DEFAULT};
   font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
   font-weight: 600;
   letter-spacing: 1px;

   transition: background-color 0.15s ease-in, color 0.15s ease-in, color 0.2s ease-in;

   .button-icon {
      padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XS};
      font-size: 1.2em;
      line-height: 1em;
   }

   .button-children {
      flex: 1;
      text-align: center;
   }

   &:hover {
      color: ${({ theme }: ThemeContainer) => theme.COMPONENTS.BUTTON.FONT_COLOR.ALTERNATE};
      background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.BUTTON.BACKGROUND.ALTERNATE};
   }
`;

export interface ButtonProps extends ComponentBaseProps {
   buttonSize?: ButtonSize;
   secondary?: boolean;
   icon?: ReactElement;
}

const ButtonDefaultProps: ButtonProps = {
   buttonSize: ButtonSize.DYNAMIC
};

const Button: React.FC<ButtonProps> = ({
   icon,
   buttonSize,
   secondary,
   children,
   style,
   className
}) => {
   return (
      <ThemeProvider theme={{ theme: "default" }}>
         <StyledButton
            buttonSize={buttonSize}
            secondary={secondary}
            style={style}
            className={className}
         >
            {icon && <div className="button-icon">{icon}</div>}
            <div className="button-children">{children}</div>
         </StyledButton>
      </ThemeProvider>
   );
};

export default withDefaultProps<ButtonProps>(Button, ButtonDefaultProps);
