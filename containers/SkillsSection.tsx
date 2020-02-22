import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import List from "../components/base/List";

interface StyledSkillsSectionProps {}

const StyledSkillsSection = styled.section<StyledSkillsSectionProps>`
   article.lists {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
   }
`;

interface SkillsSectionProps extends Props<any> {}

const SkillsSectionDefaultProps: SkillsSectionProps = {};

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
   return (
      <StyledSkillsSection>
         <h2>Things I Like</h2>
         <article className="lists">
            <List
               title="Front-End"
               items={[
                  "HTML5",
                  "CSS (SASS)",
                  "Javascript",
                  "Typescript",
                  "React.js",
                  "Styled-Components"
               ]}
            />
            <List
               title="Back-End"
               items={["Node.js", "Express.js", "GraphQL", "Next.js", "Prisma", "PostgreSQL"]}
            />
            <List
               title="Other"
               items={[
                  "C#",
                  "C++",
                  "API Integrations",
                  "Dev Ops",
                  "Agile Methodologies",
                  "Continuous Integration"
               ]}
            />
         </article>
      </StyledSkillsSection>
   );
};

export default withDefaultProps<SkillsSectionProps>(SkillsSection, SkillsSectionDefaultProps);
