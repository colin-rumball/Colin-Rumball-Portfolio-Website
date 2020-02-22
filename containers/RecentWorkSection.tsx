import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import RecentWork, { Tech } from "../components/RecentWork";
import { ThemeContainer } from "../themes/definitions/Theme";
import { useThemeContext, ThemeEnum } from "../contexts/ThemeContext";

interface StyledRecentWorkSectionProps {}

const StyledRecentWorkSection = styled.section<StyledRecentWorkSectionProps>`
   position: relative;
   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
`;

interface RecentWorkSectionProps extends Props<any> {}

const RecentWorkSectionDefaultProps: RecentWorkSectionProps = {};

const RecentWorkSection: React.FC<RecentWorkSectionProps> = ({}) => {
   const { setTheme } = useThemeContext();
   return (
      <StyledRecentWorkSection>
         <h2>Recent Work</h2>
         <RecentWork
            href="/TLP"
            year="2020"
            title="The Loneliness Project"
            description="Sharing stories and starting a conversation about loneliness. Become part of our
               community of people who are not as alone as they think."
            techList={[Tech.REACT, Tech.NEXTJS, Tech.GRAPHQL, Tech.NODEJS]}
            imageSrc="static/TLP.png"
            imageAlt="The Loneliness Project"
            backgroundColor="#2D936C"
         />
      </StyledRecentWorkSection>
   );
};

export default withDefaultProps<RecentWorkSectionProps>(
   RecentWorkSection,
   RecentWorkSectionDefaultProps
);
