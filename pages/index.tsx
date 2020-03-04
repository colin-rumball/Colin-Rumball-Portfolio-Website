import React from "react";
import styled, { ThemeProvider } from "styled-components";
import IntroSection from "../containers/IntroSection";
import PageMainContent from "../containers/PageMainContent";
import RecentWorkSection from "../containers/RecentWorkSection";
import DefaultTheme from "../themes/DefaultTheme/DefaultTheme";
import { ThemeContainer } from "../themes/definitions/Theme";
import asPage from "../helpers/asPage";

const StyledHomePage = styled.div`
   min-height: calc(100vh - 60px);
`;

const HomePage = () => {
   return (
      <StyledHomePage>
         <PageMainContent>
            <IntroSection />
            <RecentWorkSection />
         </PageMainContent>
      </StyledHomePage>
   );
};

export default asPage(HomePage, DefaultTheme);
