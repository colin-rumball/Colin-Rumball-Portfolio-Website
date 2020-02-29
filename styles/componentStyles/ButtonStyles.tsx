import styled, { css } from "styled-components";
import { ThemeContainer } from "../../themes/definitions/Theme";
import { ButtonSize } from "../../components/basic/Buttons/Button";

export const PrimaryButtonStyle = css`
   ${({ size, theme }: ThemeContainer) => {
      switch (size) {
         case ButtonSize.SMALL:
            return {
               width: "200px"
            };
      }
   }};
`;

export const SecondaryButtonStyle = css``;
