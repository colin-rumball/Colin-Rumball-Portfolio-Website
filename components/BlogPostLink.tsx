import Link from "next/link";
import React, { useMemo } from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledBlogPostLinkProps {}

const StyledBlogPostLink = styled.li<StyledBlogPostLinkProps>`
   max-width: 768px;
   margin-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};

   a {
      display: block;
      width: 100%;
      height: 100%;

      font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.M};
      color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};
      transition: color 0.25s ease-in-out;

      &:hover {
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.DARK};
      }

      p {
         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.LIGHT};
      }
   }
`;

interface BlogPostLinkProps extends ComponentBaseProps {
   title: string;
   sample: string;
   link: string;
}

const BlogPostLinkDefaultProps: BlogPostLinkProps = {
   title: "",
   sample: "",
   link: "",
};

const BlogPostLink: React.FC<BlogPostLinkProps> = ({ title, sample, link }) => {
   return (
      <StyledBlogPostLink>
         <Link href={link}>
            <a target="_blank">
               {title}
               <p>{sample}</p>
            </a>
         </Link>
      </StyledBlogPostLink>
   );
};

export default withDefaultProps<BlogPostLinkProps>(BlogPostLink, BlogPostLinkDefaultProps);
