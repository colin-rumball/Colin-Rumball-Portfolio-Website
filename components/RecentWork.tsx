import React, { Props, MouseEventHandler } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { ThemeContainer } from "../themes/definitions/Theme";
import NextJSIcon from "./NextJSIcon";
import GraphqlIcon from "./icons/GraphqlIcon";
import Link from "next/link";

interface StyledRecentWorkProps {
   backgroundColor: string;
   imageSrc: string;
}

const StyledRecentWork = styled.a<StyledRecentWorkProps>`
   display: flex;
   position: relative;

   max-width: 100%;

   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.WEAK};

   box-shadow: 0 4px 17px rgba(0, 0, 0, 0.18);
   cursor: pointer;
   margin: ${({ theme }: ThemeContainer) => `${theme.VARIABLES.SPACING.S} auto`};

   transition: transform 0.24s cubic-bezier(0.18, 0.89, 0.4, 1.03), box-shadow 0.2s ease-in;

   background-image: ${props => `url(${props.imageSrc})`};
   background-attachment: fixed;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;

   &:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.28);
   }

   @media (max-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      &::after {
         content: "";
         background-color: rgba(40, 40, 40, 0.6);
         top: 0;
         left: 0;
         bottom: 0;
         right: 0;
         position: absolute;
      }
   }

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      background-color: ${props => props.backgroundColor};
      background-image: none;
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
      display: flex;
      align-items: center;
      padding: 0;
      overflow: hidden;

      flex: 1;
      padding: ${({ theme }: ThemeContainer) => `${theme.VARIABLES.SPACING.XXL} 0`};

      display: none;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      opacity: 0.4;

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         display: block;
         position: relative;
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
   imageSrc: string;
   imageAlt: string;
   backgroundColor: string;
   onClick?: MouseEventHandler<any>;
}

const RecentWorkDefaultProps: RecentWorkProps = {
   year: "1992",
   title: "Colin Rumball",
   description: "Web Developer",
   techList: [Tech.REACT, Tech.NEXTJS, Tech.GRAPHQL, Tech.NODEJS],
   href: "#",
   imageSrc: "/",
   imageAlt: "no image",
   backgroundColor: "#222"
};

const RecentWork: React.FC<RecentWorkProps> = ({
   year,
   title,
   description,
   href,
   imageSrc,
   imageAlt,
   techList,
   backgroundColor,
   onClick
}) => {
   return (
      <Link href={href} prefetch={true}>
         <StyledRecentWork backgroundColor={backgroundColor} imageSrc={imageSrc} onClick={onClick}>
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
               <img className="work-image" src={imageSrc} alt={imageAlt} />
            </div>
         </StyledRecentWork>
      </Link>
   );
};

export default withDefaultProps<RecentWorkProps>(RecentWork, RecentWorkDefaultProps);
