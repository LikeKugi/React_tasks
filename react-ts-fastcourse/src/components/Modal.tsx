import React, {FC, JSX} from "react";

interface IModal {
  title: string,
  closeModal: () => void,
  children?: string | JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[],
}

const Modal: FC<IModal> = ({children, title, closeModal}): JSX.Element => {

  const closeHandler = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains('background')) {
        closeModal();
    }
  }

  return (
    <div className="background fixed bg-black/50 top-0 right-0 left-0 bottom-0 flex justify-center items-center" onClick={closeHandler}>
      <div className="rounded bg-white py-2 px-5">
        <h2 className={'text-2xl text-center mb-2'}>{title}</h2>
        {children}
      </div>
    </div>
  );
}
export default Modal;
