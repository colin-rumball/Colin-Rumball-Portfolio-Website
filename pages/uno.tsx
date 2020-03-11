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
import useModalSystemHelper from "../hooks/useModalSystemHelper";
import EnhancedPicture from "../components/basic/Pictures/EnhancedPicture";
import { ButtonSize } from "../components/basic/Buttons/Button";
import BorderedContentStyle from "../styles/BorderedContentStyle";
import { AiOutlineApple, AiOutlineAppstore } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import LegoTheme from "../themes/LegoTheme/LegoTheme";
import asPage from "../helpers/asPage";
import OverlayedBackgroundStyle from "../styles/OverlayedBackgroundStyle";
import UnoTheme from "../themes/UnoTheme/UnoTheme";
import PictureCarousel from "../components/PictureCarousel";
import { PageStyling, VideoContent } from "../styles/BaseStyles";

interface StyledtlpProps {}

const Styledtlp = styled.div<StyledtlpProps>`
   ${PageStyling};
   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.BACKGROUND};
   background-size: cover;
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

   article.description {
      flex-basis: 40%;
      p.description-text {
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
      }
   }

   .duties {
      flex-basis: 55%;

      .duty {
         padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
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
                  src="https://www.youtube.com/embed/IszDOA1lt6Q"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               ></iframe>
            </div>
            <ResposiveSection>
               <article className="description">
                  <p className="description-text">
                     I worked on the UNO & Friends mobile game development team for 2 years. During
                     my time on the game team I worked on several different system, such as UI
                     scripting, gameplay programming, game server development, and project
                     architecture & building.
                  </p>
                  <p className="description-text">
                     Sadly after 5 years of continuous updates the UNO & Friends mobile game ended
                     development of any further support in 2018 and closed the servers in February
                     of 2019.
                  </p>
               </article>
               <List className="duties" title="DEVELOPMENT RESPONSIBILITIES" itemsClassName="duty">
                  <>
                     Worked closely with game designers and UI & UX designers to bring wireframes,
                     flows & mockups to fully functional interactivity, responsive for multiple
                     device resolutions, and localization-ready for over 12 languages.
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
                     Routinely updated the UNO & Friends game server with new gameplay mechanics and
                     performance improvements on a 6 week update cycle for 18 months.
                  </>
               </List>
            </ResposiveSection>
            <FullWidthSection className="carousel">
               <PictureCarousel>
                  <Picture
                     src={require("public/images/uno/uno_appstore1.png")}
                     webp={require("public/images/uno/uno_appstore1.png?webp")}
                  />
                  <Picture
                     src={require("public/images/uno/uno_appstore2.png")}
                     webp={require("public/images/uno/uno_appstore2.png?webp")}
                  />
                  <Picture
                     src={require("public/images/uno/uno_appstore3.png")}
                     webp={require("public/images/uno/uno_appstore3.png?webp")}
                  />
               </PictureCarousel>
            </FullWidthSection>
         </PageMainContent>
      </Styledtlp>
   );
};

export default asPage(lego, UnoTheme);
