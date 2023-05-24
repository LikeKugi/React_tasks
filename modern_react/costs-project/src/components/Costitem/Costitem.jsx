import Datebox from "../Datebox/Datebox";
import './Costitem.css';
import {useContext, useState} from "react";
import CostEdit from "../CostEdit/CostEdit";
import {CostsContext} from "../../providers/CostsProvider";

function Costitem(props) {

  const [costs,] = useContext(CostsContext);

  const {date, description, amount} = costs[props.index]

  const [modal, setModal] = useState(false);

  return (
      <div className='cost-item'>
        <Datebox date={date}/>
        <div className='cost-item__description'>
          <h2>{description}</h2>
          <div className='cost-item__price'>$ {amount}</div>
        </div>
        <button onClick={() => setModal(true)} className='btn'>Edit</button>
        {modal && <CostEdit setModal={setModal}
                            index={props.index}/>}
      </div>
  );
}

export default Costitem;