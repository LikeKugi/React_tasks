import {FormEvent, JSX} from "react";
import {action, computed, observable, toJS} from "mobx";
import {observer} from "mobx-react-lite";
import {useTeamStore} from "../store/TeamStore";
import Athlete from "../store/Athlete";

interface IFormState {
  name: string,
  age: number,
  salary: number
}

const formState: IFormState = observable({
  salary: 0,
  age: 0,
  name: '',
})

const resetForm = () => {
  formState.salary = 0;
  formState.age = 0;
  formState.name = '';
}

const MoneyForm = (): JSX.Element => {

  const {totalYearlyCost, addPlayer} = useTeamStore();

  const totalValue = computed(() => totalYearlyCost + formState.salary)

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const athlete = new Athlete(formState.name, formState.age, formState.salary)
    addPlayer(athlete);
    resetForm();
  }

  return (
    <form onSubmit={action(submitHandler)}
          style={{display: 'flex', flexDirection: 'column', maxWidth: 500, margin: '0 auto', color: 'whitesmoke'}}>
      <h2 style={{marginBottom: 15}}>Money Talks</h2>
      <p>Total: {totalYearlyCost}</p>

      <label htmlFor="name">Player's name...</label>
      <input type="text"
             name="name"
             id="name"
             style={{height: 40, padding: "10px 5px", borderRadius: 5}}
             placeholder={"Player's name..."}
             value={formState.name}
             onChange={action((e) => formState.name = e.target.value)}/>

      <label htmlFor="age">Age...</label>
      <input type="number"
             name="age"
             id="age"
             style={{height: 40, padding: "10px 5px", borderRadius: 5}}
             placeholder={"Age..."}
             value={formState.age || ''}
             onChange={action((e) => formState.age = (+e.target.value))}/>

      <label htmlFor="salary">Annual salary...</label>
      <input type="number"
             name="salary"
             id="salary"
             style={{height: 40, padding: "10px 5px", borderRadius: 5}}
             placeholder={"Annual salary..."}
             value={formState.salary || ''}
             onChange={action((e) => formState.salary = (+e.target.value))}/>

      <button type={"submit"} style={{padding: '5px 10px'}}>{`Submit: ${toJS(totalValue)}`}</button>
    </form>
  );
}
export default observer(MoneyForm);
