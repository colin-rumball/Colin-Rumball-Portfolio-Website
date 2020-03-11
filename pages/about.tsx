import React from "react";
import styled from "styled-components";
import PageMainContent from "../containers/PageMainContent";
import AboutMeSection from "../containers/about/AboutMeSection";
import SkillsSection from "../containers/about/SkillsSection";
import DefaultTheme from "../themes/DefaultTheme/DefaultTheme";
import asPage from "../helpers/asPage";
import { PageStyling } from "../styles/BaseStyles";

interface StyledAboutPageProps {}

const StyledAboutPage = styled.div<StyledAboutPageProps>`
   ${PageStyling}
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
