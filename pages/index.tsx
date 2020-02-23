import React from "react";
import styled from "styled-components";
import IntroSection from "../containers/IntroSection";
import PageMain from "../containers/PageMain";
import RecentWorkSection from "../containers/RecentWorkSection";

const StyledHomePage = styled.div``;

const HomePage = ({ endpoint }) => {
   return (
      <StyledHomePage>
         <PageMain>
            <div>endpoint: {endpoint}</div>
            <IntroSection />
            <RecentWorkSection />
         </PageMain>
      </StyledHomePage>
   );
};

HomePage.getInitialProps = () => {
   if (typeof process !== "undefined") {
      return { endpoint: process.env.CR_FRONTEND_ENDPOINT };
   }
   return {};
};

export default HomePage;
