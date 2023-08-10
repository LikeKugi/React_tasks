import {FormEvent, JSX, useEffect, useRef, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import api from "../../api/api";
import {LOGIN_URL} from "../../utils/URLs";
import {IUserResponseAPI} from "../../types/TypesAPI";
import {AxiosError} from "axios";
import useAuth from "../../hooks/useAuth";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {setAuth} = useAuth();
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!userRef.current) return;
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post<IUserResponseAPI>(LOGIN_URL,
        JSON.stringify({email: user, password: pwd}), {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        });
      const accessToken = response.data.accessToken;
      setAuth({user, password: pwd, accessToken});
      navigate(from, {replace: true});
    } catch (e: unknown) {
      const err = e as AxiosError;
      if (!err.response) {
        setErrMsg('No Server Response');
      } else if (err.response.status === 400) {
        setErrMsg('Invalid Username or Password');
      } else if (err.response.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      if (errRef.current) {
        errRef.current.focus();
      }
    }

  };

  return (
    <>
      <section>
        <p ref={errRef}
           className={errMsg ? 'errmsg' : 'offscreen'}
           aria-live={"assertive"}>{errMsg}</p>
        <h1>Sign In</h1>

        <form onSubmit={submitHandler}>
          <label htmlFor="username">Email:</label>
          <input type="email"
                 id={"username"}
                 ref={userRef}
                 autoComplete={"off"}
                 onChange={(e) => setUser(e.target.value)}
                 value={user}
                 required/>

          <label htmlFor="password">Password:</label>
          <input type="password"
                 id={"password"}
                 autoComplete={"off"}
                 onChange={(e) => setPwd(e.target.value)}
                 value={pwd}
                 required/>

          <button type={"submit"}
                  disabled={!(user.length > 0) && !(pwd.length > 0)}>Sign up
          </button>
        </form>
        <p>
          Not registered?<br/>
          <span className={"line"}>
          <Link to={"/register"}>Register</Link>
        </span>
        </p>
      </section>
    </>
  );
};
export default Login;
