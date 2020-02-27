import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledAboutMeSectionProps {}

const StyledAboutMeSection = styled.div<StyledAboutMeSectionProps>`
   section.initial-info {
      display: flex;
      flex-direction: column;

      article {
         padding: 0;
      }

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         justify-content: space-between;
         flex-direction: row;

         img.van-image {
            width: 50%;
         }

         article {
            padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
         }
      }
   }
`;

interface AboutMeSectionProps extends Props<any> {}

const AboutMeSectionDefaultProps: AboutMeSectionProps = {};

const AboutMeSection: React.FC<AboutMeSectionProps> = ({}) => {
   return (
      <StyledAboutMeSection>
         <section className="initial-info">
            <article>
               <h2>About Me</h2>
               <p>
                  I've been passionate about software development since I was in high school and
                  found an outlet of that passion in game development. I went to school for game
                  development and after working in the games industry became captivated by the
                  creativity and challenge of web development.
               </p>
            </article>
         </section>
         <section className="additional-info">
            <article>
               <p>
                  I've found a new sense of enjoyment from this different medium. A new canvas for
                  my passion for problem solving. In my spare time I find myself tinkering around
                  with side projects, searching for a more streamlined development process, and
                  finding that perfect stack. 🥞
               </p>
               <p>
                  Besides web and games I enjoy climbing mountains, doing yoga, tinkering with tech,
                  camping, and travelling with my wife.
               </p>
            </article>
         </section>
      </StyledAboutMeSection>
   );
};

export default withDefaultProps<AboutMeSectionProps>(AboutMeSection, AboutMeSectionDefaultProps);
