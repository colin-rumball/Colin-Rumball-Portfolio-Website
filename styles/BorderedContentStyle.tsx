import styled, { css } from "styled-components";
import { ThemeContainer } from "../themes/definitions/Theme";

const BorderedContentStyle = css`
   max-width: 100%;
   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.MEDIUM};
   border-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};
   border-style: solid;
   border-width: 1px;
`;

export default BorderedContentStyle;
