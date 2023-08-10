import {FormEvent, useEffect, useRef, useState} from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {EMAIL_REGEX, PWD_REGEX} from "../../utils/regexData";
import {Link} from "react-router-dom";
import api from "../../api/api";
import { REGISTER_URL } from "../../utils/URLs";
import {AxiosError} from "axios";
import {IUserResponseAPI} from "../../types/TypesAPI";

const Register = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!userRef.current) return;
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = pwd === matchPwd;
    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      const response = await api.post<IUserResponseAPI>(REGISTER_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(response.data.accessToken);
      console.log(response?.data.user);
      console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser('');
      setPwd('');
      setMatchPwd('');
    } catch (e: unknown) {
      const err = e as AxiosError;
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed')
      }
      if (errRef.current) {
        errRef.current.focus();
      }
      setSuccess(false);
    }

  };


  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign in</a>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef}
             className={errMsg ? 'errmsg' : 'offscreen'}
             aria-live={"assertive"}>{errMsg}</p>
          <h1>Register</h1>
          <form onSubmit={submitHandler}>
            <label htmlFor="username">Email:
              <span className={validName ? "valid" : "hide"}>  <FontAwesomeIcon icon={faCheck}/></span>
              <span className={validName || !user ? "hide" : "invalid"}>  <FontAwesomeIcon icon={faTimes}/></span>
            </label>
            <input type="email"
                   id={"username"}
                   ref={userRef}
                   autoComplete={"off"}
                   onChange={(e) => setUser(e.target.value)}
                   required
                   aria-invalid={validName ? "false" : "true"}
                   aria-describedby={"uidnote"}
                   onFocus={() => setUserFocus(true)}
                   onBlur={() => setUserFocus(false)}/>
            <p id={"uidnote"}
               className={userFocus && user && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle}/>
              Must begin with an Email.
            </p>

            <label htmlFor="password">Password:
              <span className={validPwd ? "valid" : "hide"}>  <FontAwesomeIcon icon={faCheck}/></span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}>  <FontAwesomeIcon icon={faTimes}/></span>
            </label>
            <input type="password"
                   id={"password"}
                   autoComplete={"off"}
                   onChange={(e) => setPwd(e.target.value)}
                   required
                   aria-invalid={validPwd ? "false" : "true"}
                   aria-describedby={"pwdnote"}
                   onFocus={() => setPwdFocus(true)}
                   onBlur={() => setPwdFocus(false)}/>
            <p id={"uidnote"}
               className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle}/>
              8 to 24 characters.<br/>
              Must include uppercase and lowercase letters, a number and a special character.<br/>
              Allowed special characters: <span aria-label={"exclamation mark"}>! </span>
              <span aria-label={"at symbol"}>@ </span>
              <span aria-label={"hashtag"}># </span>
              <span aria-label={"dollar sign"}>$ </span>
              <span aria-label={"percent"}>% </span>
            </p>

            <label htmlFor="confirm_pwd">Confirm Password:
              <span className={validMatch && matchPwd ? "valid" : "hide"}>  <FontAwesomeIcon icon={faCheck}/></span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>  <FontAwesomeIcon icon={faTimes}/></span>
            </label>
            <input type="password"
                   id={"confirm_pwd"}
                   autoComplete={"off"}
                   onChange={(e) => setMatchPwd(e.target.value)}
                   required
                   aria-invalid={validPwd ? "false" : "true"}
                   aria-describedby={"confirmnote"}
                   onFocus={() => setMatchFocus(true)}
                   onBlur={() => setMatchFocus(false)}/>
            <p id={"confirmnote"}
               className={matchFocus && matchPwd && !validPwd ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle}/>
              Must match the first password input field.
            </p>

            <button type={"submit"}
                    disabled={!validName || !validPwd || !validMatch}>Sign up
            </button>
          </form>
          <p>
            Already registered?<br/>
            <span className={"line"}>
          <Link to={"/login"}>Sign in</Link>
        </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
