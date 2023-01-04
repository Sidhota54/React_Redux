// import React from 'react'

// import { useState } from 'react';
// import Coin from '../coin/Coin';

// export const Counter = () => {
//     const [count ,setCount] = useState(0);
//   return (
//     <div>
//     <button className=' p-2 text-black text-lg  bg-slate-500 '  onClick={()=>{setCount(count + 1)}}>+</button>

     

//    <button className=' p-2 text-black text-lg  bg-slate-500 '  onClick={()=>{setCount(count - 1)}}>-</button>
//    </div>
//   )
// }
// export default Counter;

import React from 'react'

import { useState } from 'react';
import Coin from '../coin/Coin';
import { useSelector , useDispatch} from 'react-redux';
import { decrement,increment } from './counterSlice';

export const Counter = () => {
   const count = useSelector((state)=>state.counter.count)
   const dispatch = useDispatch()
  return (
    <div>
    <button className=' p-2 text-black text-lg  bg-slate-500 '  onClick={()=>{dispatch(increment())}}>+</button>

    <span className=''>{count}</span>

   <button className=' p-2 text-black text-lg  bg-slate-500 '  onClick={()=>{dispatch(decrement())}}>-</button>
   </div>
  )
}
export default Counter;