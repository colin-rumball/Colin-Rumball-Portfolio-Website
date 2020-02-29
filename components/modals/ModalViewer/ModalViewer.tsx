import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import useModalSystemHelper from "../../../hooks/useModalSystemHelper";
import ModalOverlay from "./ModalOverlay";
import CloseIcon from "./CloseIcon";
import { ModalSystemState } from "../../../contexts/ModalContext/actions/common";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

const PopIn = keyframes`
	0% {
         transform: scale(0.75);
			opacity: 0.7;
  }
  100% {
         transform: scale(1);
			opacity: 1.0;
  }
`;

const ModalOpeningAnimation = css`
   animation: ${PopIn} 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
`;

interface StyledModalViewerProps {
   systemState: ModalSystemState;
}

const StyledModalViewer = styled.div<StyledModalViewerProps>`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;

   display: flex;
   justify-content: center;
   align-items: center;

   pointer-events: none;

   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.MODAL};

   .internal-modal-container {
      position: relative;
      pointer-events: auto;

      min-width: 40vw;
      max-width: 95vw;

      ${props => (props.systemState == ModalSystemState.OPEN ? ModalOpeningAnimation : null)};

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         max-width: 80vw;
      }

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.LARGE}) {
         max-width: 85vw;
      }
   }
`;

interface ModalViewerProps extends ComponentBaseProps {}

const ModalViewerDefaultProps: ModalViewerProps = {};

const ModalViewer: React.FC<ModalViewerProps> = ({}) => {
   const { system, currentModal, popModal } = useModalSystemHelper();
   if (currentModal == null) return null;
   return (
      <>
         <ModalOverlay onClick={popModal} />
         <StyledModalViewer systemState={system.state}>
            <div className="internal-modal-container">
               {currentModal.node}
               <CloseIcon onClick={popModal} />
            </div>
         </StyledModalViewer>
      </>
   );
};

export default withDefaultProps<ModalViewerProps>(ModalViewer, ModalViewerDefaultProps);
