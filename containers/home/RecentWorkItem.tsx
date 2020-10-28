import Image from "next/image";
import React, { Props } from "react";
import styled, { ThemeProvider } from "styled-components";
import withDefaultProps from "../../helpers/withDefaultProps";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import Theme, { ThemeContainer } from "../../themes/definitions/Theme";
import NextJSIcon from "../../components/icons/NextJSIcon";
import GraphqlIcon from "../../components/icons/GraphqlIcon";
import Link from "next/link";
import BaseTheme from "../../themes/BaseTheme/BaseTheme";
import OverlayedBackgroundStyle from "../../styles/OverlayedBackgroundStyle";

interface StyledRecentWorkProps {}

const StyledRecentWork = styled.a<StyledRecentWorkProps>`
   position: relative;
   display: flex;

   max-width: 100%;

   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.WEAK};

   box-shadow: 0 4px 17px rgba(0, 0, 0, 0.18);
   cursor: pointer;
   margin: ${({ theme }: ThemeContainer) => `${theme.VARIABLES.SPACING.L} auto`};

   transition: transform 0.24s cubic-bezier(0.18, 0.89, 0.4, 1.03), box-shadow 0.2s ease-in;
   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.BACKGROUND};

   &:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.28);
   }

   .overlayed-background {
      ${OverlayedBackgroundStyle}
      border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.WEAK};
   }

   .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      color: #fff;
      padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
      padding-right: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
      padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};
      padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
      min-height: 100%;
      width: 400px;

      z-index: 33;

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
         padding-right: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
         padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
         padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
      }

      .year {
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
         letter-spacing: 0.1em;
         text-transform: uppercase;
         opacity: 0.65;
      }

      .title {
         margin-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.L};
      }

      .quote {
         flex: 1;
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.M};
      }

      .tech-list {
         display: flex;
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.XL};

         .tech-item {
            max-height: 100%;
         }
      }
   }

   .work-image-container {
      position: relative;
      align-items: center;
      padding: 0;
      overflow: hidden;

      flex: 1;
      padding: ${({ theme }: ThemeContainer) => `${theme.VARIABLES.SPACING.XXL} 0`};

      display: none;
      pointer-events: none;

      z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.FOREGROUND};

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         display: flex;
         opacity: 1;
      }

      .work-image {
         box-shadow: 0px 3.5px 21px rgba(0, 0, 0, 0.2);
         margin: 0;
         vertical-align: middle;
         border: 1px solid white;
      }
   }
`;

export enum Tech {
   REACT,
   NEXTJS,
   GRAPHQL,
   NODEJS,
}

const techMap = {
   [Tech.REACT]: <DiReact />,
   [Tech.NEXTJS]: <NextJSIcon />,
   [Tech.GRAPHQL]: <GraphqlIcon />,
   [Tech.NODEJS]: <DiNodejsSmall />,
};

interface RecentWorkProps extends Props<any> {
   year: string;
   workType: string;
   title: string;
   quote?: string;
   techList: Tech[];
   href: string;
   imageSrc: string;
   theme: (theme: Theme) => Theme;
}

const RecentWorkDefaultProps: RecentWorkProps = {
   year: "1992",
   workType: "PERSON",
   title: "Colin Rumball",
   quote: "Web Developer",
   techList: [],
   href: "#",
   imageSrc: "",
   theme: () => BaseTheme,
};

const RecentWorkItem: React.FC<RecentWorkProps> = ({
   year,
   workType,
   title,
   quote,
   href,
   techList,
   imageSrc,
   theme,
}) => {
   return (
      <ThemeProvider theme={theme}>
         <Link href={href}>
            <StyledRecentWork>
               <div className="overlayed-background" />
               <section className="info">
                  <h4 className="year">
                     {workType} | {year}
                  </h4>
                  <h1 className="title">{title}</h1>
                  <p className="quote">"{quote}"</p>
                  <div className="tech-list">
                     {techList.map((t) => (
                        <div className="tech-item" key={t}>
                           {techMap[t]}
                        </div>
                     ))}
                  </div>
               </section>
               <div className="work-image-container">
                  <Image src={imageSrc} className={`work-image`} width="513" height="320" />
               </div>
            </StyledRecentWork>
         </Link>
      </ThemeProvider>
   );
};

export default withDefaultProps<RecentWorkProps>(RecentWorkItem, RecentWorkDefaultProps);
