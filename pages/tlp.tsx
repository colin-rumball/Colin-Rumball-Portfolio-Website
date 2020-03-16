import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import styled from "styled-components";
import { ButtonSize } from "../components/basic/Buttons/Button";
import ExternalLinkButton from "../components/basic/Buttons/ExternalLinkButton";
import List from "../components/basic/List";
import EnhancedPicture from "../components/basic/Pictures/EnhancedPicture";
import Picture from "../components/basic/Pictures/Picture";
import FullWidthSection from "../components/basic/Sections/FullWidthSection";
import ResposiveSection from "../components/basic/Sections/ResposiveSection";
import FeaturedVideo from "../components/content/FeaturedVideo";
import PageMainContent from "../containers/PageMainContent";
import asPage from "../helpers/asPage";
import { MaxScreenConstraints, PageStyling } from "../styles/BaseStyles";
import { ThemeContainer } from "../themes/definitions/Theme";
import TLPTheme from "../themes/TLPTheme/TLPTheme";

interface StyledtlpProps {}

const Styledtlp = styled.div<StyledtlpProps>`
   ${PageStyling};
   padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.BACKGROUND};
   background-attachment: fixed;
   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};

   section.upper-section {
      .description {
         flex-basis: 33%;
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};

         &:last-child {
            margin-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
         }

         p.text {
            margin-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
         }
      }

      article.external-links {
         display: flex;
         flex-direction: row;
         justify-content: space-evenly;
         align-items: center;
         flex-wrap: wrap;

         height: 100%;
         min-height: 0;

         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            flex-direction: column;
            min-height: 130px;
            max-height: 180px;
            flex-basis: 25%;
         }

         .link {
            margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;

            @media (min-width: ${({ theme }: ThemeContainer) =>
                  theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
               margin: 0;
            }
         }
      }
   }

   section.lightbox-images {
      justify-content: space-between;

      picture {
         @media (max-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
         }
      }
   }

   section.feature-section {
      background-color: ${({ theme }: ThemeContainer) =>
         `${theme.VARIABLES.COLORS.SECONDARY.DARK}C0`};
      margin-bottom: 0;
      padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL} 0;

      section.lower-info {
         ${MaxScreenConstraints}

         article.mobile-images {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: nowrap;
            align-items: center;

            order: 1;
            flex-basis: 65%;

            z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.FOREGROUND};

            padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;

            @media (min-width: ${({ theme }: ThemeContainer) =>
                  theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
               max-width: 65%;
               order: 0;
               padding: 0;
            }

            .inner-image {
               max-width: 30%;
            }
         }

         article.tech-and-features {
            display: flex;
            flex-direction: column;
            flex-basis: 35%;
            order: 0;

            padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};

            z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.FOREGROUND};

            @media (min-width: ${({ theme }: ThemeContainer) =>
                  theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
               order: 1;
            }

            .title {
               letter-spacing: 2px;
               font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
               padding-left: 6px;
            }

            .tech-stack {
               width: 100%;
               opacity: 0.7;
            }

            .dev-features {
               padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
               flex-grow: 1;

               .dev-feature {
                  padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XS};
               }
            }
         }
      }
   }
`;

