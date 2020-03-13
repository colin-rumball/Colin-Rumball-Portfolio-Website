import React from "react";
import styled from "styled-components";
import SiteLogo from "../components/SiteLogo";
import withDefaultProps from "../helpers/withDefaultProps";
import { MaxScreenConstraints } from "../styles/BaseStyles";
import { ThemeContainer } from "../themes/definitions/Theme";
import SiteNav from "./SiteNav";

interface StyledSiteHeaderProps {}

const StyledSiteHeader = styled.header<StyledSiteHeaderProps>`
   position: relative;
   width: 100vw;
   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.ON_TOP};

   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.SITE_HEADER.BACKGROUND};

   .header-contents {
      ${MaxScreenConstraints};
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 30px;
      padding: 15px 0;
      z-index: 1;
   }
`;

interface SiteHeaderProps {}

const SiteHeaderDefaultProps: SiteHeaderProps = {};

const SiteHeader: React.FC<SiteHeaderProps> = ({}) => {
   return (
      <StyledSiteHeader>
         <div className="header-contents">
            <SiteLogo className={"header-contents-item"} />
            <SiteNav />
         </div>
      </StyledSiteHeader>
   );
};

export default withDefaultProps<SiteHeaderProps>(SiteHeader, SiteHeaderDefaultProps);
