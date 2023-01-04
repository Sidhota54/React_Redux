import React from 'react'
import { useSelector } from 'react-redux';

export const Coin = () => {
    const count = useSelector((state)=> state.counter.count)
  return (
    <div>
         <span className=''> count coin:{count}</span>

    </div>
  )
}
export default Coin;