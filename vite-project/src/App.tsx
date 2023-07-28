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
  const [change, setChange] = useState<string>("");
  const [ valueToRetrieve, setValueToRetrieve ] = useState<PropsPerson>({
    firstName: "Johnnas",
    age: 44,
    admin: true
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log("clicked !", event.currentTarget);
    setBtn(event.currentTarget.name);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setChange(event.target.value);
  };

  const handleValidate = () => {
    setValueToRetrieve({ 
      firstName : change, 
      age: valueToRetrieve.age, 
      admin: valueToRetrieve.admin 
    });
  };

  return (
    <>
      <h1>Hello React</h1>
      
      <Task />

      <InputTask 
        valueToRetrieve={valueToRetrieve} 
        change={change} 
        handleChangeInput={handleChangeInput}
        handleValidate={handleValidate} 
      />

      <button data-testid="btntest" type="button" name="button-one" onClick={handleClick}>
        Click
      </button>
      {btn ? (
        <p>Name of button : {btn}</p> 
        ):(
        <p>Press btn</p>
      )}
    </>
  )
}

export default App
