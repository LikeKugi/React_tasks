import {JSX} from "react";
import Main from "../Main/Main";
import Alert from "../Alert/Alert";
import {useAlert} from "../../providers/AlertContext";

const ContextPage = (): JSX.Element => {

  const [visible, toggle] = useAlert();

  return (
    <>
      <Main showAlert={toggle}/>
      {visible && <Alert toggle={toggle}/>}
    </>
  );
}
export default ContextPage;
