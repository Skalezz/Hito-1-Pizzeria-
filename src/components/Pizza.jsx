import React from "react"
import { useEffect, useState} from "react"
import CardPizza from "./CardPizza"

const Pizza = () => {
    
    const [pizza, setPizza] = useState([])
    
    
    const consultarApi = async ()=>{
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        console.log(data);
        setPizza(data)
    }

    useEffect ( ()=>{
        consultarApi()
      }, [] )

  
    return (
    
    <>
        <div className='my-5 row d-flex align-items-center justify-content-center'>
            <CardPizza productos = {pizza} />
        </div>
    </>

     )
    }

export default Pizza