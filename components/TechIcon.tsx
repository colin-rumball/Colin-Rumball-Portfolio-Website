import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../helpers/withDefaultProps";

interface StyledTechIconProps {}

const StyledTechIcon = styled.div<StyledTechIconProps>``;

interface TechIconProps extends Props<any> {}

const TechIconDefaultProps: TechIconProps = {};

const TechIcon: React.FC<TechIconProps> = ({}) => {
   return <StyledTechIcon></StyledTechIcon>;
};

export default withDefaultProps<TechIconProps>(TechIcon, TechIconDefaultProps);
