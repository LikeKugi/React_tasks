import {JSX} from "react";
import AlertProvider from "../providers/AlertContext";
import ContextPage from "../components/ContextPage/ContextPage";

const ContextExample = (): JSX.Element => {

  return (
    <AlertProvider>
      <ContextPage />
    </AlertProvider>
  );
}
export default ContextExample;
