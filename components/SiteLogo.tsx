import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import Link from "next/link";
import { ThemeContainer } from "../themes/definitions/Theme";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";

interface StyledSiteLogoProps {}

const StyledSiteLogo = styled.a<StyledSiteLogoProps>`
   display: flex;
   align-items: center;

   letter-spacing: 2px;
   font-family: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_FAMILIES.SECONDARY};
   color: ${({ theme }: ThemeContainer) => theme.COMPONENTS.SITE_HEADER.TEXT_COLOR.DEFAULT};
   cursor: pointer;
   font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.ML};

   &:hover {
      color: ${({ theme }: ThemeContainer) => theme.COMPONENTS.SITE_HEADER.TEXT_COLOR.ALTERNATE};
   }
`;

interface SiteLogoProps extends ComponentBaseProps {}

const SiteLogoDefaultProps: SiteLogoProps = {};

const SiteLogo: React.FC<SiteLogoProps> = ({ className }) => {
   return (
      <Link href="/">
         <StyledSiteLogo className={className}>C.RUMBALL</StyledSiteLogo>
      </Link>
   );
};

export default withDefaultProps<SiteLogoProps>(SiteLogo, SiteLogoDefaultProps);
