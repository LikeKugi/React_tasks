import Container from "../Container/Container";
import Costitem from "../Costitem/Costitem";
import './Costs.css'

const Costs = (props) => {

  return (
      <div className='costs'>
          {props.costs.map(cost => <Container parent='costs'> <Costitem date={cost.date}
                                                   description={cost.description}
                                                   amount={cost.amount}/> </Container>)}
      </div>
  );
}
export default Costs;