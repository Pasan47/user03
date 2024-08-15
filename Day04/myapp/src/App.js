import logo from './logo.svg';
import './App.css';
import PracticeComponent from './slt/PracticeComponent';
import ParagraphComponent from './slt/ParagraphComponent';
import Test from './slt/Test';
import { useState } from 'react';


function App() {

  const [color, setColor] = useState("red");

  const [Student, setStudent] = useState({
    name : "John",
    age : 15,
    grade : 10,
  })

  const changeColor = ()=>{
    setColor("blue");
  }

  const changeName = () => {
    setStudent((prev) => {
      return { ...prev, name: prev.name === "Amalya" ? "John": "Amalya"}
    });
  };


  

  return (
    <>
      <PracticeComponent/>
      <ParagraphComponent/>
      <Test/>

      <p>I like color {color}</p>
      <button onClick={changeColor}>Change Color</button>
      <br></br>

      <p>{Student.name} is {Student.age} years old and he is in grade {Student.grade}</p>
      <button onClick={changeName}>Change Color</button>
    </>
  );
}

export default App;
