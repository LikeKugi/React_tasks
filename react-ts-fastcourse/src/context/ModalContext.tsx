import React, {createContext, JSX, useState} from "react";

interface IModalContext {
  modal: boolean,
  open: () => void,
  close: () => void,
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
})

const ModalProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
  const [modal, setModal] = useState(false);
  const open = () => setModal(true);
  const close = () => setModal(false);
  return (
    <ModalContext.Provider value={{modal, open, close}}>
      {children}
    </ModalContext.Provider>
  );
}
export default ModalProvider;
