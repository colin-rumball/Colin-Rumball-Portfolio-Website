import React from "react";
import styled from "styled-components";
import { MaxScreenConstraints } from "../styles/BaseStyles";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";

interface StyledPageMainProps {}

const StyledPageMain = styled.main<StyledPageMainProps>`
   ${MaxScreenConstraints};
   /* padding-top: 60px; */
`;

interface PageMainContentProps extends ComponentBaseProps {}

const PageMainContent: React.FC<PageMainContentProps> = ({ className, style, children }) => {
   return (
      <StyledPageMain className={className} style={style}>
         {children}
      </StyledPageMain>
   );
};

export default PageMainContent;
