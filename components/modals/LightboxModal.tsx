import React from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../helpers/withDefaultProps";

interface StyledLightboxModalProps {}

const StyledLightboxModal = styled.div<StyledLightboxModalProps>``;

interface LightboxModalProps extends ComponentBaseProps {}

const LightboxModalDefaultProps: LightboxModalProps = {};

const LightboxModal: React.FC<LightboxModalProps> = ({}) => {
   return <StyledLightboxModal></StyledLightboxModal>;
};

export default withDefaultProps<LightboxModalProps>(LightboxModal, LightboxModalDefaultProps);
