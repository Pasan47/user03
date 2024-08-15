import { useEffect,  useRef,  useState } from "react";
import { Button, Col, Row } from "react-bootstrap";


function App() {

  //! using useState  --> rendering automatically everytime
  /* const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  

  // Rendering count
  useEffect(() => {
   
    setCount((prev) => prev +  1);
   
  }); */

  //! using useState  --> rendering when  click
  const count = useRef(0);
  const [value, setValue] = useState(0);
  

  // Rendering count
  useEffect(() => {
   
    count.current += 1;
   
  });
  

  return (
    <>
      <div>

        <h1>The value : {value}</h1>

        

        <h1>The render count : {count.current}</h1>
      </div>

      <Row className="mb-3">
      <Button as={Col} sm="1" variant="dark" onClick={() => {
          setValue((prev) => prev + 1)
        }}>+</Button>

      <Button as={Col} sm="1" variant="dark" onClick={() => {
          setValue((prev) => prev - 1)
        }}>-</Button>

      </Row>

      
    
    </>
  );
}

export default App;          
