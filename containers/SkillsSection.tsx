import React, { Props, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import FullWidthSection from "../components/basic/Sections/FullWidthSection";
import Theme, { ThemeContainer } from "../themes/definitions/Theme";
import { MaxScreenConstraints } from "../styles/BaseStyles";

interface StyledSkillsSectionProps {}

const StyledSkillsSection = styled.section<StyledSkillsSectionProps>`
   width: 100%;
   padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      display: flex;
      justify-content: space-between;
      width: 75%;
   }

   article.tech-list {
      width: 100%;

      section.title-wrapper {
         h3.title {
            ${MaxScreenConstraints};
            color: #fff;
            letter-spacing: 1px;
            font-weight: 500;
            font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
            padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
         }
      }

      ul {
         display: flex;
         flex-direction: row;
         justify-content: space-evenly;
         flex-wrap: wrap;
         padding-left: 25px;

         width: 100%;

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            flex-direction: column;
            justify-content: flex-start;
         }

         &.front-end {
            color: #01b6a0;
         }

         &.back-end {
            color: #2e42da;
         }

         &.other {
            color: #ed2235;
         }

         li {
            flex-basis: 50%;

            @media (min-width: ${({ theme }: ThemeContainer) =>
                  theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
               padding-right: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
            }
         }
      }

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         max-width: 32%;
         flex-basis: 32%;

         section.title-wrapper {
            width: auto;

            left: auto;
            right: auto;
            margin-left: 0;
            margin-right: 0;

            h3.title {
               padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
            }
         }
      }
   }
`;

interface SkillsSectionProps extends Props<any> {}

const SkillsSectionDefaultProps: SkillsSectionProps = {};

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
   const themeContext: Theme = useContext(ThemeContext);
   return (
      <StyledSkillsSection>
         <article className="tech-list">
            <FullWidthSection className="title-wrapper">
               <article
                  style={{
                     boxShadow: "0px 0px 10px rgba(150, 203, 184, 0.5)",
                     background: themeContext.VARIABLES.COLORS.GRADIENTS[0]
                  }}
               >
                  <h3 className="title">FRONT END</h3>
               </article>
            </FullWidthSection>
            <ul className="front-end">
               <li>HTML5</li>
               <li>CSS (SASS)</li>
               <li>Javascript</li>
               <li>Typescript</li>
               <li>React.js</li>
               <li>Styled-Components</li>
            </ul>
         </article>
         <article className="tech-list">
            <FullWidthSection className="title-wrapper">
               <article
                  style={{
                     boxShadow: "0px 0px 10px rgba(150, 203, 184, 0.5)",
                     background: themeContext.VARIABLES.COLORS.GRADIENTS[1]
                  }}
               >
                  <h3 className="title">BACK END</h3>
               </article>
            </FullWidthSection>
            <ul className="back-end">
               <li>Node.js</li>
               <li>Express.js</li>
               <li>GraphQL</li>
               <li>Next.js</li>
               <li>Prisma</li>
               <li>PostgreSQL</li>
            </ul>
         </article>
         <article className="tech-list">
            <FullWidthSection className="title-wrapper">
               <article
                  style={{
                     boxShadow: "0px 0px 10px rgba(150, 203, 184, 0.5)",
                     background: themeContext.VARIABLES.COLORS.GRADIENTS[2]
                  }}
               >
                  <h3 className="title">OTHER</h3>
               </article>
            </FullWidthSection>
            <ul className="other">
               <li>C#</li>
               <li>C++</li>
               <li>API Integrations</li>
               <li>Dev Ops</li>
               <li>Agile Methodologies</li>
               <li>Continuous Integration</li>
            </ul>
         </article>
      </StyledSkillsSection>
   );
};

export default withDefaultProps<SkillsSectionProps>(SkillsSection, SkillsSectionDefaultProps);
