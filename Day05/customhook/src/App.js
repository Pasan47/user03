import usePrintName from "./usePrintName";
import useCounter from "./useCounter";


function App() {

  const {count, increment, decrement} = useCounter(5);

  const { namex, display} = usePrintName("Amalya");

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        <p>My name is : {namex}</p>
        <button onClick={display}>Press me</button>
      </div>
    </>
  );
}

export default App;
