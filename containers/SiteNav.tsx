import React from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import NavLink from "../components/NavLink";
import SocialLinks from "./SocialLinks";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";

interface StyledSiteNavProps {}

const StyledSiteNav = styled.nav<StyledSiteNavProps>`
   ul {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 0;
      margin: 0;

      list-style-type: none;
   }
`;

interface SiteNavProps extends ComponentBaseProps {
   linksClassName?: string;
}

const SiteNavDefaultProps: SiteNavProps = {};

const SiteNav: React.FC<SiteNavProps> = ({ className, linksClassName }) => {
   return (
      <StyledSiteNav className={className}>
         <ul>
            <NavLink href="/blog" className={linksClassName}>
               ARTICLES
            </NavLink>
            <NavLink href="/about" className={linksClassName}>
               ABOUT
            </NavLink>
            <SocialLinks linksClassName={linksClassName} />
         </ul>
      </StyledSiteNav>
   );
};

export default withDefaultProps<SiteNavProps>(SiteNav, SiteNavDefaultProps);
