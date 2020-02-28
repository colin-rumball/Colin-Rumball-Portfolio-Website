import React from "react";
import styled from "styled-components";
import withComponentBase, { ComponentBaseProps } from "../../helpers/withComponentBase";

interface StyledLightboxModalProps {}

const StyledLightboxModal = styled.div<StyledLightboxModalProps>``;

interface LightboxModalProps extends ComponentBaseProps {}

const LightboxModalDefaultProps: LightboxModalProps = {};

const LightboxModal: React.FC<LightboxModalProps> = ({}) => {
   return <StyledLightboxModal></StyledLightboxModal>;
};

export default withComponentBase<LightboxModalProps>(LightboxModal, LightboxModalDefaultProps);
