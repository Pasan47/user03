
import Header from './Components/header';
import { useCallback, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  //function newFn() {} --> when call like this --> rendering everytime

  const newFn = useCallback(() => {}, [])

  return (
    <>
    <Header newFn = {newFn}></Header>
    <h1>{count}</h1>
    <button
      onClick={() => {
        setCount((prev) => prev + 1)
      }}
    >{" "} Click Here</button>
    </>
  );
}

export default App;
