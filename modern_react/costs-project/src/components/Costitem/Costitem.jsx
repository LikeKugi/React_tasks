import Datebox from "../Datebox/Datebox";
import './Costitem.css';

function Costitem (props) {

  const costDate = props.date;
  const costDescription = props.description;
  const costAmount = props.amount;

  return (
      <div className='cost-item'>
          <Datebox date={costDate} />
          <div className='cost-item__description'>
              <h2>{costDescription}</h2>
              <div className='cost-item__price'>$ {costAmount}</div>
          </div>
      </div>
  );
}
export default Costitem;