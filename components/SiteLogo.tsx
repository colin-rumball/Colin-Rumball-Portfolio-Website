import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import Link from "next/link";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledSiteLogoProps {}

const StyledSiteLogo = styled.a<StyledSiteLogoProps>`
   display: flex;
   align-items: center;

   letter-spacing: 1px;
   font-family: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_FAMILIES.SECONDARY};
   color: ${({ theme }: ThemeContainer) => theme.GENERAL.LOGO_COLOR.DEFAULT};
   cursor: pointer;

   &:hover {
      color: ${({ theme }: ThemeContainer) => theme.GENERAL.LOGO_COLOR.HOVER};
   }
`;

interface SiteLogoProps extends Props<any> {}

const SiteLogoDefaultProps: SiteLogoProps = {};

const SiteLogo: React.FC<SiteLogoProps> = ({}) => {
   return (
      <Link href="/">
         <StyledSiteLogo>C.RUMBALL</StyledSiteLogo>
      </Link>
   );
};

export default withDefaultProps<SiteLogoProps>(SiteLogo, SiteLogoDefaultProps);
