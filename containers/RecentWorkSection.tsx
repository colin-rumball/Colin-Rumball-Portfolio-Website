import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import RecentWorkItem, { Tech } from "./RecentWorkItem";
import { ThemeContainer } from "../themes/definitions/Theme";
import TLPTheme from "../themes/TLPTheme/TLPTheme";
import LegoTheme from "../themes/LegoTheme/LegoTheme";
import Picture from "../components/basic/Pictures/Picture";
import EnhancedPicture from "../components/basic/Pictures/EnhancedPicture";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import UnoTheme from "../themes/UnoTheme/UnoTheme";

interface StyledRecentWorkSectionProps {}

const StyledRecentWorkSection = styled.section<StyledRecentWorkSectionProps>`
   position: relative;
   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};

   h2.section-header {
      color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.DARK};
   }
`;

interface RecentWorkSectionProps extends ComponentBaseProps {}

const RecentWorkSectionDefaultProps: RecentWorkSectionProps = {};

const RecentWorkSection: React.FC<RecentWorkSectionProps> = ({}) => {
   return (
      <StyledRecentWorkSection>
         <h2 className="section-header">Recent Work</h2>
         <RecentWorkItem
            href="/tlp"
            year="2020"
            title="The Loneliness Project"
            description="Sharing stories and starting a conversation about loneliness. Become part of our
               community of people who are not as alone as they think."
            techList={[Tech.REACT, Tech.NEXTJS, Tech.GRAPHQL, Tech.NODEJS]}
            pictureProps={{
               src: require("public/images/tlp/TLP.png"),
               webp: require("public/images/tlp/TLP.png?webp")
            }}
            theme={TLPTheme}
         />
         <RecentWorkItem
            href="/lego"
            year="2020"
            title="LEGO Legacy: Heroes Unboxed"
            description="Immerse yourself in a vibrant LEGO® universe full of action, battles, sets and heroes! Your favourite minifigures and sets are busting out of the box in the most vibrant turn-based RPG ever assembled."
            pictureProps={{
               src: require("public/images/lego/lego.png"),
               webp: require("public/images/lego/lego.png?webp")
            }}
            techList={[]}
            theme={LegoTheme}
         />
         <RecentWorkItem
            href="/uno"
            year="2013"
            title="UNO & Friends"
            description="UNO™ & Friends brings an entirely new social dimension to the classic, fast-paced, and competitive gameplay of UNO™. With engaging multiplatform play, which promises fast fun for everyone, UNO™ & Friends is a game that can be played anywhere at any time."
            pictureProps={{
               src: require("public/images/uno/uno-small.png"),
               webp: require("public/images/uno/uno-small.png?webp")
            }}
            techList={[]}
            theme={UnoTheme}
         />
      </StyledRecentWorkSection>
   );
};

export default withDefaultProps<RecentWorkSectionProps>(
   RecentWorkSection,
   RecentWorkSectionDefaultProps
);
