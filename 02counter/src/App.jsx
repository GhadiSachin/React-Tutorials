import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(1);
  const increment=()=>{
    console.log("Increment Clicked", Math.random());
    //counter=counter+1;
    if(counter <20){
    setCounter(counter+1)
    console.log(counter);
    }
    else{
      console.log("Max limit for Incerment counter is 20");
    }
    
  }
   const decrement=()=>{
    console.log("Decrement Clicked", Math.random());
    //counter=counter-1;
    if(counter >0){
      setCounter(counter-1)
      console.log(counter);
      }
      else{
      console.log("Min limit for decrement counter is 0");
    }
    
  }

  return (
    <>
    <h1> Hello from React Tutorial....!</h1>
    <h1>Counter: {counter}</h1>
    <button onClick={increment}> Increment Counter: {counter} </button>
    <br/>
    <button onClick={decrement}> Decrement Counter: {counter} </button>
    <footer> {counter}</footer>
    </>
  )
}

export default App
