
import { useState } from 'react';
import './App.css'

function App() {

  let [count , setCount] = useState(0);

  

   function increment () {

    setCount(count +1);
   }

   function decrement() {

    setCount(count - 1);
   }
  

  return (
    <>
    <h1>Counter App</h1>
    <p>Count : {count}</p>

    <div className = 'buttons'>

    <button onClick = {increment}>➕ INCREMENT</button>
    <button onClick = {decrement}>➖ DECREMENT</button>
    <button onClick = {function() {setCount(0)}}>🔃 RESET</button>

    </div>
    
    </>
   
  )
}

export default App
