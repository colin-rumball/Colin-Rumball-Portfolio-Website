import React from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import NavLink from "../components/NavLink";
import SocialLinks from "../components/SocialLinks";

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

interface SiteNavProps {}

const SiteNavDefaultProps: SiteNavProps = {};

const SiteNav: React.FC<SiteNavProps> = props => {
   const {} = { ...SiteNavDefaultProps, ...props };
   return (
      <StyledSiteNav>
         <ul>
            <NavLink href="/blog">ARTICLES</NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <SocialLinks />
         </ul>
      </StyledSiteNav>
   );
};

export default withDefaultProps<SiteNavProps>(SiteNav, SiteNavDefaultProps);
