import {FC, JSX} from "react";

interface IMain {
  showAlert?: () => void,
}

const Main: FC<IMain> = ({showAlert}): JSX.Element => {
  return (
    <>
      <h1>Hello from context</h1>
      <button onClick={showAlert}>Show alert</button>
    </>
  );
}
export default Main;
