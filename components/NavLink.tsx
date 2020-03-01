import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import Link from "next/link";
import { ThemeContainer } from "../themes/definitions/Theme";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";

interface StyledNavLinkProps {}

const StyledNavLink = styled.li<StyledNavLinkProps>`
   margin-left: 4vw;

   a.inner-navlink {
      color: ${({ theme }: ThemeContainer) =>
         theme.COMPONENTS.SITE_HEADER.DEFAULT_TEXT_COLOR.DEFAULT};
      transition: color 0.25s ease-in-out;

      &:hover {
         color: ${({ theme }: ThemeContainer) =>
            theme.COMPONENTS.SITE_HEADER.DEFAULT_TEXT_COLOR.ALTERNATE};
      }
   }
`;

interface NavLinkProps extends ComponentBaseProps {
   href: string;
}

const NavLinkDefaultProps: NavLinkProps = {
   href: "/"
};

const NavLink: React.FC<NavLinkProps> = ({ className, href, children }) => {
   return (
      <StyledNavLink>
         <Link href={href}>
            <a className={`inner-navlink ${className}`}>{children}</a>
         </Link>
      </StyledNavLink>
   );
};

export default withDefaultProps<NavLinkProps>(NavLink, NavLinkDefaultProps);
