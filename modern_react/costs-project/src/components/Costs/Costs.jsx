import {useContext, useState} from "react";

import Container from "../Container/Container";
import Costitem from "../Costitem/Costitem";
import {CostsContext} from "../../providers/CostsProvider";
import './Costs.css'
import CostsFilter from "../CostsFilter/CostsFilter";
import CostsDiagram from "../CostsDiagram";

const Costs = () => {
  const [costs,] = useContext(CostsContext);
  const [year, setYear] = useState(0);
  const filterCosts = () => {
    let nextArr = [];
    if (+year === 0) {
      costs.forEach((cost, i) => nextArr.push(i));
    } else {
      costs.forEach((cost, i) => {
        if (cost.date.getFullYear() === +year) nextArr.push(i);
      })
    }
    return nextArr
  }
  const filteredCosts = filterCosts();
  return (
      <div className='costs'>
        <Container parent='costs'>
          <CostsFilter onChangeYear={setYear}/>
        </Container>
        {+year > 0 &&
            <Container>
              <CostsDiagram filteredCosts={filteredCosts}/>
            </Container>
        }
        <Container parent='costs'>
          {(filteredCosts.length > 0) && filteredCosts.map((idx, i) => <Costitem index={idx}
                                            key={i}/>
          )}
          {filteredCosts.length === 0 && <p>No costs in such period</p>}
        </Container>
      </div>
  );
}
export default Costs;