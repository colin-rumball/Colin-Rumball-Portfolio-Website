import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";
import Picture from "../components/basic/Pictures/Picture";
import Button, { ButtonSize } from "../components/basic/Buttons/Button";
import ExternalLinkButton from "../components/basic/Buttons/ExternalLinkButton";
import { FaRegEnvelope } from "react-icons/fa";
import { GoFile } from "react-icons/go";
import SocialLinks from "./SocialLinks";
import FullWidthSection from "../components/basic/Sections/FullWidthSection";
import { FiFileText } from "react-icons/fi";
import LinkButton from "../components/basic/Buttons/LinkButton";

interface StyledAboutMeSectionProps {}

const StyledAboutMeSection = styled.div<StyledAboutMeSectionProps>`
   position: relative;
   display: flex;
   flex-direction: column;

   section.about-image {
      margin-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         flex-basis: 75%;
         position: relative;
         width: auto;

         left: auto;
         right: auto;
         margin-left: 0;
         margin-right: 0;

         .inner-image {
            min-height: 495px;
            object-fit: cover;
         }
      }
   }

   section.info {
      position: relative;
      margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;

      h1.title {
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.DARK};

         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.ML};
         letter-spacing: 0.2em;
         font-weight: bold;
         white-space: nowrap;

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            text-align: center;
         }
      }

      .social-links {
         position: absolute;
         top: 0;
         right: 0;
         width: 50%;
         display: flex;
         justify-content: flex-end;

         li {
            margin-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
            padding: 0;
         }

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            display: none;
         }
      }

      article.description {
         p {
            font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
         }

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            position: absolute;
            top: 8%;
            right: 0;
            width: 60%;
            padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
            padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
            padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
            padding-right: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
            min-width: 520px;
            background: #fff;
            box-shadow: 0px 0px 10px #a4e2cc;
         }
      }

      article.buttons {
         position: relative;
         display: flex;
         justify-content: space-evenly;
         width: 100%;
         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL} 0;

         .social-links {
            display: none;
         }

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;

            .about-button {
               margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
            }
         }
      }

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         flex-basis: 25%;
         display: flex;
         justify-content: space-between;
         flex-direction: column;
         margin: 0;
      }
   }

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};
      min-height: 495px;
   }
`;

interface AboutMeSectionProps extends Props<any> {}

const AboutMeSectionDefaultProps: AboutMeSectionProps = {};

const AboutMeSection: React.FC<AboutMeSectionProps> = ({}) => {
   return (
      <StyledAboutMeSection>
         <FullWidthSection className="about-image">
            <Picture
               imgClassName="inner-image"
               src={require("public/images/about/van.png")}
               webp={require("public/images/about/van.png?webp")}
            />
         </FullWidthSection>
         <section className="info">
            <h1 className="title">ABOUT COLIN</h1>
            <SocialLinks className="social-links" linksClassName="social-link" />
            <article className="description">
               <p>
                  I've been passionate about software development since high school, and being a
                  lifelong gamer, I originally sought an outlet for my interest in the games
                  industry, studying game development at school and then working in the mobile games
                  industry.
               </p>
               <p>
                  In recent years, I became captivated by the creativity and challenge of web
                  development, and I've found a new sense of enjoyment from this different medium, a
                  new canvas for my passion for problem solving. In my spare time I find myself
                  dabbling in side projects, searching for a more streamlined development process,
                  and finding that perfect stack 🥞
               </p>
               <p>
                  Besides web and games I enjoy climbing mountains, doing yoga, tinkering with tech,
                  camping, and travelling with my wife.
               </p>
            </article>
            <article className="buttons">
               <a href="mailto:colin.rumball@gmail.com">
                  <Button
                     icon={<FaRegEnvelope />}
                     buttonSize={ButtonSize.MEDIUM}
                     className="about-button"
                  >
                     SAY HELLO
                  </Button>
               </a>
               <LinkButton
                  href="public/ColinRumball_Resume2018.pdf"
                  linkProps={{ target: "_blank" }}
                  buttonProps={{
                     icon: <FiFileText />,
                     buttonSize: ButtonSize.MEDIUM,
                     className: "about-button"
                  }}
               >
                  RESUME
               </LinkButton>
            </article>
         </section>
      </StyledAboutMeSection>
   );
};

export default withDefaultProps<AboutMeSectionProps>(AboutMeSection, AboutMeSectionDefaultProps);
