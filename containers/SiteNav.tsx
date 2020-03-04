import React from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import NavLink from "../components/NavLink";
import SocialLinks from "./SocialLinks";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledSiteNavProps {}

const StyledSiteNav = styled.nav<StyledSiteNavProps>`
   ul {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 0;
      margin: 0;

      list-style-type: none;

      .social-links {
         display: none;

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            display: flex;

            li {
               margin-left: 4vw;
            }

            .social-link {
               cursor: pointer;
               color: ${({ theme }: ThemeContainer) =>
                  theme.COMPONENTS.SITE_HEADER.TEXT_COLOR.DEFAULT};
               font-style: normal;
               font-weight: 400;

               transition: color 0.2s ease-out;
               &:hover {
                  color: ${({ theme }: ThemeContainer) =>
                     theme.COMPONENTS.SITE_HEADER.TEXT_COLOR.ALTERNATE};
               }
            }
         }
      }
   }
`;

interface SiteNavProps extends ComponentBaseProps {}

const SiteNavDefaultProps: SiteNavProps = {};

const SiteNav: React.FC<SiteNavProps> = ({ className }) => {
   return (
      <StyledSiteNav className={className}>
         <ul>
            <NavLink href="/blog">DEV BLOG</NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <SocialLinks className="social-links" linksClassName="social-link" />
         </ul>
      </StyledSiteNav>
   );
};

export default withDefaultProps<SiteNavProps>(SiteNav, SiteNavDefaultProps);
