import { useEffect, useState } from "react";


function App() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Red");
  const [name, setName] = useState(0);

  //! The count is increasing every 2s
  /* useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log("Hello World!");
    }, 2000)
  }) */

  //! Callbackfunction is not depend on anything --> run only one time
  /* useEffect(() => {
    setTimeout(() =>{
      setCount((count) => count + 1)
    }, 2000)
  }, []) */

  //! Cb is depend on count --> running 0,2,3,4...
  /* useEffect(() => {
    setTimeout(() =>{
      setCount((count) => count + 1);
    }, 2000)
  }, [count]) */

  //! Cb is depend on count
  useEffect(() => {
    setTimeout(() =>{
      setCount((count) => count + 1);
      setColor((color) => "Blue");
      setName ((name) => "sa");

    }, 2000)
  }, [color,name])
 
  
  return (
    <>
      <h1>I have rendered {count} times</h1>

      <h1>The color {color}</h1>

      <h1>I am  {name} </h1>
      
    </>
  );
}

export default App;
