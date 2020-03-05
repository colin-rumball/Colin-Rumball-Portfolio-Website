import styled, { css } from "styled-components";
import { ThemeContainer } from "../themes/definitions/Theme";

export const MaxScreenConstraints = css`
   margin: 0 auto;

   width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.SMALL};
   max-width: 91vw;

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.SMALL}) {
      width: 95vw;
   }

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      width: 90vw;
   }

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.LARGE}) {
      max-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.LARGE};
      width: 90vw;
   }
`;

export const PageStyling = css`
   position: relative;
   min-height: calc(100vh - 120px);
`;
