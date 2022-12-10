import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { Link, useParams } from "react-router-dom"
import { PRODUCTS } from "../data/products"

const ItemDetailContainer = ({ stock }) => {

  const { id } = useParams()
  const [detalle, setDetalle] = useState([])

  useEffect(() => {
    verDetalle().then(response=>{
      setDetalle(response)
    })
  }, [id])

  const onAdd = () => {
    stock < 1 ? console.log('No hay stock.') : console.log('Hay Stock!');;
  }

  const verDetalle = () => {
    return new Promise ((resolve, reject)=>{
      const item = PRODUCTS.find(product => product.id == id)
      setTimeout(() => {
        resolve(item)
      }, 500);
    })
  }

  return (
    <>
      <div className="p-10">
        <div className="card w-96 glass">
          <figure><img src={detalle.pictureUrl} alt="img" /></figure>
          <div className="card-body">
            <strong className="text-center">Id: {id}</strong>
            <h2 className="card-title">{detalle.title}</h2>
            <p>{detalle.description}</p>
            <p>${detalle.price}</p>
            <div className="card-actions justify-end">
              <ItemCount stock={detalle.stock} />
              <button onClick={onAdd} className="btn btn-primary">Comprar</button>
            </div>
            <Link to={`/`} className='btn'>Volver</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemDetailContainer