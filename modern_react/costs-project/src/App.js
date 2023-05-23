import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      date: new Date(2023, 4, 5),
      description: 'first',
      amount: 100,
    },
    {
      date: new Date(2023, 3, 5),
      description: 'second',
      amount: 100,
    },
    {
      date: new Date(2023, 7, 4),
      description: 'third',
      amount: 100,
    },
    {
      date: new Date(2023, 3, 15),
      description: 'fourth',
      amount: 100,
    },
  ]

  return (
      <div className="App">
        <Costs costs={costs} />
      </div>
  );
}

export default App;
