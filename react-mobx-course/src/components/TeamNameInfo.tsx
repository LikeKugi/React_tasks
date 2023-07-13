import {JSX} from "react";
import {observer} from "mobx-react-lite";
import {useTeamStore} from "../store/TeamStore";

const TeamNameInfo = (): JSX.Element => {
  const {teamName, setMascot} = useTeamStore();
  return (
    <>
      <h1>Team: {teamName}</h1>
      <label htmlFor={"mascot"}>Mascot: </label>
      <input id={"mascot"} type={"text"} placeholder={"Change mascot"} onChange={(e) => setMascot(e.target.value)}/>
      <hr style={{marginBottom: 15}}/>
    </>
  );
}
export default observer(TeamNameInfo);
