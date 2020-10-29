import React from "react";
import styled, { keyframes, css } from "styled-components";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import useModalSystemHelper from "../../../hooks/useModalSystemHelper";
import ModalOverlay from "./ModalOverlay";
import { ModalSystemState } from "../../../contexts/ModalContext/actions/common";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";
import { AiOutlineClose } from "react-icons/ai";

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

      ${(props) => (props.systemState == ModalSystemState.OPEN ? ModalOpeningAnimation : null)};

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         max-width: 80vw;
      }

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.LARGE}) {
         max-width: 85vw;
      }

      .image-light-box {
         max-height: 90vh;
      }
   }
`;

const StyledCloseButton = styled.button`
   position: fixed;
   top: 50px;
   right: 50px;

   font-size: 30px;
   opacity: 0.9;
   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.WHITE};
   transition: opacity 0.4s ease-out, transform 0.1s ease-in, color 0.4s ease-in-out;

   background: none;

   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.MODAL + 10};

   &:hover {
      color: #fff;
      opacity: 1;
      transform: scale(1.1);
      cursor: pointer;
   }

   &:active {
      transform: scale(0.9);
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
            <div role="dialog" className="internal-modal-container">
               {currentModal.node}
            </div>
         </StyledModalViewer>
         <StyledCloseButton>
            <AiOutlineClose onClick={popModal} />
         </StyledCloseButton>
      </>
   );
};

export default withDefaultProps<ModalViewerProps>(ModalViewer, ModalViewerDefaultProps);
