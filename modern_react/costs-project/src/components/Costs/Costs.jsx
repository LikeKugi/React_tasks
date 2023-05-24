import Container from "../Container/Container";
import Costitem from "../Costitem/Costitem";
import './Costs.css'
import {useContext} from "react";
import {CostsContext} from "../../providers/CostsProvider";

const Costs = (props) => {
  const [costs,] = useContext(CostsContext);
  return (
      <div className='costs'>
        <Container parent='costs'>
          {costs.map((cost, i) => <Costitem index={i}
                                            key={i}/>
          )}
        </Container>
      </div>
  );
}
export default Costs;