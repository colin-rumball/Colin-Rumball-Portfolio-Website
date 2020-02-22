import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import Link from "next/link";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledNavLinkProps {}

const StyledNavLink = styled.li<StyledNavLinkProps>`
   margin-left: 2vw;

   a.inner-navlink {
      color: ${({ theme }: ThemeContainer) => theme.GENERAL.NAV_ITEMS_COLOR.DEFAULT};

      &:hover {
         color: ${({ theme }: ThemeContainer) => theme.GENERAL.NAV_ITEMS_COLOR.HOVER};
      }
   }
`;

interface NavLinkProps extends Props<any> {
   href: string;
}

const NavLinkDefaultProps: NavLinkProps = {
   href: "/"
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
   return (
      <StyledNavLink>
         <Link href={href}>
            <a className="inner-navlink">{children}</a>
         </Link>
      </StyledNavLink>
   );
};

export default withDefaultProps<NavLinkProps>(NavLink, NavLinkDefaultProps);
