import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import SiteNav from "./SiteNav";
import SiteLogo from "../components/SiteLogo";
import { ThemeContainer } from "../themes/definitions/Theme";
import { MaxScreenConstraints } from "../styles/BaseStyles";
import { debounce } from "lodash";

interface StyledSiteHeaderProps {
   showBackground?: boolean;
}

const StyledSiteHeader = styled.header<StyledSiteHeaderProps>`
   position: fixed;
   width: 100%;
   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.ON_TOP};

   background-color: ${({ theme, showBackground }: ThemeContainer) =>
      showBackground ? theme.GENERAL.HEADER_COLOR : "rgba(0,0,0,0)"};

   transition: background-color ease-in-out 0.35s;

   .header-contents {
      ${MaxScreenConstraints};
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 32px;
      padding: 16px 0;
   }
`;

interface SiteHeaderProps {}

const SiteHeaderDefaultProps: SiteHeaderProps = {};

const SiteHeader: React.FC<SiteHeaderProps> = ({}) => {
   const [showBackground, setShowBackground] = useState(false);
   const onWindowScrolled = useCallback(
      debounce(
         () => {
            if (typeof window == "undefined") return;
            setShowBackground(window.pageYOffset > 20);
         },
         10,
         { maxWait: 20 }
      ),
      []
   );

   useEffect(() => {
      if (typeof window == "undefined") return;
      window.addEventListener("scroll", onWindowScrolled);
      setShowBackground(window.pageYOffset > 20);
      return () => {
         window.removeEventListener("scroll", onWindowScrolled);
      };
   }, [onWindowScrolled]);

   return (
      <StyledSiteHeader showBackground={showBackground}>
         <div className="header-contents">
            <SiteLogo />
            <SiteNav />
         </div>
      </StyledSiteHeader>
   );
};

export default withDefaultProps<SiteHeaderProps>(SiteHeader, SiteHeaderDefaultProps);
