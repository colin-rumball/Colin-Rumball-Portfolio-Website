import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";

interface StyledModalOverlayProps {}

const StyledModalOverlay = styled.div<StyledModalOverlayProps>`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background: rgba(0, 0, 0, 0.6);

   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.MODAL - 1};
`;

interface ModalOverlayProps extends ComponentBaseProps {
   onClick?: MouseEventHandler<any>;
}

const ModalOverlayDefaultProps: ModalOverlayProps = {};

const ModalOverlay: React.FC<ModalOverlayProps> = ({ onClick, children }) => {
   return <StyledModalOverlay onClick={onClick}>{children}</StyledModalOverlay>;
};

export default withComponentBase<ModalOverlayProps>(ModalOverlay, ModalOverlayDefaultProps);
