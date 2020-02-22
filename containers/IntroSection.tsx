import React from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";
import Button from "../components/base/Button";
import SocialLinks from "../components/SocialLinks";

interface StyledIntroSectionProps {}

const StyledIntroSection = styled.section<StyledIntroSectionProps>`
   position: relative;
   display: flex;
   flex-direction: column;

   width: 100%;

   padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      flex-direction: row;
   }

   article.introduction {
      h1.heading {
         color: #000;
         white-space: nowrap;
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.XXL};

         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} auto;
      }

      h3.sub-heading {
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREY};
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.L};

         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} auto;
      }

      div.footer {
         display: flex;
         justify-content: space-between;
         align-items: center;

         div.links {
            a.social-link {
               padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
               font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.L};
               color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREY};

               &:hover {
                  color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.GREEN};
               }
            }
         }
      }
   }

   article.information {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
      }

      p {
         line-height: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.M};
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.LIGHT_GREY};

         strong {
            font-weight: 600;
            color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.DARK_GREY};
         }
      }
   }
`;

interface IntroSectionProps {}

const IntroSectionDefaultProps: IntroSectionProps = {};

const IntroSection: React.FC<IntroSectionProps> = ({}) => {
   return (
      <StyledIntroSection>
         <article className="introduction">
            <h1 className="heading">Hey, I'm Colin,</h1>
            <h3 className="sub-heading">a web developer and developer experience enthusiast</h3>
            <div className="footer">
               <a target="_blank" rel="noopener noreferrer" href="mailto:colin.rumball@gmail.com">
                  <Button>Say hello</Button>
               </a>
               <SocialLinks />
            </div>
         </article>
         <article className="information">
            <p>
               I'm a Toronto based full stack developer with 5 years experience in the mobile games
               industry working for the major toy brands Mattel & LEGO, and am looking forward to
               new opportunities and growth in web-based industries.
            </p>
            <p>
               I'm experienced in <strong>HTML5</strong>, <strong>JS</strong> and{" "}
               <strong>CSS3</strong> using modern libraries <strong>React</strong>,{" "}
               <strong>Next.js</strong>, <strong>GraphQL</strong>, and <strong>Node.js</strong>.
            </p>
         </article>
      </StyledIntroSection>
   );
};

export default withDefaultProps<IntroSectionProps>(IntroSection, IntroSectionDefaultProps);
