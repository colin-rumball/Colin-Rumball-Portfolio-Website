import styled, { css } from "styled-components";
import { ThemeContainer } from "../themes/definitions/Theme";
import BorderedContentStyle from "./BorderedContentStyle";

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

export const VideoContent = css`
   position: relative;
   padding-bottom: 56.25%; /* 16:9 */
   padding-top: 25px;
   height: 0;

   .trailer {
      ${BorderedContentStyle};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
   }
`;
