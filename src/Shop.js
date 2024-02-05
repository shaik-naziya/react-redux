import React from 'react'
import { useDispatch } from "react-redux";
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


const Shop = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <h3>Deposit/Withdraw money</h3>
      <button className='btn-primary mx-2' onClick = {()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
       Update balance
      <button className='btn-primary mx-2' onClick = {()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div>
  )
}

export default Shop
