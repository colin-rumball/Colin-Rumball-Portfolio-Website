import React from "react";
import styled from "styled-components";
import { MaxScreenConstraints } from "../styles/BaseStyles";

interface StyledPageMainProps {}

const StyledPageMain = styled.main<StyledPageMainProps>`
   ${MaxScreenConstraints};
   padding-top: 80px;
`;

const PageMainContent: React.FC = ({ children }) => {
   return <StyledPageMain>{children}</StyledPageMain>;
};

export default PageMainContent;
