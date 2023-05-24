import Costs from "./components/Costs/Costs";
import {useState} from "react";
import CostEdit from "./components/CostEdit/CostEdit";
import CostsProvider from "./providers/CostsProvider";


function App() {

  const [modal, setModal] = useState(false);

  return (
      <div className="App">
        <CostsProvider>
          <Costs />
          <button onClick={() => setModal(true)} className='btn'>New Cost</button>
          {modal && <CostEdit setModal={setModal}/>}
        </CostsProvider>
      </div>
  );
}

export default App;
