import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import PageMainContent from "../containers/PageMainContent";
import AboutMeSection from "../containers/AboutMeSection";
import { ThemeContainer } from "../themes/definitions/Theme";
import SkillsSection from "../containers/SkillsSection";

interface StyledAboutPageProps {}

const StyledAboutPage = styled.div<StyledAboutPageProps>`
   position: relative;

   img.van-image {
      width: 100%;

      padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
   }
`;

interface AboutPageProps extends Props<any> {}

const AboutPageDefaultProps: AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = ({}) => {
   return (
      <StyledAboutPage>
         <PageMainContent>
            {/* <AboutMeSection /> */}
            <SkillsSection />
         </PageMainContent>
      </StyledAboutPage>
   );
};

export default withDefaultProps<AboutPageProps>(AboutPage, AboutPageDefaultProps);
