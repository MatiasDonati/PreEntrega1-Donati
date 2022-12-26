import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  items: [[]],
  carroVacio: Boolean,
  addToCart: () => { },
  clearCart: () => { },
  eliminarDelCart: () => { },
  sumarCantidad: () => { },
  restarCantidad: () => { },
  reset: () => { },
  contador: Number
})

const useCart = () => {
  return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {

  const [items, setItems] = useState([])
  const [carroVacio, setCarroVacio] = useState(true)
  const [contador, setContador] = useState(1)

  const addToCart = (item) => {
    setCarroVacio(false)
    // setItems( items => [...items, item] )
    const productoRepetido = items.find(items => items.id == item.id)
    productoRepetido ? item.inCart = true : setItems(items => items.concat(item))
    item.cantidad ? item.cantidad = item.cantidad + contador : item.cantidad = contador
    setContador(1)
  }

  const clearCart = () => {
    setItems([])
    setCarroVacio(true)
    items.map(item => item.inCart = false)
    items.map(item => item.cantidad = 0)
  }

  const eliminarDelCart = (id) => {
    setItems(items.filter(items => items.id != id))
    items.length == 1 ? setCarroVacio(true) : setCarroVacio(false)
    const productoEliminado = items.find(item => item.id = id)
    productoEliminado.inCart = false
    productoEliminado.cantidad = 0
  }

  const sumarCantidad = () => {
    setContador(contador + 1)
  }

  const restarCantidad = () => {
    if (contador != 1) {
      setContador(contador - 1)
    }
  }
  const reset = () => {
    setContador(1)
  }

  const context = {
    items: items,
    carroVacio: carroVacio,
    addToCart: addToCart,
    clearCart: clearCart,
    eliminarDelCart: eliminarDelCart,
    sumarCantidad: sumarCantidad,
    restarCantidad: restarCantidad,
    reset: reset,
    contador: contador
  }

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider, useCart }