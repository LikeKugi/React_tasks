import React, {FC, JSX} from "react";

interface ILoaderProps {
  loading: boolean,
}

const Loader: FC<ILoaderProps> = ({loading}): JSX.Element => {
  if (loading) {
    console.log(loading)
  }
  return (
    <div>
      <p>Loading in progress...</p>
    </div>
  );
}
export default Loader;
