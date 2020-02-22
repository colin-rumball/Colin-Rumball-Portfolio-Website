import React, { Props } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
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
      margin-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
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
            <Link href="https://github.com/colin-rumball">
               <a className="social-link" rel="noopener noreferrer" target="_blank">
                  <FiGithub />
               </a>
            </Link>
         </li>
         <li>
            <Link href="https://github.com/colin-rumball">
               <a className="social-link" rel="noopener noreferrer" target="_blank">
                  <AiOutlineLinkedin />
               </a>
            </Link>
         </li>
      </StyledSocialLinks>
   );
};

export default withDefaultProps<SocialLinksProps>(SocialLinks, SocialLinksDefaultProps);
