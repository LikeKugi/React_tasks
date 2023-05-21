import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";

export const withAuth = (Component) => (props) => {
  const {user} = useContext(AuthContext);
  if (!user) return <p>you are not authorized yet</p>
 return <Component {...props} />
}