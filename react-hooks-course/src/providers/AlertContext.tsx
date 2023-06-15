import React, {createContext, FC, useContext, useState} from "react";


const AlertContext = createContext<any>(null);

const useAlert = () => {
  return useContext(AlertContext);
}

interface IAlertProvider {
  children: React.ReactNode;
}

const AlertProvider: FC<IAlertProvider> = ({children}) => {
  const [alert, setAlert] = useState(false);

  const toggle = () => setAlert(prevState => !prevState)

  return (
    <AlertContext.Provider value={[alert, toggle]}>
      {children}
    </AlertContext.Provider>
  )
}
export {useAlert, AlertContext};
export default AlertProvider;
