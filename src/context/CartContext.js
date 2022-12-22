import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  items: [[]],
  carroVacio: Boolean,
  addToCart: () => { },
  clearCart: () => { },
  eliminarDelCart: () => { },
})

const useCart = () => {
  return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {

  const [items, setItems] = useState([])
  const [carroVacio, setCarroVacio] = useState(true)


  const addToCart = (item) => {
    setCarroVacio(false)
    // setItems( items => [...items, item] )
    const productoRepetido = items.find(items => items.id == item.id)
    productoRepetido ? item.inCart = true : setItems(items => items.concat(item))
  }

  const clearCart = () => {
    setItems([])
    setCarroVacio(true)
    items.map(item => item.inCart=false)
  }
  console.log(items.length);
  
  const eliminarDelCart = (id) => {
    console.log(id);
    setItems(items.filter(items => items.id != id))
    if (items.length > 0) {
      setCarroVacio(true)
    }
    const productoEliminado = items.find(item => item.id = id)
    productoEliminado.inCart = false
  }

  console.log(items);

  const context = {
    items: items,
    carroVacio: carroVacio,
    addToCart: addToCart,
    clearCart: clearCart,
    eliminarDelCart: eliminarDelCart
  }

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider, useCart }