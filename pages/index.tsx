import React from "react";
import styled from "styled-components";
import IntroSection from "../containers/IntroSection";
import PageMainContent from "../containers/PageMainContent";
import RecentWorkSection from "../containers/RecentWorkSection";
import asPage from "../helpers/asPage";
import { PageStyling } from "../styles/BaseStyles";
import DefaultTheme from "../themes/DefaultTheme/DefaultTheme";

const StyledHomePage = styled.main`
   ${PageStyling};
   padding-top: 50px;
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
