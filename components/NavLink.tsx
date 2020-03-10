import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import Link from "next/link";
import { ThemeContainer } from "../themes/definitions/Theme";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import { useRouter } from "next/dist/client/router";

interface StyledNavLinkProps {
   isCurrentPage: boolean;
}

const StyledNavLink = styled.li<StyledNavLinkProps>`
   margin-left: 4vw;

   a.inner-navlink {
      color: ${({ theme, isCurrentPage }: ThemeContainer) =>
         isCurrentPage
            ? theme.COMPONENTS.SITE_HEADER.TEXT_COLOR.ALTERNATE
            : theme.COMPONENTS.SITE_HEADER.TEXT_COLOR.DEFAULT};
      transition: color 0.25s ease-in-out;
      letter-spacing: 0.16em;
      font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
      font-weight: 500;

      &:hover {
         cursor: ${props => (props.isCurrentPage ? "default" : "pointer")};
         color: ${({ theme }: ThemeContainer) => theme.COMPONENTS.SITE_HEADER.TEXT_COLOR.ALTERNATE};
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
   const router = useRouter();
   const currentPath = router ? router.pathname : "";
   return (
      <StyledNavLink isCurrentPage={currentPath === href}>
         <Link href={href}>
            <a className={`inner-navlink ${className}`}>{children}</a>
         </Link>
      </StyledNavLink>
   );
};

export default withDefaultProps<NavLinkProps>(NavLink, NavLinkDefaultProps);
