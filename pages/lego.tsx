import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import styled from "styled-components";
import { ButtonSize } from "../components/basic/Buttons/Button";
import ExternalLinkButton from "../components/basic/Buttons/ExternalLinkButton";
import List from "../components/basic/List";
import Picture from "../components/basic/Pictures/Picture";
import FullWidthSection from "../components/basic/Sections/FullWidthSection";
import ResposiveSection from "../components/basic/Sections/ResposiveSection";
import PictureCarousel from "../components/PictureCarousel";
import PageMainContent from "../containers/PageMainContent";
import asPage from "../helpers/asPage";
import { PageStyling, VideoContent } from "../styles/BaseStyles";
import OverlayedBackgroundStyle from "../styles/OverlayedBackgroundStyle";
import { ThemeContainer } from "../themes/definitions/Theme";
import LegoTheme from "../themes/LegoTheme/LegoTheme";

interface StyledtlpProps {}

const Styledtlp = styled.main<StyledtlpProps>`
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
      ${VideoContent};
   }

   section.middle-elements {
      justify-content: space-evenly;

      article.description {
         flex-basis: 48%;

         p.description-text {
            font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
            margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
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

         .duty {
            padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
         }
      }
   }

   section.carousel {
      margin-top: 0;
      margin-bottom: 0;
      padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;
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
                           icon: <AiOutlineApple />,
                           buttonSize: ButtonSize.MEDIUM,
                           style: { whiteSpace: "nowrap" }
                        }}
                     >
                        APP STORE
                     </ExternalLinkButton>
                     <ExternalLinkButton
                        href="https://play.google.com/store/apps/details?id=com.gameloft.anmp.lego.heroes"
                        buttonProps={{
                           icon: <FaGooglePlay />,
                           buttonSize: ButtonSize.MEDIUM,
                           style: { whiteSpace: "nowrap" }
                        }}
                     >
                        GOOGLE PLAY
                     </ExternalLinkButton>
                  </article>
               </article>
               <article className="duties">
                  <List title="DEVELOPMENT RESPONSIBILITIES" itemsClassName="duty">
                     <>
                        Worked closely with game designers and UI & UX designers to bring
                        wireframes, flows & mockups to fully functional interactivity, responsive
                        for multiple device resolutions, and localization-ready for over 9
                        languages.
                     </>
                     <>
                        Created sequencing and scripting tools to allow non-developers to customize
                        game parameters and independently modify game subsystems.
                     </>
                     <>
                        Contributed to systems architecture planning meetings for complex gameplay
                        problems with colleagues.
                     </>
                     <>
                        Worked on developing Lego Legacy: Heroes Unboxed from inception to launch,
                        over a period of 3 years.
                     </>
                  </List>
               </article>
            </ResposiveSection>
            <FullWidthSection className="carousel">
               <PictureCarousel>
                  <Picture
                     src={require("public/images/lego/Lego_phonemock_iphoneX_1.png")}
                     webp={require("public/images/lego/Lego_phonemock_iphoneX_1.png?webp")}
                  />
                  <Picture
                     src={require("public/images/lego/Lego_phonemock_iphoneX_2.png")}
                     webp={require("public/images/lego/Lego_phonemock_iphoneX_2.png?webp")}
                  />
                  <Picture
                     src={require("public/images/lego/Lego_phonemock_iphoneX_3.png")}
                     webp={require("public/images/lego/Lego_phonemock_iphoneX_3.png?webp")}
                  />
                  <Picture
                     src={require("public/images/lego/Lego_phonemock_iphoneX_4.png")}
                     webp={require("public/images/lego/Lego_phonemock_iphoneX_4.png?webp")}
                  />
               </PictureCarousel>
            </FullWidthSection>
         </PageMainContent>
      </Styledtlp>
   );
};

export default asPage(lego, LegoTheme);
