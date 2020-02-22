import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";
import SocialLinks from "../components/SocialLinks";
import { MaxScreenConstraints } from "../styles/BaseStyles";

interface StyledSiteFooterProps {}

const StyledSiteFooter = styled.footer<StyledSiteFooterProps>`
   ${MaxScreenConstraints};
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   align-items: center;

   margin-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};
   padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};

   height: 40px;

   border-top-color: ${({ theme }: ThemeContainer) => theme.GENERAL.FOOTER_LINKS_COLOR.DEFAULT};
   border-top-style: solid;
   border-top-width: 1px;
`;

interface SiteFooterProps extends Props<any> {}

const SiteFooterDefaultProps: SiteFooterProps = {};

const SiteFooter: React.FC<SiteFooterProps> = ({}) => {
   return (
      <StyledSiteFooter>
         <SocialLinks />
      </StyledSiteFooter>
   );
};

export default withDefaultProps<SiteFooterProps>(SiteFooter, SiteFooterDefaultProps);
