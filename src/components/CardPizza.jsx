import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function CardPizza( {productos} ) {

  const {incrementar, decrementar} = useContext(CartContext)
  const navigate = useNavigate()

  const irAPizza = (id) => {
    navigate(`/pizza/${id}`)
  }

  return (
    <>
      
          <div key={productos.id} className="card col-3 m-2 p-0">
            <img src={productos.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Pizza {productos.name}</h5>
              <p className="card-text"> {productos.ingredients.join(",")} </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: ${productos.price} </li>
            </ul>
            <div className="card-body">
            <button onClick={ ()=> incrementar(productos) } type="button" className="btn btn-success">Agregar</button>
            <button onClick={ ()=> decrementar(productos) } type="button" className="btn btn-danger ms-2 ">Eliminar</button>
            <button onClick={ ()=> (irAPizza(`${productos.id}`)) } className='btn btn-info ms-2'> ver +</button>
            </div>
          </div>
        
    </>
  )
}

export default CardPizza