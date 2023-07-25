import React, {createContext, JSX} from "react";
import RootStore from "../store/store";

const store = RootStore.create();
export const StoreContext = createContext(store);

const StoreProvider = ({children}: React.PropsWithChildren): JSX.Element => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}
export default StoreProvider;
