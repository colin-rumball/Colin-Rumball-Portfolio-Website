import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IntroSection from "../containers/IntroSection";
import PageMainContent from "../containers/PageMainContent";
import RecentWorkSection from "../containers/RecentWorkSection";

const StyledHomePage = styled.div``;

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

export default HomePage;
