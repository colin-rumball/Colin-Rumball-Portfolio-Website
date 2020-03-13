import React, { useMemo } from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../helpers/withDefaultProps";
import Link from "next/link";
import { ThemeContainer } from "../themes/definitions/Theme";

export enum BlogPost {
   IMPORTANCE_OF_COMPONENT_DESIGN = "The-Importance-of-Component-Based-UI-Design",
   ERROR = "error"
}

interface StyledBlogPostLinkProps {}

const StyledBlogPostLink = styled.li<StyledBlogPostLinkProps>`
   flex-basis: 30%;

   a {
      font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.M};
      color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};
      transition: color 0.25s ease-in-out;

      &:hover {
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.LIGHT};
      }
   }

   p {
      margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
      font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
      color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.LIGHT};
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
            <a>{title}</a>
         </Link>
         <p>{sample}</p>
      </StyledBlogPostLink>
   );
};

export default withDefaultProps<BlogPostLinkProps>(BlogPostLink, BlogPostLinkDefaultProps);
