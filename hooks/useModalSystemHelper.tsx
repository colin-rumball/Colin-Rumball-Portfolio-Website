import { useContext, useCallback, ReactNode, useEffect } from "react";
import { ModalContextObject } from "../contexts/ModalContext/ModalSystem";
import { createPushAction } from "../contexts/ModalContext/actions/PushAction";
import { createPopAction } from "../contexts/ModalContext/actions/PopAction";
import { ModalOptions, ModalSystemState } from "../contexts/ModalContext/actions/common";
import { createChangeStateAction } from "../contexts/ModalContext/actions/ChangeStateAction";

const useModalSystemHelper = () => {
   const { system, dispatch } = useContext(ModalContextObject);

   const currentModal = system.queue.length > 0 ? system.queue[0] : null;

   const changeState = useCallback((newState: ModalSystemState) => {
      dispatch(createChangeStateAction(newState));
   }, []);

   // Basic state management
   useEffect(() => {
      switch (system.state) {
         case ModalSystemState.EMPTY:
            if (system.queue.length > 0) {
               changeState(ModalSystemState.OPEN);
            }
            break;
         case ModalSystemState.OPEN:
            break;
         case ModalSystemState.CLOSING:
            changeState(system.queue.length > 0 ? ModalSystemState.OPEN : ModalSystemState.EMPTY);
            break;
      }
   }, [system]);

   const pushModal = useCallback(
      (node: ReactNode, options?: ModalOptions) => {
         document.querySelector("html").classList.add("modal-open");
         dispatch(createPushAction(node, options));
         dispatch(createChangeStateAction(ModalSystemState.OPEN));
      },
      [system]
   );

   const popModal = useCallback(() => {
      system.queue[0]?.options.onClose();
      if (system.queue.length == 1) document.querySelector("html").classList.remove("modal-open");
      dispatch(createPopAction());
      dispatch(createChangeStateAction(ModalSystemState.CLOSING));
   }, [system]);

   return { currentModal, system, pushModal, popModal };
};

export default useModalSystemHelper;
