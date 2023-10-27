import React, { useState } from "react"

const OrderForm = (props) => {

    const [orderId,setOrderId]=useState(1)
    
    const [amount,setAmount]=useState(0)
    const [dish,setDish]=useState('')
    const [table,setTable]=useState('Table 1')
    const orderIdHandler=(event)=>{
        event.preventDefault();
        setOrderId(event.target.value)
    }
    const amountHandler=(event)=>{
        event.preventDefault();
        setAmount(event.target.value)
    }
    const dishHandler=(event)=>{
        event.preventDefault();
        setDish(event.target.value)
    }

    const tableHandler=(event)=>{
        event.preventDefault()
        setTable(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        
        if(!orderId || !amount || !dish || !table){
            alert(' please enter valid ,non-empty not allowed')
            return ;
        }
        const details={orderId,amount,dish,table,key:Math.random().toString()}
        props.addOnTable(details)
    }

    return <form onSubmit={submitHandler} >


        <label htmlFor="orderid" >Choose Order ID</label>
        <input type="number" id='orderid' onChange={orderIdHandler} value={orderId}/>
        <label htmlFor="amount" >Choose Price</label>
        <input type="number" id='amount' onChange={amountHandler} value={amount}/>
        <label htmlFor="dish" >Choose Dish</label>
        <input type="text" id='dish' onChange={dishHandler} value={dish}/>

        <select defaultValue={table} onChange={tableHandler}>
            <option value='Table 1'>Table 1</option>
            <option value='Table 2'>Table 2</option>
            <option value='Table 3'>Table 3</option>
        </select>

        <button type='submit'>Add to Bill</button>

    </form>
}

export default OrderForm