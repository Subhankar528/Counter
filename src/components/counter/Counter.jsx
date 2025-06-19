import { useState } from 'react';
import CounterButton from './CounterButton';

export default function Counter(){
  const [count,setCount] = useState(0);

  function increment(by){
    setCount(count + by);
  }

  function decrement(by){
    setCount(count - by);
  }

  function reset(){
    setCount(0);
  }
  return(
    <>
    <CounterButton by={1} incrementMethod={increment} decrementMethod={decrement}/>
    <CounterButton by={2} incrementMethod={increment} decrementMethod={decrement}/>
    <CounterButton by={5} incrementMethod={increment} decrementMethod={decrement}/>
    <span className="count">{count}</span><br />
    <button className='reset' onClick={reset}>Reset</button>
    </>
  )
}
