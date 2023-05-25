import Costs from "./components/Costs/Costs";
import {useState} from "react";
import CostEdit from "./components/CostEdit/CostEdit";
import CostsProvider from "./providers/CostsProvider";
import Container from "./components/Container/Container";
import './App.css'


function App() {

  const [modal, setModal] = useState(false);

  return (
      <div className="App">
        <CostsProvider>
          <Container parent="App" >
            <button onClick={() => setModal(true)} className='btn'>New Cost</button>
          </Container>
          <Costs />
          {modal && <CostEdit setModal={setModal}/>}
        </CostsProvider>
      </div>
  );
}

export default App;
