import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  items: [[]],
  carroVacio: Boolean,
  addToCart: () => { },
  clearCart: () => { },
  eliminarDelCart: () => { },
  sumarCantidad: () => { },
  restarCantidadContador: () => { },
  reset: () => { },
  resetearContador: () => {},
  contador: Number
})

const useCart = () => {
  return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {

  const [items, setItems] = useState([])
  const [contador, setContador] = useState(1)

  const addToCart = (item) => {
    if(items.length===0){
      setItems([{...item, cantidad: contador}])
    }else{
      const productoRepetido = items.find(items => items.id == item.id)
      if(!productoRepetido){
        setItems([...items, {...item, cantidad: contador}])
      }else{
        const itemFiltrados = items.filter(prod=>prod.id !== item.id)
        setItems([...itemFiltrados, {...productoRepetido, cantidad: productoRepetido.cantidad + contador}])
      }
    }
    // productoRepetido ? item.inCart = true : setItems(items => items.concat(item))
    // item.cantidad ? item.cantidad = item.cantidad + contador : item.cantidad = contador
    // if(item.cantidad > item.stock){
    //   item.cantidad=item.stock
    // }
    setContador(1)
  }

  const clearCart = () => {
    setItems([])
    items.map(item => item.inCart = false)
    items.map(item => item.cantidad = 0)
  }

  const eliminarDelCart = (id) => {
    const carritoFiltrado = items.filter(items => items.id !== id)
    setItems(carritoFiltrado)
    // items.length == 1 ? setCarroVacio(true) : setCarroVacio(false)
    // Chekear esto que anda Raro
    // const productoEliminado = items.find(item => item.id = id)
    // console.log(productoEliminado);
    // productoEliminado.inCart = false
    // productoEliminado.cantidad = 0
  }

  const sumarCantidad = () => {
    setContador(contador + 1)
  }

  const restarCantidadContador = () => {
    if (contador !== 1) {
      setContador(contador - 1)
    }
  }
  const reset = () => {
    setContador(1)
  }

  const resetearContador = () => {
    setContador(1)
  }

  const context = {
    items: items,
    // carroVacio: carroVacio,
    addToCart: addToCart,
    clearCart: clearCart,
    eliminarDelCart: eliminarDelCart,
    sumarCantidad: sumarCantidad,
    restarCantidadContador: restarCantidadContador,
    resetearContador: resetearContador,
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