import React, {createContext, Dispatch, FC, SetStateAction, useState} from "react";
import {IAuthUser} from "../types/AuthTypes";

interface IAuthContext {
  auth: IAuthUser,
  setAuth: Dispatch<SetStateAction<IAuthUser>>
}

const defaultAuthUser: IAuthUser = {
  user: '',
  password: '',
  accessToken: null,
};

export const AuthContext = createContext<IAuthContext>({
  auth: defaultAuthUser,
  setAuth: () => {
  }
});

interface IAuthProviderProps {
  children: React.ReactNode | string | null | undefined;
}

export const AuthProvider: FC<IAuthProviderProps> = ({children}) => {
  const [auth, setAuth] = useState(defaultAuthUser);
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
