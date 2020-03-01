import React, { Props, MouseEventHandler, FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import Theme, { ThemeContainer } from "../themes/definitions/Theme";
import NextJSIcon from "../components/icons/NextJSIcon";
import GraphqlIcon from "../components/icons/GraphqlIcon";
import Link from "next/link";
import BaseTheme from "../themes/BaseTheme/BaseTheme";
import { PictureProps } from "../components/basic/Pictures/Picture";
import EnhancedPicture from "../components/basic/Pictures/EnhancedPicture";
import OverlayedBackgroundStyle from "../styles/OverlayedBackgroundStyle";

interface StyledRecentWorkProps {} /* background-image: ${props => `url(${props.imageSrc})`};
background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;
background-position: center; */

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
   }

   .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      color: #fff;
      padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
      padding-right: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
      padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
      padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
      min-height: 100%;
      width: 400px;

      z-index: 33;

      .year {
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
      }

      .title {
         margin-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L};
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.L};
      }

      .description {
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
      padding-right: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};

      display: none;
      pointer-events: none;

      z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.FOREGROUND};

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         display: flex;
         opacity: 1;
      }

      .work-image {
         max-width: 100%;
         border-radius: 3px;
         box-shadow: 0px 3.5px 21px rgba(0, 0, 0, 0.2);
         margin: 0;
         vertical-align: middle;
      }
   }
`;

export enum Tech {
   REACT,
   NEXTJS,
   GRAPHQL,
   NODEJS
}

const techMap = {
   [Tech.REACT]: <DiReact />,
   [Tech.NEXTJS]: <NextJSIcon />,
   [Tech.GRAPHQL]: <GraphqlIcon />,
   [Tech.NODEJS]: <DiNodejsSmall />
};

interface RecentWorkProps extends Props<any> {
   year: string;
   title: string;
   description?: string;
   techList: Tech[];
   href: string;
   pictureProps: PictureProps;
   theme: (theme: Theme) => Theme;
}

const RecentWorkDefaultProps: RecentWorkProps = {
   year: "1992",
   title: "Colin Rumball",
   description: "Web Developer",
   techList: [Tech.REACT, Tech.NEXTJS, Tech.GRAPHQL, Tech.NODEJS],
   href: "#",
   pictureProps: { src: "/#" },
   theme: () => BaseTheme
};

const RecentWorkItem: React.FC<RecentWorkProps> = ({
   year,
   title,
   description,
   href,
   techList,
   pictureProps,
   theme
}) => {
   return (
      <ThemeProvider theme={theme}>
         <Link href={href}>
            <StyledRecentWork>
               <div className="overlayed-background" />
               <section className="info">
                  <h4 className="year">{year}</h4>
                  <h1 className="title">{title}</h1>
                  <p className="description">{description}</p>
                  <div className="tech-list">
                     {techList.map(t => (
                        <div className="tech-item" key={t}>
                           {techMap[t]}
                        </div>
                     ))}
                  </div>
               </section>
               <div className="work-image-container">
                  <EnhancedPicture showBorder pictureProps={pictureProps} />
               </div>
            </StyledRecentWork>
         </Link>
      </ThemeProvider>
   );
};

export default withDefaultProps<RecentWorkProps>(RecentWorkItem, RecentWorkDefaultProps);
