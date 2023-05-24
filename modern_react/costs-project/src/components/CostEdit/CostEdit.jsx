import './CostEdit.css';
import BackDrop from "../BackDrop/BackDrop";
import {useContext, useState} from "react";
import {CostsContext} from "../../providers/CostsProvider";

const CostEdit = ({index, setModal}) => {
  const [costs, setCosts] = useContext(CostsContext);

  const [title, setTitle] = useState(index ? costs[index].description : '');
  const [amount, setAmount] = useState(index ? costs[index].amount : 0.0);
  const [date, setDate] = useState(index ? costs[index].date.toLocaleDateString('fr-CA') : new Date().toLocaleDateString('fr-CA'));

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: title,
      amount,
      date: new Date(date),
    }

    if (index) {
      setCosts(prev => {
        return [
          ...prev.slice(0, index),
          costData,
          ...prev.slice(index + 1)
        ]
      })
    } else {
      setCosts(prev => [...prev, costData])
    }


    setModal(false);
  }

  return (
      <BackDrop>
        <form className='cost-edit'
              onSubmit={submitHandler}>
          <div className='cost-edit__controls'>
            <div className="cost-edit__control">
              <label htmlFor="editName">Title</label>
              <input type="text"
                     id='editName'
                     value={title}
                     onChange={({target}) => setTitle(target.value)}/>
            </div>
            <div className="cost-edit__control">
              <label htmlFor="editAmount">Price</label>
              <input type="number"
                     id="editAmount"
                     min='0.0'
                     step='0.1'
                     value={amount}
                     onChange={({target}) => setAmount(target.value)}/>
            </div>
            <div className="cost-edit__control">
              <label htmlFor="editDate">Date</label>
              <input type="date"
                     id='editDate'
                     min='1971-01-01'
                     value={date}
                     onChange={({target}) => setDate(target.value)}/>
            </div>
          </div>
          <div className="cost-edit__actions">
            <button>Save</button>
            <button type="reset"
                    onClick={() => setModal(false)}>Cancel
            </button>
          </div>
        </form>
      </BackDrop>
  );
}
export default CostEdit;

//  type="submit"