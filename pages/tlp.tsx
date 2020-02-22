import React, { Props, useEffect } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import PageMain from "../containers/PageMain";
import { ThemeEnum, useThemeContext } from "../contexts/ThemeContext";
import { ThemeContainer } from "../themes/definitions/Theme";
import withTheme from "../helpers/withTheme";

interface StyledtlpProps {}

const Styledtlp = styled.div<StyledtlpProps>`
   min-height: 100vh;
   background-image: ${({ theme }: ThemeContainer) => theme.GENERAL.BACKGROUND_IMAGE};
   background-attachment: fixed;
`;

const tlp: React.FC = ({}) => {
   return (
      <Styledtlp>
         <PageMain></PageMain>
      </Styledtlp>
   );
};

export default withTheme(tlp, ThemeEnum.TLP);
