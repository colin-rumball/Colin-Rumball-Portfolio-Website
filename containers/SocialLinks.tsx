import React, { Props } from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";

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
         color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};
         transition: color 0.25s ease-in-out;

         &:hover {
            color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.DARK};
         }
      }
   }
`;

interface SocialLinksProps extends ComponentBaseProps {
   linksClassName?: string;
}

const SocialLinksDefaultProps: SocialLinksProps = {};

const SocialLinks: React.FC<SocialLinksProps> = ({ className, linksClassName }) => {
   return (
      <StyledSocialLinks className={className}>
         <li>
            <a
               className={`social-link ${linksClassName}`}
               href="https://github.com/colin-rumball"
               rel="noopener noreferrer"
               target="_blank"
            >
               <FiGithub />
            </a>
         </li>
         <li>
            <a
               className={`social-link ${linksClassName}`}
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
