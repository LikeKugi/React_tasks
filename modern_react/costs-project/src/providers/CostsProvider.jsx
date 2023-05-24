import {createContext, useState} from "react";

export const CostsContext = createContext();

const costsArray = [
  {
    date: new Date(2023, 4, 5),
    description: 'first',
    amount: 100,
  },
  {
    date: new Date(2023, 3, 5),
    description: 'second',
    amount: 100,
  },
  {
    date: new Date(2023, 7, 4),
    description: 'third',
    amount: 100,
  },
  {
    date: new Date(2023, 3, 15),
    description: 'fourth',
    amount: 100,
  },
]

const CostsProvider = (props) => {
  const [costs, setCosts] = useState(costsArray);
  return (
      <CostsContext.Provider value={[costs, setCosts]}>
        {props.children}
      </CostsContext.Provider>
  );
}
export default CostsProvider;