import React, { Props, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import withDefaultProps from "../../helpers/withDefaultProps";
import FullWidthSection from "../../components/basic/Sections/FullWidthSection";
import Theme, { ThemeContainer } from "../../themes/definitions/Theme";
import { MaxScreenConstraints } from "../../styles/BaseStyles";
import List from "../../components/basic/List";
import Section from "../../components/basic/Sections/Section";

interface StyledSkillsSectionProps {}

const StyledSkillsSection = styled(Section)<StyledSkillsSectionProps>`
   margin: 0;

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      display: flex;
      justify-content: space-between;
      width: 71%;
      margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;
   }

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.LARGE}) {
      width: 75%;
   }

   div.tech-list {
      width: 100%;

      section.title-wrapper {
         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            margin: 0;
         }

         h3.title {
            ${MaxScreenConstraints};
            color: #fff;
            letter-spacing: 1px;
            font-weight: 500;
            font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
            padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
         }
      }

      .skill-list {
         display: flex;
         flex-direction: row;
         justify-content: space-evenly;
         flex-wrap: wrap;
         padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
         margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;

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

         .skill-list-item {
            flex-basis: 50%;
            font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.M};

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
               padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
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
         <div className="tech-list">
            <FullWidthSection className="title-wrapper">
               <div
                  style={{
                     boxShadow: "0px 0px 10px rgba(150, 203, 184, 0.5)",
                     background: themeContext.VARIABLES.COLORS.GRADIENTS[0]
                  }}
               >
                  <h3 className="title">FRONT END</h3>
               </div>
            </FullWidthSection>
            <List className="skill-list front-end" itemsClassName="skill-list-item">
               <>HTML5</>
               <>CSS (SASS)</>
               <>Javascript</>
               <>Typescript</>
               <>React.js</>
               <>Styled-Components</>
            </List>
         </div>
         <div className="tech-list">
            <FullWidthSection className="title-wrapper">
               <div
                  style={{
                     boxShadow: "0px 0px 10px rgba(150, 203, 184, 0.5)",
                     background: themeContext.VARIABLES.COLORS.GRADIENTS[1]
                  }}
               >
                  <h3 className="title">BACK END</h3>
               </div>
            </FullWidthSection>
            <List className="skill-list back-end" itemsClassName="skill-list-item">
               <>Node.js</>
               <>Express.js</>
               <>GraphQL</>
               <>Next.js</>
               <>Prisma</>
               <>PostgreSQL</>
            </List>
         </div>
         <div className="tech-list">
            <FullWidthSection className="title-wrapper">
               <div
                  style={{
                     boxShadow: "0px 0px 10px rgba(150, 203, 184, 0.5)",
                     background: themeContext.VARIABLES.COLORS.GRADIENTS[2]
                  }}
               >
                  <h3 className="title">OTHER</h3>
               </div>
            </FullWidthSection>
            <List className="skill-list other" itemsClassName="skill-list-item">
               <>C#</>
               <>C++</>
               <>API Integrations</>
               <>Dev Ops</>
               <>Agile Methodologies</>
               <>Continuous Integration</>
            </List>
         </div>
      </StyledSkillsSection>
   );
};

export default withDefaultProps<SkillsSectionProps>(SkillsSection, SkillsSectionDefaultProps);
