import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const [count_2, setCount_2] = useState(0)
  const increase =()=>{
      setCount(count + 1)
    }
  const decrease = ()=>{
    if(count < 1){
      setCount(0)
    }else{
    setCount(count - 1)
    }
  }
  const clear =()=>{
    setCount(0)
    setCount_2(0)
  }
  // adding value from input
  const input=(e)=>{
    setCount_2(e.target.value)
  }
  //  Second state function
  const addnumber =()=>{
    setCount(count_2)
  }
  return (
    <div className="App">
      <div className='Form'>

        <div className="counter">
         <h1>Increase / Decrease counter</h1>

            <div className='showCount'>{count}</div>

            <button type='button' onClick={increase} className='increase'>Increase</button> 
            <button type='button' className='clear' disable={count===0} onClick={clear}>Clear</button>
            <button type='button' className='decrease' disabled={count===0} onClick={decrease}>Decrease</button>

            <br/>
            <p>Add Value</p>
            <input type="number" value={count_2} onChange={input} name="addMe" className='addValue'/>
            <button className='insert' disabled={count_2 === 0}  onClick={addnumber} id="insertMe">Add</button>
        </div>

      </div>
     
    </div>
  );
}  

export default App;
