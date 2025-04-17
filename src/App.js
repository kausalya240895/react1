import React, { useEffect, useState } from "react";
import  './App.css';
import TodoList from "./Components/TodoList";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginationBasic from "./Components/Pagination";

function App(){
  return(
    <>
    <div className="to-list">
    {/*<TodoList/>*/}
    <NavBar/>
    <Cards/>
    <PaginationBasic/>
    </div>
    </>
  )
}


{/*function App(){
  const[count,setCount]=useState(0)
  
      const handleIncrease=()=>{
      setCount(count+1);
      };
      const handleDecrease=()=>{
      setCount(count-1);
      };
      useEffect(()=>{
        console.log("Check");
      },[])
  return(
    <>
     <div className="container">
      <div className="count-box">
        <p>The Value of this Count is : {count} db</p>
      </div>
      <div className="button-container">
        <div className="button-box">
          <input type="radio" id="increase" name="volume" onClick={handleIncrease}/>
          <label htmlFor="increase" className="radio-label">
            <span className="radio-text">Increase Volume</span>
          </label>
        </div>
        <div className="button-box">
          <input type="radio" id="decrease" name="volume" onClick={handleDecrease}/>
          <label htmlFor="decrease" className="radio-label">
            <span className="radio-text">Decrease Volume</span>
          </label>
        </div>
      </div>
    </div>
    </>
  );
}*/}

{/*function App(){
  const[count,setCount]=useState(0);
    const[input,setInput]=useState("");
    const handleInc=()=>{
          setCount(count+1);
    }
    const handleDec=()=>{
          setCount(count-1);
    }
    const handleChange=(e)=>{
      console.log(e.target.value);
      setInput(e.target.value);
    }
return(
  <>
  <div style={{'background-color':'red'}}>Hello</div>  
      <div className="testing">
        Hi,Welcome This is my first React application.
      </div>
      <div>
        The value of this {count}
      </div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <div>
        <input type="text" onChange={handleChange}/>
      </div>
      <div>
        The Updated Value is {input}
      </div>   
  </>
);
};  */}  

export default App;