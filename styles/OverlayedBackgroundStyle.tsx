import styled, { css } from "styled-components";
import { ThemeContainer } from "../themes/definitions/Theme";

const OverlayedBackgroundStyle = css`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   opacity: 0.7;
   pointer-events: none;
   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.OVERLAYED_BACKGROUND};
   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.BACKGROUND};
`;

export default OverlayedBackgroundStyle;