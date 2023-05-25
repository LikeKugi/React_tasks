import Diagram from "./Diagram/Diagram";
import {useContext} from "react";
import {CostsContext} from "../providers/CostsProvider";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const CostsDiagram = (props) => {
  const [costs,] = useContext(CostsContext);
  const diagramDataSets = months.reduce((acc, month) => [...acc, {label: month, value: 0}], []);

  props.filteredCosts.forEach(idx => {
    const monthIndex = costs[idx].date.getMonth();
    diagramDataSets[monthIndex] === 0 ? diagramDataSets[monthIndex].value = costs[idx].amount : diagramDataSets[monthIndex].value += costs[idx].amount;
  })

  return (
      <Diagram dataSets={diagramDataSets}/>
  );
}
export default CostsDiagram;