import React from "react";
import styled from "styled-components";
import IntroSection from "../containers/IntroSection";
import PageMain from "../containers/PageMain";
import RecentWorkSection from "../containers/RecentWorkSection";

const StyledHomePage = styled.div``;

const HomePage = () => {
   return (
      <StyledHomePage>
         <PageMain>
            <IntroSection />
            <RecentWorkSection />
         </PageMain>
      </StyledHomePage>
   );
};

export default HomePage;
