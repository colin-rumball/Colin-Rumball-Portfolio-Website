import React from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";
import Button, { ButtonSize } from "../components/basic/Buttons/Button";
import SocialLinks from "./SocialLinks";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import { FaRegEnvelope } from "react-icons/fa";
import Picture from "../components/basic/Pictures/Picture";

interface StyledIntroSectionProps {}

const StyledIntroSection = styled.section<StyledIntroSectionProps>`
   position: relative;
   display: flex;
   flex-direction: column;

   width: 100%;

   padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      flex-direction: row;
      justify-content: space-between;
   }

   article.introduction {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      flex-basis: 43%;

      h1.welcome-message {
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.DARK};
         white-space: nowrap;
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.XXL};

         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
      }

      h3.job-title {
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.GREY};
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.L};
         font-weight: 500;
      }

      article.information {
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;

         flex: 1;

         p {
            font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
            color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.BASE};

            strong {
               font-weight: 600;
               color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.DARK};
            }
         }
      }

      div.footer {
         display: flex;
         align-items: center;

         padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};
      }
   }

   img.desk-image {
      flex-basis: 45%;
   }
`;

/* div.links {
            a.social-link {
               font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.L};
               color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREY};

               &:hover {
                  color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREEN};
               }
            }
         } */

interface IntroSectionProps extends ComponentBaseProps {}

const IntroSectionDefaultProps: IntroSectionProps = {};

const IntroSection: React.FC<IntroSectionProps> = ({}) => {
   return (
      <StyledIntroSection>
         <article className="introduction">
            <h1 className="welcome-message">Hey, I'm Colin,</h1>
            <h3 className="job-title">
               Full Stack Web Developer & Developer Experience Enthusiast
            </h3>
            <article className="information">
               <p>
                  I'm a Toronto-based developer with 5 years experience in the mobile games industry
                  working for the major toy brands Mattel & LEGO, looking forward to new
                  opportunities and growth in web-based industries.
               </p>
               <p>
                  I'm experienced in <strong>HTML5</strong>, <strong>JS</strong> and{" "}
                  <strong>CSS3</strong> using modern libraries <strong>React</strong>,{" "}
                  <strong>Next.js</strong>, <strong>GraphQL</strong>, and <strong>Node.js</strong>.
               </p>
            </article>
            <div className="footer">
               <a target="_blank" rel="noopener noreferrer" href="mailto:colin.rumball@gmail.com">
                  <Button buttonSize={ButtonSize.MEDIUM}>
                     <FaRegEnvelope style={{ fontSize: "18px" }} />
                     SAY HELLO
                  </Button>
               </a>
               <SocialLinks />
            </div>
         </article>
         <Picture
            className="desk-image"
            src={require("public/images/desk.png")}
            webp={require("public/images/desk.png?webp")}
         />
      </StyledIntroSection>
   );
};

export default withDefaultProps<IntroSectionProps>(IntroSection, IntroSectionDefaultProps);
