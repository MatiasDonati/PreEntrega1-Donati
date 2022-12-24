import { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemPinturas = ({ id, title, description, price, pictureUrl, stock, category }) => {

  const onAdd = () => {
    stock < 1 ? console.log('No hay stock.') : console.log('Hay Stock!');;
  }

  return (
    <>
      <div className="p-5">
        <div className="card w-96 glass">
          <figure><img src={pictureUrl} alt="img" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>{category}</p>
            <p>${price}</p>
            <div className="card-actions justify-end">
              <ItemCount stock={stock}/>
              <button onClick={onAdd} className="btn btn-primary">Comprar</button>
            </div>
            <Link to={`/pinturas/${id}`} className='btn'>Ver detalle</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemPinturas