import React, { Props } from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledSocialLinksProps {}

const StyledSocialLinks = styled.ul<StyledSocialLinksProps>`
   display: flex;
   flex-direction: row;
   align-content: center;
   list-style-type: none;
   margin: 0;

   height: 100%;

   li {
      margin-left: 4vw;
      padding-top: 6px;

      a.social-link {
         font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.L};
         color: ${({ theme }: ThemeContainer) => theme.GENERAL.FOOTER_LINKS_COLOR.DEFAULT};

         &:hover {
            color: ${({ theme }: ThemeContainer) => theme.GENERAL.FOOTER_LINKS_COLOR.HOVER};
         }
      }
   }
`;

interface SocialLinksProps extends Props<any> {}

const SocialLinksDefaultProps: SocialLinksProps = {};

const SocialLinks: React.FC<SocialLinksProps> = ({}) => {
   return (
      <StyledSocialLinks>
         <li>
            <a
               className="social-link"
               href="https://github.com/colin-rumball"
               rel="noopener noreferrer"
               target="_blank"
            >
               <FiGithub />
            </a>
         </li>
         <li>
            <a
               className="social-link"
               href="https://www.linkedin.com/in/colinrumball/"
               rel="noopener noreferrer"
               target="_blank"
            >
               <FiLinkedin />
            </a>
         </li>
      </StyledSocialLinks>
   );
};

export default withDefaultProps<SocialLinksProps>(SocialLinks, SocialLinksDefaultProps);
