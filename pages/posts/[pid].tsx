import React from "react";
import styled from "styled-components";
import { PageStyling } from "../../styles/BaseStyles";
import PageMainContent from "../../containers/PageMainContent";
import { useRouter } from "next/router";
import { BlogPost } from "../../components/BlogPostLink";
import ImportanceOfComponentDesign from "../../containers/posts/ImportanceOfComponentDesign";

interface StyledBlogPostPageProps {}

const StyledBlogPostPage = styled.div<StyledBlogPostPageProps>`
   ${PageStyling}
`;

const BlogPostPage: React.FC = ({}) => {
   const router = useRouter();
   const { pid } = router.query;

   switch (pid) {
      case BlogPost.IMPORTANCE_OF_COMPONENT_DESIGN:
         return <ImportanceOfComponentDesign />;
   }

   return (
      <StyledBlogPostPage>
         <PageMainContent></PageMainContent>
      </StyledBlogPostPage>
   );
};

export default BlogPostPage;
