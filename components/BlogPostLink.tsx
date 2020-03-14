import Link from "next/link";
import React, { useMemo } from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";

export enum BlogPost {
   IMPORTANCE_OF_COMPONENT_DESIGN = "The-Importance-of-Component-Based-UI-Design",
   ERROR = "error"
}

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
   post: BlogPost;
   sample: string;
}

const BlogPostLinkDefaultProps: BlogPostLinkProps = {
   post: BlogPost.ERROR,
   sample: ""
};

const BlogPostLink: React.FC<BlogPostLinkProps> = ({ post, sample }) => {
   const title = useMemo(() => post.split("-").join(" "), [post]);
   return (
      <StyledBlogPostLink>
         <Link href={`/posts/[pid]`} as={`/posts/${post}`}>
            <a>
               {title}
               <p>{sample}</p>
            </a>
         </Link>
      </StyledBlogPostLink>
   );
};

export default withDefaultProps<BlogPostLinkProps>(BlogPostLink, BlogPostLinkDefaultProps);
