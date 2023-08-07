import {ChangeEvent, JSX, useEffect, useRef, useState} from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {PWD_REGEX, USER_REGEX} from "../../utils/regexData";

const Register = (): JSX.Element => {

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
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidName(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  return (
    <section>
      <p ref={errRef}
         className={errMsg ? 'errmsg' : 'offscreen'}
         aria-live={"assertive"}>{errMsg}</p>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username:
        <span className={validName ? "valid" : "hide"}>  <FontAwesomeIcon icon={faCheck}/></span>
        <span className={validName || !user ? "hide" : "invalid"}>  <FontAwesomeIcon icon={faTimes}/></span>
        </label>
        <input type="text"
               id={"username"}
               ref={userRef}
               autoComplete={"off"}
               onChange={(e) => setUser(e.target.value)}
               required
               aria-invalid={validName ? "false" : "true"}
               aria-describedby={"uidnote"}
               onFocus={() => setUserFocus(true)}
               onBlur={() => setUserFocus(false)}/>
        <p id={"uidnote"} className={userFocus && user && !validName ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.<br/>
          Must begin with a letter.<br/>
          Letters, numbers, underscores, hyphens allowed.
        </p>
      </form>
    </section>
  );
}
export default Register;
