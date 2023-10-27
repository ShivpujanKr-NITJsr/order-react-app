import React from "react";


const SingleOrder=(props)=>{

    const deleteOrder=()=>{
        // const delete={orderId:props.item.id,table:props.item.table}
        // console.log(props)
        let p=props.item;
        props.deleteItem(p)
    }
    
    return <div>
        
        <li> {props.item.orderId} -- {props.item.table} -- {props.item.dish} </li>
        <button style={{display:'inline'}} onClick={deleteOrder}>Delete Order</button>
    </div>
}

export default SingleOrder