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
import TLPTheme from "../themes/TLPTheme/TLPTheme";
import asPage from "../helpers/asPage";

interface StyledtlpProps {}

const Styledtlp = styled.div<StyledtlpProps>`
   min-height: 100vh;
   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.BACKGROUND};
   background-attachment: fixed;
   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};

   section {
      p.description {
         flex-basis: 33%;
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
      }

      article.external-links {
         display: flex;
         flex-direction: row;
         justify-content: space-evenly;
         align-items: center;

         flex-basis: 18%;

         height: 100%;
         min-height: 130px;
         max-height: 180px;

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            flex-direction: column;
         }
      }

      article.mobile-images {
         flex-basis: 55%;

         z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.FOREGROUND};

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            max-width: 55%;
         }
      }

      article.tech-and-features {
         display: flex;
         flex-direction: column;
         flex-basis: 35%;

         padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};

         z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.FOREGROUND};

         .tech-stack {
            padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
            width: 100%;
         }

         .dev-features {
            padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};
            flex-grow: 1;
         }
      }
   }

   div.lower-background {
      position: absolute;
      left: 0;
      right: 0;
      height: 600px;

      margin: 0;

      background-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.SECONDARY.BASE};
      z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.MID_GROUND};
   }
`;

const tlp: React.FC = ({}) => {
   return (
      <Styledtlp>
         <PageMainContent>
            <FeaturedVideo src="public/videos/tlp-main.mp4" />
            <ResposiveSection>
               <p className="description">
                  At The Loneliness Project, we believe that stories have power—the power to heal
                  both listener and teller, and to show us that we aren’t ever truly alone. Stories
                  are powerful tools for building empathy and growing kindness. Those shared on the
                  site are deeply personal yet profoundly universal.
               </p>
               <p className="description">
                  The Loneliness Project is a passion project started by my dear friend Marissa
                  Korda. It began small and found fast success receiving thousands of stories and
                  counting. Marissa wished to move the site to have more control over its
                  development and to fix several quality of life issues. The original site was built
                  using plain old HTML, JS, and CSS so I took on the task of rebuilding the original
                  site from the ground up using modern technologies.
               </p>
               <article className="external-links">
                  <ExternalLinkButton
                     buttonProps={{ buttonSize: ButtonSize.MEDIUM }}
                     href="https://thelonelinessproject.org"
                  >
                     <FiLink /> VISIT WEBSITE
                  </ExternalLinkButton>
                  <ExternalLinkButton
                     buttonProps={{ buttonSize: ButtonSize.MEDIUM }}
                     href="https://github.com/colin-rumball/The-Loneliness-Project"
                  >
                     <FiGithub /> SEE ON GITHUB
                  </ExternalLinkButton>
               </article>
            </ResposiveSection>

            <ResposiveSection style={{ justifyContent: "space-between" }}>
               <EnhancedPicture
                  opensLightbox
                  showBorder
                  style={{ flexBasis: "48%" }}
                  pictureProps={{
                     src: require("public/images/tlp/tlp-about-horizontal.png"),
                     webp: require("public/images/tlp/tlp-about-horizontal.png?webp")
                  }}
               />
               <EnhancedPicture
                  opensLightbox
                  showBorder
                  style={{ flexBasis: "48%" }}
                  pictureProps={{
                     src: require("public/images/tlp/tlp-story-horizontal.png"),
                     webp: require("public/images/tlp/tlp-story-horizontal.png?webp")
                  }}
               />
            </ResposiveSection>

            <FullWidthSection>
               <ResposiveSection style={{ justifyContent: "space-between" }}>
                  <article className="mobile-images">
                     <ImageCarousel>
                        <EnhancedPicture
                           pictureProps={{
                              src: require("public/images/tlp/tlp-dashboard.png"),
                              webp: require("public/images/tlp/tlp-dashboard.png?webp")
                           }}
                        />
                        <EnhancedPicture
                           pictureProps={{
                              src: require("public/images/tlp/tlp-edit-apartment.png"),
                              webp: require("public/images/tlp/tlp-edit-apartment.png?webp")
                           }}
                        />
                        <EnhancedPicture
                           pictureProps={{
                              src: require("public/images/tlp/tlp-login.png"),
                              webp: require("public/images/tlp/tlp-login.png?webp")
                           }}
                        />
                     </ImageCarousel>
                  </article>
                  <article className="tech-and-features">
                     <Picture
                        className="tech-stack"
                        src={require("public/tech.png")}
                        webp={require("public/tech.png?webp")}
                     />
                     <List
                        className="dev-features"
                        title="DEVELOPMENT FEATURES"
                        items={[
                           "Written in modern React, using only functional components with hooks.",
                           "Server-side rendering using Next.js.",
                           "Custom webpack setup, without create-react-app or similar.",
                           "Authentication with JWTs to secure private routes and api endpoints.",
                           "GraphQL backend built and managed using Prisma."
                        ]}
                     />
                  </article>
               </ResposiveSection>
            </FullWidthSection>
         </PageMainContent>
      </Styledtlp>
   );
};

export default asPage(tlp, TLPTheme);
