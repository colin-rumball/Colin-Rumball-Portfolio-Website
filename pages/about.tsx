import React from "react";
import styled from "styled-components";
import PageMainContent from "../containers/PageMainContent";
import AboutMeSection from "../containers/AboutMeSection";
import { ThemeContainer } from "../themes/definitions/Theme";
import SkillsSection from "../containers/SkillsSection";
import DefaultTheme from "../themes/DefaultTheme/DefaultTheme";
import asPage from "../helpers/asPage";
import { useRouter } from "next/dist/client/router";

interface StyledAboutPageProps {}

const StyledAboutPage = styled.div<StyledAboutPageProps>`
   position: relative;
   min-height: calc(100vh - 60px);
   min-height: calc(100vh - 60px);

   img.van-image {
      width: 100%;

      padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
   }
`;

const AboutPage: React.FC = ({}) => {
   return (
      <StyledAboutPage>
         <PageMainContent>
            <AboutMeSection />
            <SkillsSection />
         </PageMainContent>
      </StyledAboutPage>
   );
};

export default asPage(AboutPage, DefaultTheme);
