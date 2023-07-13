import {FC, FormEvent, JSX, useState} from "react";
import {observer} from "mobx-react-lite";
import Athlete from "../store/Athlete";

interface ITradeFormProps {
  athlete: Athlete
}

const TradeForm: FC<ITradeFormProps> = ({athlete}): JSX.Element => {
  const [team, setTeam] = useState('');
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!team.trim()) return
    athlete.tradePlayer(team.trim());
    setTeam('');
  }
  return (
    <form noValidate
          onSubmit={submitHandler}>
      <input type="text"
             name="teamName"
             id="teamName"
             value={team}
             onChange={(e) => setTeam(e.target.value)}/>
      <button type={"submit"}>Trade</button>
    </form>
  );
}
export default observer(TradeForm);
