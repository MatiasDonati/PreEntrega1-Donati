import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { Link, useParams } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import { useCart } from "../context/CartContext"
import GridLoader from "react-spinners/ClipLoader";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"

const ItemDetailContainer = ({ stock }) => {

  const { id } = useParams()
  const [detalle, setDetalle] = useState([])
  const [clickOnAdd, setclickOnAdd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [items, seItems] = useState()


  const { addToCart } = useCart()

  useEffect(() => {
    if(!items){
      getItems()
      setLoading(true)
    }
    setLoading(false)
    // verDetalle().then(response => {
    //   setDetalle(response)
    // })
  }, [items])

  const currentItem = items?.find(item => item.id === +id)
  
  console.log(id);
  console.log(currentItem);

  console.log(items);

    const getItems = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'items')
        const snapshot = await getDocs(collectionRef)
        seItems(snapshot.docs.map(doc => ({ id: doc.data, ...doc.data() })))
        setLoading(false)
    }

  // const verDetalle = () => {
  //   return new Promise((resolve, reject) => {
  //     const item = PRODUCTS.find(product => product.id == id)
  //     setTimeout(() => {
  //       resolve(item)
  //       setLoading(false)
  //     }, 1500);
  //   })
  // }

  const onAdd = () => {
    setclickOnAdd(true)
  }

  const addHandler = () => {
    addToCart(currentItem)
  }

  return (
    <>
      {loading ?
        <div className="text-center pt-20">
          <GridLoader
            color="#724b80"
            cssOverride={{}}
            loading
            margin={5}
            size={50}
          />
        </div>
        :
        <div className="p-10 pt-20">
          <div className="card w-96 glass">
            <figure><img src={currentItem?.pictureUrl} alt="img" /></figure>
            <div className="card-body">
              {/* <strong className="text-center">Id: {id}</strong> */}
              <h2 className="card-title">{currentItem?.title}</h2>
              <p>{currentItem?.description}</p>
              <p>${currentItem?.price}</p>
              <p>Stock: {currentItem?.stock}</p>
              <div className="card-actions justify-center">
                {clickOnAdd == false ?
                  <ItemCount stock={currentItem?.stock} /> : <div></div>}
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