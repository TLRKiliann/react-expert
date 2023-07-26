import React, { useState } from 'react';
import Task from './components/Task';
import InputTask from './components/InputTask';
import './App.css';

type PropsPerson = {
    firstName: string,
    age: number,
    admin: boolean
};

const App:React.FC = () => {

  const [ btn, setBtn ] = useState<string>("");
  //console.log(btn, "my btn");
  
  const [ valueToRetrieve, setValueToRetrieve ] = useState<PropsPerson>({
    firstName: "Johnnas",
    age: 44,
    admin: true
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, name: string): void => {
    event.preventDefault();
    console.log("clicked !", event.currentTarget);
    setBtn(event.target.name);
  }

  return (
    <>
      <h1>Hello React</h1>
      
      <Task />

      <InputTask valueToRetrieve={valueToRetrieve} />

      <button type="button" name="button-one" onClick={handleClick}>Click</button>
      {btn ? (
        <p>Name of button : {btn}</p> 
        ):(
        <p>Press btn</p>
      )}
    </>
  )
}

export default App
