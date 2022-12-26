import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { Link, useParams } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import { useCart } from "../context/CartContext"
import GridLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = ({ stock }) => {

  const { id } = useParams()
  const [detalle, setDetalle] = useState([])
  const [clickOnAdd, setclickOnAdd] = useState(false)
  const [loading, setLoading] = useState(false)

  const { addToCart } = useCart()

  useEffect(() => {
    setLoading(true)
    verDetalle().then(response => {
      setDetalle(response)
    })
  }, [id])

  const verDetalle = () => {
    return new Promise((resolve, reject) => {
      const item = PRODUCTS.find(product => product.id == id)
      setTimeout(() => {
        resolve(item)
        setLoading(false)
      }, 1500);
    })
  }
  const onAdd = () => {
    setclickOnAdd(true)
  }

  const addHandler = () => {
    addToCart(detalle)
  }

  return (
    <>
      {loading ?
      <div className="text-center">
        <GridLoader
          color="#724b80"
          cssOverride={{}}
          loading
          margin={5}
          size={50}
        />
        </div>
        :
        <div className="p-10">
          <div className="card w-96 glass">
            <figure><img src={detalle.pictureUrl} alt="img" /></figure>
            <div className="card-body">
              {/* <strong className="text-center">Id: {id}</strong> */}
              <h2 className="card-title">{detalle.title}</h2>
              <p>{detalle.description}</p>
              <p>${detalle.price}</p>
              <div className="card-actions justify-center">
                {clickOnAdd == false ?
                  <ItemCount stock={detalle.stock} /> : <div></div>}
              </div>
              {clickOnAdd == false ?
                <button onClick={onAdd} className="btn btn-primary">Comprar</button> :
                <Link to="/cart"><button className="btn btn-primary" onClick={addHandler} >Terminar Compra</button></Link>
              }
              <Link to={`/`} className='btn'>Volver</Link>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default ItemDetailContainer