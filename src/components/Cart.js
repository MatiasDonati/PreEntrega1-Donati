
import { getFirestore, collection, addDoc, doc, updateDoc, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"
import ProductoEnCart from "./ProductoEnCart"

const Cart = () => {

  const { items, carroVacio, clearCart } = useCart()
  console.log(carroVacio);

  let totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const makeOrder = () => {
    const user = { name: 'Juan', phone: 432432, email: 'juan@gmail.com' }
    const order = {
      buyer: user,
      items: items
      // PASAR PRECIO TOTAL
    }
    console.log('Levantando orden:', order);
    saveORder(order)
  }

  const saveORder = async (order) => {
    const db = getFirestore()
    const orderCollection = collection(db, "compra")
    const id = await addDoc(orderCollection, order)
    console.log('Nueva orden de compra:', id);
  }

  const editOrderHandler = () => {
    const id = '2egVMwtInIKQCPRrAfSw'
    editOrder(id)
  }

  const editOrder = (id) => {
    const db = getFirestore()
    const orderDoc = doc(db, 'compra', id)
    updateDoc(orderDoc, {
      buyer: {
        name: 'Robertoooo',
        phone: 1123123123123123123,
        email: 'Robertoooon@gmail.com',
        // total: { totalPrice }
      }
    }).then(res => console.log(res))
  }

  const makeBatch = () => {
    const db = getFirestore()

    const order1 = doc(db, 'compra', '2egVMwtInIKQCPRrAfSw')

    const batch = writeBatch(db)

    batch.update(order1, { total: 12345 })

    batch.commit()
  }

  console.log(items.length);

  return (
    <div className="m-10 text-xl">
      <strong>Carrito de Compras</strong>
      <br />
      {totalPrice > 0 && <strong>Precio total: $ {totalPrice}</strong>}
      {totalPrice >= 5000 && <><p>Envio gratis!</p><p className="text-sm">Superaste los $5000!</p></>}
      <p>{items.map(product => <ProductoEnCart key={product.id} {...product} />)}</p>
      {carroVacio == true ?
        <>
          <p>El carrito se encuentra vacío</p>
          <Link to='/'><button className="btn">Ir a comprar</button></Link>
        </>
        :
        <>
          <button className="btn" onClick={clearCart}>Vaciar Carrito</button>
          <br />
          <br />
          <button className="btn" onClick={makeOrder}>Comprar</button>
          <div>Dar id de la orden al cliente</div>
          <button className="btn" onClick={editOrderHandler}>Actualizar Compra</button>
          <button className="btn" onClick={makeBatch}>Batch</button>
        </>
      }
    </div>
  )
}
export default Cart