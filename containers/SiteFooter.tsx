import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledSiteFooterProps {}

const StyledSiteFooter = styled.footer<StyledSiteFooterProps>`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

   margin: 0;
   padding: 0;

   width: 100vw;
   height: 60px;

   font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
   letter-spacing: 1px;
   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.DARK};

   background-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.BLACK};
`;

interface SiteFooterProps extends Props<any> {}

const SiteFooterDefaultProps: SiteFooterProps = {};

const SiteFooter: React.FC<SiteFooterProps> = ({}) => {
   return <StyledSiteFooter>COPYRIGHT &copy; COLIN RUMBALL 2020</StyledSiteFooter>;
};

export default withDefaultProps<SiteFooterProps>(SiteFooter, SiteFooterDefaultProps);
