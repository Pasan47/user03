import { useState, useMemo, useRef, useEffect } from "react";


function App() {

  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);
 
  

  //! using useState  --> rendering automatically everytime
  // const [count, setCount] = useState(0);
  // useEffect(() => {
   
  //   setCount((prev) => prev +  1);
   
  // });

  //! using useRef  --> rendering when click
  const count = useRef(0);

  useEffect(() => {
   
    count.current += 1;
     
   });

  //const result = cubeNum(number);

  //! using useMemo --> 
  const result = useMemo(() => {
    return cubeNum(number);
  }, [number])





  function cubeNum(num){
    console.log("Calculation done!");
    return Math.pow(num, 3);
  }

  

  return (
    
    <>
      <input
         type="number"
         value={number}
         onChange={(e) => {
          setNumber(e.target.value)
         }}
      />
      <h1>Cube of the number : {result}</h1>

      <h1>Rendering count : {count.current}</h1>


      <h1>Counter : {count.current}</h1>

      <button onClick={() => {
        setValue((value) => value+1)
      }}>value++</button>

<h1>Value : {value}</h1>

    </>
  );
}

export default App;
