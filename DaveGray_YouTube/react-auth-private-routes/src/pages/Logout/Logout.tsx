import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";

const Logout = (): JSX.Element => {
  const {setAuth} = useAuth();
  setAuth({user: '', password: '', accessToken: null})
  const navigate = useNavigate();
  navigate('/');
  return <></>
};
export default Logout;
