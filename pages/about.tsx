import React from "react";
import styled from "styled-components";
import AboutMeSection from "../containers/about/AboutMeSection";
import SkillsSection from "../containers/about/SkillsSection";
import PageMainContent from "../containers/PageMainContent";
import asPage from "../helpers/asPage";
import { PageStyling } from "../styles/BaseStyles";
import DefaultTheme from "../themes/DefaultTheme/DefaultTheme";

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
