import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import RecentWorkItem, { Tech } from "./RecentWorkItem";
import { ThemeContainer } from "../themes/definitions/Theme";
import TLPTheme from "../themes/TLPTheme/TLPTheme";
import LegoTheme from "../themes/LegoTheme/LegoTheme";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import UnoTheme from "../themes/UnoTheme/UnoTheme";
import Section from "../components/Section";

interface StyledRecentWorkSectionProps {}

const StyledRecentWorkSection = styled(Section)<StyledRecentWorkSectionProps>``;

interface RecentWorkSectionProps extends ComponentBaseProps {}

const RecentWorkSectionDefaultProps: RecentWorkSectionProps = {};

const RecentWorkSection: React.FC<RecentWorkSectionProps> = ({}) => {
   return (
      <StyledRecentWorkSection>
         <RecentWorkItem
            href="/tlp"
            year="2020"
            workType="WEBSITE"
            title="The Loneliness Project"
            quote="Sharing stories and starting a conversation about loneliness. Become part of our
               community of people who are not as alone as they think."
            techList={[Tech.REACT, Tech.NEXTJS, Tech.GRAPHQL, Tech.NODEJS]}
            innerPictureProps={{
               style: { border: "1px solid #fff" },
               src: require("public/images/the-loneliness-project/TLP.png"),
               webp: require("public/images/the-loneliness-project/TLP.png?webp")
            }}
            theme={TLPTheme}
         />
         <RecentWorkItem
            href="/lego"
            year="2020"
            workType="MOBILE GAME"
            title="LEGO Legacy: Heroes Unboxed"
            quote="Immerse yourself in a vibrant LEGO® universe full of action, battles, sets and heroes! Your favourite minifigures and sets are busting out of the box in the most vibrant turn-based RPG ever assembled."
            innerPictureProps={{
               src: require("public/images/lego/lego.png"),
               webp: require("public/images/lego/lego.png?webp")
            }}
            techList={[]}
            theme={LegoTheme}
         />
         <RecentWorkItem
            href="/uno"
            year="2013"
            workType="MOBILE GAME"
            title="UNO & Friends"
            quote="UNO™ & Friends brings an entirely new social dimension to the classic, fast-paced, and competitive gameplay of UNO™. With engaging multiplatform play, which promises fast fun for everyone."
            innerPictureProps={{
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
