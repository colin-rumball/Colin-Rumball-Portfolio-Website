import React from "react";
import styled from "styled-components";
import BlogPostLink, { BlogPost } from "../components/BlogPostLink";
import PageMainContent from "../containers/PageMainContent";
import asPage from "../helpers/asPage";
import { PageStyling } from "../styles/BaseStyles";
import DefaultTheme from "../themes/DefaultTheme/DefaultTheme";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledBlogPageProps {}

const StyledBlogPage = styled.div<StyledBlogPageProps>`
   ${PageStyling}
   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};

   .main-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
         text-align: center;
         font-weight: 600;
      }

      h3 {
         margin-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.LIGHT};
         text-align: center;
         font-weight: 500;
      }
   }

   .blog-posts {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style-type: none;
      padding: 0;

      margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
   }
`;

const BlogPage: React.FC = ({}) => {
   return (
      <StyledBlogPage>
         <PageMainContent className="main-content">
            <h1>Dev Blog</h1>
            <h3>My opinions on development and process</h3>
            <ul className="blog-posts">
               <BlogPostLink
                  title="The Importance of Component Based UI Design"
                  sample="I believe that investing in creating a smooth pipeline for developing UI is worth the
						time it takes to set up, and offers many benefits to the entire creation pipeline..."
                  link="https://medium.com/swlh/the-importance-of-component-based-ui-design-666e5dfc7c1a?source=friends_link&sk=619577803d61a6c80bc7a5c4015e51cc"
               />
            </ul>
         </PageMainContent>
      </StyledBlogPage>
   );
};

export default asPage(BlogPage, DefaultTheme);
