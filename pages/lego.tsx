import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Picture from "../components/basic/Pictures/Picture";
import FeaturedVideo from "../components/content/FeaturedVideo";
import ResposiveSection from "../components/basic/Sections/ResposiveSection";
import PageMainContent from "../containers/PageMainContent";
import { ThemeContainer } from "../themes/definitions/Theme";
import ExternalLinkButton from "../components/basic/Buttons/ExternalLinkButton";
import { FiLink, FiGithub } from "react-icons/fi";
import List from "../components/basic/List";
import FullWidthSection from "../components/basic/Sections/FullWidthSection";
import ImageCarousel from "../components/ImageCarousel";
import useModalSystemHelper from "../hooks/useModalSystemHelper";
import EnhancedPicture from "../components/basic/Pictures/EnhancedPicture";
import { ButtonSize } from "../components/basic/Buttons/Button";
import BorderedContentStyle from "../styles/BorderedContentStyle";
import { AiOutlineApple, AiOutlineAppstore } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import LegoTheme from "../themes/LegoTheme/LegoTheme";
import asPage from "../helpers/asPage";
import OverlayedBackgroundStyle from "../styles/OverlayedBackgroundStyle";
import { PageStyling } from "../styles/BaseStyles";

interface StyledtlpProps {}

const Styledtlp = styled.div<StyledtlpProps>`
   ${PageStyling};
   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.BACKGROUND};
   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};

   .overlayed-background {
      ${OverlayedBackgroundStyle}
   }

   .page-main {
      position: relative;
      z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.FOREGROUND};
   }

   .trailer-wrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      height: 0;

      .trailer {
         ${BorderedContentStyle};
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
      }
   }

   section.middle-elements {
      justify-content: space-evenly;

      article.description {
         flex-basis: 48%;

         p.description-text {
            font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
         }

         article.external-links {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;

            min-height: 80px;
            max-height: 180px;
            flex-basis: 20%;
         }
      }

      article.duties {
         flex-basis: 46%;
      }
   }
`;

const lego: React.FC = ({}) => {
   return (
      <Styledtlp>
         <div className="overlayed-background" />
         <PageMainContent className="page-main">
            <div className="trailer-wrapper">
               <iframe
                  className="trailer"
                  src="https://www.youtube.com/embed/b3QhqOA0_j8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               ></iframe>
            </div>
            <ResposiveSection className="middle-elements">
               <article className="description">
                  <p className="description-text">
                     Assemble strategic teams based on 40 years of your favorite LEGO themes. Travel
                     between maps to unlock new Minifigures by battling your way through
                     increasingly difficult missions. Each map is filled with coveted tiles,
                     materials… and perils!
                  </p>
                  <p className="description-text">
                     Uncover the full potential of your team by unlocking ultimate abilities which
                     feature Piptown’s heroes building their most powerful sets right on the
                     battlefield!
                  </p>
                  <article className="external-links">
                     <ExternalLinkButton
                        href="https://apps.apple.com/ca/app/lego-legacy-heroes-unboxed/id1393157487"
                        buttonProps={{
                           buttonSize: ButtonSize.MEDIUM,
                           style: { whiteSpace: "nowrap" }
                        }}
                     >
                        <AiOutlineApple /> APP STORE
                     </ExternalLinkButton>
                     <ExternalLinkButton
                        href="https://play.google.com/store/apps/details?id=com.gameloft.anmp.lego.heroes"
                        buttonProps={{
                           buttonSize: ButtonSize.MEDIUM,
                           style: { whiteSpace: "nowrap" }
                        }}
                     >
                        <FaGooglePlay /> GOOGLE PLAY
                     </ExternalLinkButton>
                  </article>
               </article>
               <article className="duties">
                  <List
                     items={[
                        "Worked closely with game designers and UI & UX designers to bring wireframes, flows & mockups to fully functional interactivity, responsive for multiple device resolutions, and localization-ready for over 9 languages.",
                        "Created sequencing and scripting tools to allow non-developers to customize game parameters and independently modify game subsystems.",
                        "Contributed to systems architecture planning meetings for complex gameplay problems with colleagues.",
                        "Worked on developing Lego Legacy: Heroes Unboxed from inception to launch, over a period of 3 years."
                     ]}
                  ></List>
               </article>
            </ResposiveSection>
            <FullWidthSection>
               {/* <ImageCarousel>
                  <EnhancedPicture
                     pictureProps={{
                        src: require("public/images/the-loneliness-project/tlp-dashboard.png"),
                        webp: require("public/images/the-loneliness-project/tlp-dashboard.png?webp")
                     }}
                  />
                  <EnhancedPicture
                     pictureProps={{
                        src: require("public/images/the-loneliness-project/tlp-edit-apartment.png"),
                        webp: require("public/images/the-loneliness-project/tlp-edit-apartment.png?webp")
                     }}
                  />
                  <EnhancedPicture
                     pictureProps={{
                        src: require("public/images/the-loneliness-project/tlp-login.png"),
                        webp: require("public/images/the-loneliness-project/tlp-login.png?webp")
                     }}
                  />
               </ImageCarousel> */}
            </FullWidthSection>
         </PageMainContent>
      </Styledtlp>
   );
};

// • Worked closely with game designers and UI & UX designers to bring wireframes, flows & mockups to fully functional interactivity, responsive for multiple device resolutions, and localization-ready for over 12 languages.
// • Created sequencing and scripting tools to allow non-developers to customize game parameters and independently modify game subsystems.
// • Contributed to systems architecture planning meetings for complex gameplay problems with colleagues.
// • Worked on developing Lego Legacy: Heroes Unboxed from inception to launch, over a period of 3 years.

export default asPage(lego, LegoTheme);
