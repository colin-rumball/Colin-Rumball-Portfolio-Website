import {
   ModalAction,
   ModalSystem,
   Modal,
   DefaultModalOptions,
   ModalOptions,
   ModalActionType
} from "./common";
import { ReactNode } from "react";

export interface PushAction extends ModalAction {
   modal: Modal;
}

export const handlePushAction = (system: ModalSystem, action: ModalAction): ModalSystem => {
   const pushAction = action as PushAction;
   return {
      ...system,
      queue: [
         ...system.queue,
         {
            node: pushAction.modal.node,
            options: { ...DefaultModalOptions, ...pushAction.modal.options }
         }
      ]
   };
};

export const createPushAction = (node: ReactNode, options?: ModalOptions): PushAction => {
   return {
      modal: { node, options },
      type: ModalActionType.PUSH
   };
};
