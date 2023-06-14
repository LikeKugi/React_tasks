import React, {FC, JSX} from "react";

interface IError {
  error: string,
}

const Error: FC<IError> = ({error}): JSX.Element => {
  return (
    <div>
      <p className="text-red-600">{error}</p>
    </div>
  );
}
export default Error;
