"use client";
import React, { useEffect, useMemo, useRef } from "react";
import useModalSystemHelper from "@/lib/hooks/useModalSystemHelper";
import { ModalSystemState } from "@/lib/contexts/ModalSystem/actions/common";
import { AiOutlineCloseCircle } from "react-icons/ai";

// const StyledModalViewer = styled.div.attrs((props) => ({}))<any>`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   pointer-events: none;

//   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.MODAL};

//   ${({ state, theme }: ThemeContainer) => {
//     switch (state as ModalSystemState) {
//       case ModalSystemState.OPENING:
//         return theme.ANIMATIONS.MODAL_OPENING;
//       case ModalSystemState.CLOSING:
//         return theme.ANIMATIONS.MODAL_CLOSING;
//     }
//   }};

//   .internal-modal-container {
//     position: relative;
//     pointer-events: auto;

//     min-width: 40vw;
//     max-width: 95vw;

//     @media (max-width: ${({ theme }: ThemeContainer) =>
//         theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
//       transform: translateY(-30px);
//     }

//     @media (min-width: ${({ theme }: ThemeContainer) =>
//         theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
//       /* height: 85vh; */
//       max-width: 80vw;
//     }

//     @media (min-width: ${({ theme }: ThemeContainer) =>
//         theme.VARIABLES.BREAK_POINTS.LARGE}) {
//       max-width: 85vw;
//     }
//   }
// `;

interface ModalViewerProps {}

const ModalViewerDefaultProps: ModalViewerProps = {};

const ModalViewer: React.FC<ModalViewerProps> = (props) => {
  const {} = { ...ModalViewerDefaultProps, ...props };
  const { currentModal, system, popModal } = useModalSystemHelper();
  const ref = useRef<HTMLDialogElement>(null);

  const onModalClose = () => {
    popModal();
  };

  const onDialogClicked = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === ref.current) {
      ref.current?.close();
    }
  };

  useEffect(() => {
    if (system.state === ModalSystemState.OPENING && ref.current) {
      ref.current.showModal();
    }
  }, [system, currentModal]);

  if (!currentModal) return null;

  return (
    //  <InteractionController controller={Controller.MODAL}>
    // <ModalOverlay onClick={popModal} />
    // <StyledModalViewer state={system.state}>
    <dialog
      ref={ref}
      onClose={onModalClose}
      onClick={onDialogClicked}
      className={
        "animate-modal-open relative mt-16 rounded-lg backdrop:bg-slate-800/60"
      }
    >
      {/* <div className="absolute -top-0 right-0 cursor-pointer rounded-full bg-slate-900 text-4xl text-white transition-all hover:scale-110">
        <AiOutlineCloseCircle />
      </div> */}
      {currentModal ? currentModal.node : null}
      {/* <div onClick={popModal} /> */}
    </dialog>
    // </StyledModalViewer>
    //  </InteractionController>
  );
};

export default ModalViewer;
