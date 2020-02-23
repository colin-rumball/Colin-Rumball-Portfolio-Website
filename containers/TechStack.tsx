import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";

interface StyledTechStackProps {}

const StyledTechStack = styled.div<StyledTechStackProps>``;

interface TechStackProps extends Props<any> {}

const TechStackDefaultProps: TechStackProps = {};

const TechStack: React.FC<TechStackProps> = ({}) => {
   return <StyledTechStack></StyledTechStack>;
};

export default withDefaultProps<TechStackProps>(TechStack, TechStackDefaultProps);
