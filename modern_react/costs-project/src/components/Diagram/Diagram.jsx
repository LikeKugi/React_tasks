import './Diagram.css';
import DiagramBar from "../DiagramBar/DiagramBar";


const Diagram = (props) => {
  const maxValue = Math.max(...props.dataSets.map(el => el.value));
  return (
      (<div className='diagram'>
        {props.dataSets.map((dataSet, i) => <DiagramBar value={dataSet.value}
                                                        maxValue={maxValue}
                                                        label={dataSet.label}
                                                        key={i}/>)}
      </div>)

  )
}

export default Diagram;