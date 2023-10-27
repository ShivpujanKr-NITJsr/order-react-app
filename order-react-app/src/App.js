import OrderForm from './Components/OrderForm/OrderForm'
import './App.css';

import SingleOrder from './Components/SingleOrder/SingleOrder';
import React, { useState } from 'react';

function App() {

  const [details,setDetails]=useState([]);
  

  const addOnTable=(detail)=>{
    // console.log(details)
    
    setDetails((prevDetails)=>{
      return [...prevDetails,detail]
    })
    localStorage.setItem('item',JSON.stringify(details))
  }
  
  let table1=details.filter(item=>{
    return item.table=='Table 1'
  });
  let table2=details.filter(item=>{
    return item.table=='Table 2'
  });

  let table3=details.filter(item=>{
    return item.table=='Table 3'
  });

  // console.log(table1)

  const deleteItem=(itemDelete)=>{
    let p=details.filter(item=>{
      return item.key!==itemDelete.key
    })
   
    setDetails(p)
  }
  return (
   <div className='global'>
    <OrderForm addOnTable={addOnTable}  />

    <h1> Orders</h1>
    <h3>Table 1</h3>
    {table1.map(item=>{
      return <SingleOrder key={item.key} item={item} deleteItem={deleteItem}/>
    })}
    <h3>Table 2</h3>
    {table2.map(item=>{
      return <SingleOrder key={item.key} item={item} deleteItem={deleteItem}/>
    })}
    <h3>Table 3</h3>
    {table3.map(item=>{
      return <SingleOrder key={item.key} item={item} deleteItem={deleteItem} />
    })}
    
   </div>
  );
}

export default App;
