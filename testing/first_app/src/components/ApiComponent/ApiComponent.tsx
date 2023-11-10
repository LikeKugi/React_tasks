import { JSX, useEffect, useState } from 'react';

const ApiComponent = (): JSX.Element => {
  const [data, setData] = useState<{name: string}>()

  useEffect(() => {
    let isMounted = true;

    fetch('/api')
      .then(response => response.json())
      .then(data => {
        if (isMounted) {
          setData(data)
        }
      })
      .catch(e => e)
    return () => {
      isMounted = false;
    }
  }, [])
  return (
    <div>
      <h2>Api Component</h2>
      {data && <div role="term">Name is {data?.name}</div>}
    </div>
  );
};
export default ApiComponent;
