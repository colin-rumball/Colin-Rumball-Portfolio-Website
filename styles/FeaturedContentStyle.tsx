import styled, { css } from "styled-components";
import { ThemeContainer } from "../themes/definitions/Theme";

const FeaturedContentStyle = css`
   max-width: 100%;
   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.STRONG};
   border-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.TAN};
   border-style: solid;
   border-width: 1px;
`;

export default FeaturedContentStyle;
