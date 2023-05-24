import {useContext, useState} from "react";

import Container from "../Container/Container";
import Costitem from "../Costitem/Costitem";
import {CostsContext} from "../../providers/CostsProvider";
import './Costs.css'
import CostsFilter from "../CostsFilter/CostsFilter";

const Costs = (props) => {
  const [costs,] = useContext(CostsContext);
  const [year, setYear] = useState(0);
  return (
      <div className='costs'>
        <Container parent='costs'>
          <CostsFilter onChangeYear={setYear}/>
        </Container>
        <Container parent='costs'>
          {(+year === 0) && costs.map((cost, i) => <Costitem index={i}
                                            key={i}/>
          )}
          {year && costs.map((cost, i) => cost.date.getFullYear() === +year ? <Costitem index={i} key={i}/> : null)}
        </Container>
      </div>
  );
}
export default Costs;