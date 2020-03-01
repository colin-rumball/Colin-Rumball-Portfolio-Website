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

   .background {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      opacity: ${props => (props.showBackground ? 1 : 0)};

      background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.SITE_HEADER.BACKGROUND};

      transition: opacity ease-in-out 0.35s;
      z-index: -1;
   }

   .header-contents {
      ${MaxScreenConstraints};
      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 30px;
      padding: 15px 0;
      z-index: 1;

      *.header-contents-item {
         cursor: pointer;
         color: ${({ theme, showBackground }: ThemeContainer) =>
            showBackground
               ? theme.COMPONENTS.SITE_HEADER.SCROLLED_TEXT_COLOR.DEFAULT
               : theme.COMPONENTS.SITE_HEADER.DEFAULT_TEXT_COLOR.DEFAULT};

         transition: color 0.2s ease-out;
         &:hover {
            color: ${({ theme, showBackground }: ThemeContainer) =>
               showBackground
                  ? theme.COMPONENTS.SITE_HEADER.SCROLLED_TEXT_COLOR.ALTERNATE
                  : theme.COMPONENTS.SITE_HEADER.DEFAULT_TEXT_COLOR.ALTERNATE};
         }
      }
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
         <div className="background" />
         <div className="header-contents">
            <SiteLogo className={"header-contents-item"} />
            <SiteNav linksClassName={"header-contents-item"} />
         </div>
      </StyledSiteHeader>
   );
};

export default withDefaultProps<SiteHeaderProps>(SiteHeader, SiteHeaderDefaultProps);