const tlp: React.FC = ({}) => {
   return (
      <Styledtlp>
         <PageMainContent>
            <FeaturedVideo src="public/videos/tlp-main.mp4" />
            <ResposiveSection className="upper-section">
               <article className="description">
                  <p className="text">
                     The Loneliness Project is a passion project started by my dear friend Marissa
                     Korda. It began small and found fast success receiving press coverage and
                     thousands of stories.
                  </p>
                  <p className="text">
                     “At The Loneliness Project, we believe that stories have power—the power to
                     heal both listener and teller, and to show us that we aren’t ever truly alone.
                     Stories are powerful tools for building empathy and growing kindness. Those
                     shared on the site are deeply personal yet profoundly universal.”
                  </p>
               </article>
               <p className="description">
                  Marissa wished to move the site off of its exiting hosting that wasn’t under her
                  ownership, to have more control over its development and its future. The original
                  site was built using vanilla HTML, JS, and CSS, but access to the source code was
                  limited, so I took on the task of rebuilding the site from the ground up using
                  modern technologies, as well as making several quality o life improvements to the
                  experience."
               </p>
               <article className="external-links">
                  <ExternalLinkButton
                     buttonProps={{
                        icon: <FiLink />,
                        buttonSize: ButtonSize.LARGE,
                        style: { whiteSpace: "nowrap" }
                     }}
                     className="link"
                     href="https://thelonelinessproject.org"
                  >
                     VISIT WEBSITE
                  </ExternalLinkButton>
                  <ExternalLinkButton
                     buttonProps={{
                        icon: <FiGithub />,
                        buttonSize: ButtonSize.LARGE,

                        style: { whiteSpace: "nowrap" }
                     }}
                     className="link"
                     href="https://github.com/colin-rumball/The-Loneliness-Project"
                  >
                     SEE ON GITHUB
                  </ExternalLinkButton>
               </article>
            </ResposiveSection>

            <ResposiveSection className="lightbox-images">
               <EnhancedPicture
                  opensLightbox
                  showBorder
                  style={{ flexBasis: "48%" }}
                  pictureProps={{
                     src: require("public/images/the-loneliness-project/tlp-about-horizontal.png"),
                     webp: require("public/images/the-loneliness-project/tlp-about-horizontal.png?webp")
                  }}
               />
               <EnhancedPicture
                  opensLightbox
                  showBorder
                  style={{ flexBasis: "48%" }}
                  pictureProps={{
                     src: require("public/images/the-loneliness-project/tlp-story-horizontal.png"),
                     webp: require("public/images/the-loneliness-project/tlp-story-horizontal.png?webp")
                  }}
               />
            </ResposiveSection>

            <FullWidthSection className="feature-section">
               <ResposiveSection className="lower-info" style={{ justifyContent: "space-between" }}>
                  <article className="mobile-images">
                     <EnhancedPicture
                        opensLightbox
                        className="inner-image"
                        pictureProps={{
                           src: require("public/images/the-loneliness-project/tlp-main_phone.png"),
                           webp: require("public/images/the-loneliness-project/tlp-main_phone.png?webp")
                        }}
                     />
                     <EnhancedPicture
                        opensLightbox
                        className="inner-image"
                        pictureProps={{
                           src: require("public/images/the-loneliness-project/tlp-dashboard_phone.png"),
                           webp: require("public/images/the-loneliness-project/tlp-dashboard_phone.png?webp")
                        }}
                     />
                     <EnhancedPicture
                        opensLightbox
                        className="inner-image"
                        pictureProps={{
                           src: require("public/images/the-loneliness-project/tlp-edit-apartment_phone.png"),
                           webp: require("public/images/the-loneliness-project/tlp-edit-apartment_phone.png?webp")
                        }}
                     />
                  </article>
                  <article className="tech-and-features">
                     <h4 className="title">DEVELOPMENT FEATURES</h4>
                     <Picture
                        imgClassName="tech-stack"
                        src={require("public/images/the-loneliness-project/tech_stack.png")}
                        webp={require("public/images/the-loneliness-project/tech_stack.png?webp")}
                     />
                     <List className="dev-features" itemsClassName="dev-feature">
                        <>Written in modern React, using only functional components with hooks.</>
                        <>Server-side rendering using Next.js.</>
                        <>Custom webpack setup, without create-react-app or similar.</>
                        <>Authentication with JWTs to secure private routes and api endpoints.</>
                        <>GraphQL backend built and managed using Prisma.</>
                     </List>
                  </article>
               </ResposiveSection>
            </FullWidthSection>
         </PageMainContent>
      </Styledtlp>
   );
};

export default asPage(tlp, TLPTheme);
