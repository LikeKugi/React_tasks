import {JSX} from "react";
import {observer} from "mobx-react-lite";
import Athlete from "../store/Athlete";
import TradeForm from "./TradeForm";
import {useTeamStore} from "../store/TeamStore";


const Roster = (): JSX.Element => {

  const {players} = useTeamStore();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Teams</th>
          <th>Trade form</th>
          <th>Is it their birthday?</th>
        </tr>
      </thead>

      <tbody>{players.map((athlete) => {
        return (<tr key={athlete.name}>
          <td>{athlete.name}</td>
          <td>{athlete.age}</td>
          <td>{athlete.teamHistory.map((team) => <p>{team}</p>)}</td>
          <td><TradeForm athlete={athlete}/></td>
          <td>
            <button style={{width: '100%'}}
                    type={"button"}
                    onClick={() => athlete.wishHappyBirthday()}>Wish happy birthday!
            </button>
          </td>
        </tr>)
      })}</tbody>

    </table>
  );
}
export default observer(Roster);
