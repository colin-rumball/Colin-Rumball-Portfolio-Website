import styled, { css } from "styled-components";
import { ThemeContainer } from "../themes/definitions/Theme";

const OverlayedBackgroundStyle = css`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   opacity: 1;
   pointer-events: none;
   mix-blend-mode: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.OVERLAYED_BG_BLEND};
   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.OVERLAYED_BACKGROUND};
   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.BACKGROUND};
`;

export default OverlayedBackgroundStyle;
