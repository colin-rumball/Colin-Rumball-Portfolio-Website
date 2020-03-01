import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Picture from "../components/basic/Pictures/Picture";
import FeaturedVideo from "../components/content/FeaturedVideo";
import ResposiveSection from "../components/basic/Sections/ResposiveSection";
import PageMainContent from "../containers/PageMainContent";
import { ThemeContainer } from "../themes/definitions/Theme";
import ExternalLinkButton from "../components/basic/Buttons/ExternalLinkButton";
import { FiLink, FiGithub } from "react-icons/fi";
import List from "../components/basic/List";
import FullWidthSection from "../components/basic/Sections/FullWidthSection";
import ImageCarousel from "../components/ImageCarousel";
import useModalSystemHelper from "../hooks/useModalSystemHelper";
import EnhancedPicture from "../components/basic/Pictures/EnhancedPicture";
import { ButtonSize } from "../components/basic/Buttons/Button";
import BorderedContentStyle from "../styles/BorderedContentStyle";
import { AiOutlineApple, AiOutlineAppstore } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import LegoTheme from "../themes/LegoTheme/LegoTheme";
import asPage from "../helpers/asPage";
import OverlayedBackgroundStyle from "../styles/OverlayedBackgroundStyle";

interface StyledtlpProps {}

const Styledtlp = styled.div<StyledtlpProps>`
   position: relative;
   min-height: 100vh;
   background-image: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.BACKGROUND};
   background: ${({ theme }: ThemeContainer) => theme.COMPONENTS.PAGE.BACKGROUND};
   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};

   .overlayed-background {
      ${OverlayedBackgroundStyle}
   }

   .page-main {
      position: relative;
      z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.FOREGROUND};
   }
`;

const lego: React.FC = ({}) => {
   return (
      <Styledtlp>
         <div className="overlayed-background" />
         <PageMainContent className="page-main"></PageMainContent>
      </Styledtlp>
   );
};

export default asPage(lego, LegoTheme);
