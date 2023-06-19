import Toolbar from "../components/Toolbar/Toolbar";
import Settingsbar from "../components/Settingsbar/Settingsbar";
import Canvas from "../components/Canvas/Canvas";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const Root = ({setID}) => {
  const params = useParams();
  useEffect(() => {
    setID(params.id)
  }, [])
  return (
      <>
          <Toolbar/>
          <Settingsbar/>
          <Canvas/>
      </>
  );
}
export default Root;
