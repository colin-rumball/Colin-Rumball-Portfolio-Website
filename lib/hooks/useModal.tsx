import { forwardRef, useRef, ReactNode, useMemo } from "react";

interface Props extends React.ComponentPropsWithRef<"dialog"> {
  mRef: React.Ref<HTMLDialogElement>;
}

const Modal = ({ mRef, children }: Props) => (
  <dialog ref={mRef} className="rounded-lg backdrop:bg-white/100">
    {children}
  </dialog>
);
// const Modal = forwardRef((props, ref) => );

const useModal = (modalContent: ReactNode) => {
  const ref = useRef<HTMLDialogElement>(null);
  const MyModal = useMemo(() => {
    return <Modal mRef={ref}>{modalContent}</Modal>;
  }, [ref, modalContent]);

  return {
    Modal: MyModal,
    show: () => {
      ref.current?.showModal();
    },
    close: () => {
      ref.current?.close();
    },
  };
};

export default useModal;
