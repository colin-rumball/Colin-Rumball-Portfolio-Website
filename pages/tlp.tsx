import React, { Props, useEffect } from "react";
import styled from "styled-components";
import PageMain from "../containers/PageMain";
import { ThemeEnum, useThemeContext } from "../contexts/ThemeContext";
import { ThemeContainer } from "../themes/definitions/Theme";
import withTheme from "../helpers/withTheme";
import Card from "../components/base/Card";
import TechStack from "../containers/TechStack";
import List from "../components/base/List";

interface StyledtlpProps {}

const Styledtlp = styled.div<StyledtlpProps>`
   min-height: 100vh;
   background-image: ${({ theme }: ThemeContainer) => theme.GENERAL.BACKGROUND_IMAGE};
   background-attachment: fixed;
   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.Tan};
   text-align: center;

   .main-video {
      max-width: 100%;
   }

   p.description {
      padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;
   }

   section.mobile-images {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      max-width: 100%;

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.LARGE}) {
         flex-wrap: nowrap;
      }
   }
`;

const tlp: React.FC = ({}) => {
   return (
      <Styledtlp>
         <PageMain>
            <h1>The Loneliness Project</h1>
            <Card>
               <video className="main-video" autoPlay loop muted playsInline>
                  <source src="public/tlp-main.mp4" type="video/mp4" />
               </video>
            </Card>
            <p className="description">
               At The Loneliness Project, we believe that stories have power—the power to heal both
               listener and teller, and to show us that we aren’t ever truly alone. Stories are
               powerful tools for building empathy and growing kindness. Those shared on the site
               are deeply personal yet profoundly universal.
            </p>
            <section className="mobile-images">
               <Card>
                  <img src="public/tlp-mobile-1.png" />
               </Card>
               <Card>
                  <img src="public/tlp-mobile-2.png" />
               </Card>
               <Card>
                  <img src="public/tlp-mobile-3.png" />
               </Card>
            </section>
            <p className="description">
               The Loneliness Project is a passion project started by my dear friend Marissa Korda.
               It began small and found fast success receiving thousands of stories and counting.
               Marissa wished to move the site to have more control over its development and to fix
               several quality of life issues. The original site was built using plain old HTML, JS,
               and CSS so I took on the task of rebuilding the original site from the ground up
               using modern technologies.
            </p>
            <TechStack></TechStack>
            <h3>Features</h3>
            <ul>
               <li>Written in modern React, only functional components with hooks.</li>
               <li>Server-side rendering using Next.js.</li>
               <li>Custom webpack setup, without create-react-app or similar.</li>
               <li>Authentication with JWTs to secure private routes and api endpoints.</li>
               <li>GraphQL backend built and managed using Prisma.</li>
            </ul>
         </PageMain>
      </Styledtlp>
   );
};

export default withTheme(tlp, ThemeEnum.TLP);
