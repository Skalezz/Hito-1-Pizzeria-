import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children} ) => {
    const [carrito, setCarrito] = useState ([])

    let total = carrito.reduce( (acumulador, productos)=> acumulador += productos.count, 0 )
    let totalPagar = carrito.reduce( (acumulador, productos)=> acumulador += (productos.price * productos.count), 0 )


    const incrementar = (productos)=>{
     let itemCarrito = carrito.findIndex(item => item.id === productos.id)
     let nuevoProducto = {desc:productos.desc, id:productos.id, img:productos.img, name:productos.name, price:productos.price, count:0}
     console.log(itemCarrito);
     console.log(nuevoProducto);
     
     if(itemCarrito >= 0){
            carrito[itemCarrito].count++
            setCarrito( [...carrito] )
        }else{
            setCarrito( [...carrito,nuevoProducto] )
        }
    }

    const decrementar = (productos)=> {
        let itemCarrito = carrito.findIndex(item => item.id === productos.id)

        if (itemCarrito >= 0) {
            const nuevoCarrito =  [...carrito]
            if (nuevoCarrito[itemCarrito].count > 1 ) {
                nuevoCarrito[itemCarrito].count--
            }else{
                nuevoCarrito.splice(itemCarrito, 1)
            }
            setCarrito(nuevoCarrito)
        }else{

        }
    }
    

    return(
        <CartContext.Provider value = {{carrito, setCarrito, total, totalPagar, incrementar, decrementar}} > 
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;