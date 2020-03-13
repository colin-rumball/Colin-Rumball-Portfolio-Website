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
		width: 100%;
      display: flex;
		justify-content: space-between;
      list-style-type: none;
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
                  post={BlogPost.IMPORTANCE_OF_COMPONENT_DESIGN}
                  sample="I believe that investing in creating a smooth pipeline for developing UI is worth the
						time it takes to set up, and offers many benefits to the entire creation pipeline..."
               />
            </ul>
         </PageMainContent>
      </StyledBlogPage>
   );
};

export default asPage(BlogPage, DefaultTheme);
