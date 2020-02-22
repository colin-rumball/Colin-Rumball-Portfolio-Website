import React from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";
import { MaxScreenConstraints } from "../styles/BaseStyles";

interface StyledPageMainProps {}

const StyledPageMain = styled.main<StyledPageMainProps>`
   ${MaxScreenConstraints};
   padding-top: 80px;
`;

interface PageMainProps {}

const PageMainDefaultProps: PageMainProps = {};

const PageMain: React.FC<PageMainProps> = ({ children }) => {
   return <StyledPageMain>{children}</StyledPageMain>;
};

export default withDefaultProps<PageMainProps>(PageMain, PageMainDefaultProps);
