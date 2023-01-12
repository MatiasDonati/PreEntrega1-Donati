
import { getFirestore, collection, addDoc, doc, updateDoc, writeBatch } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"
import Formulario from "./Formulario";
import ProductoEnCart from "./ProductoEnCart"

const Cart = () => {

  const { items, clearCart, contador } = useCart()

  let totalPrice = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);

  let totalCantidad = items.reduce((acc, item) => acc + item.cantidad, 0);

  const [finalizarCompra, setFinalizarCompra] = useState(false)
  const [ordenDeCompra, setOrdenDeCompra] = useState("")

  const mostrarFormulario = () => {
    setFinalizarCompra(true)
  }

  const makeOrder = (name, apellido, celular, tarjeta, correo) => {
    const user = {
      name: name,
      apellido: apellido,
      phone: celular,
      tarjeta: tarjeta,
      email: correo
    }
    const order = {
      buyer: user,
      items: items,
      totalPrice: totalPrice
    }
    console.log('Levantando orden:', order);
    saveORder(order)

  }

  const saveORder = async (order) => {
    const db = getFirestore()
    const orderCollection = collection(db, "compra")
    const id = await addDoc(orderCollection, order)
    console.log('Nueva orden de compra:', id.id);
    setOrdenDeCompra(id.id)
  }

console.log(items);

  return (
    <div className="pt-20"
    // justify-center items-center h-screen mx-auto container w-full
    >
      {finalizarCompra === false ?
        <div className="m-10 text-xl">
          <strong className="content-center">Carrito de Compras</strong>
          <br />
          {totalPrice > 0
            &&
            <>
              <strong>Precio total: $ {totalPrice}</strong>
              {totalCantidad === 1 ? <div>Cantidad: {totalCantidad} Obra</div> : <div>Cantidad: {totalCantidad} Obras</div>}
            </>}
          {totalPrice >= 5000 && <><p>Envio gratis!</p><p className="text-sm">Superaste los $5000!</p></>}
          {items.map(product => <ProductoEnCart key={product.id} {...product} contador={contador} totalPrice={totalPrice} />)}
          {
            items.length === 0 ?
              <div className="pt-20">
                <p>El carrito se encuentra vacío</p>
                <Link to='/' ><button className="btn">Ir a comprar</button></Link>
              </div>
              :
              <>
                <button className="btn" onClick={mostrarFormulario}>Comprar</button>
                <br />
                <br />
                <button className="btn" onClick={clearCart}>Vaciar Carrito</button>
              </>
          }
        </div>
        :
        <Formulario totalPrice={totalPrice} makeOrder={makeOrder} ordenDeCompra={ordenDeCompra} clearCart={clearCart} />
      }
    </div>
  )
}
export default Cart