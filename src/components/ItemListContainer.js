import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";


const ItemListContainer = ({ greeting }) => {

  const { id } = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { user } = useAuth()

  const getItems = async () => {
    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    const snapshot = await getDocs(collectionRef)
    setProducts(snapshot.docs.map(doc => ({ id: doc.data, ...doc.data() })))
    console.log(products);
    setLoading(false)
  }

  const getCategory = () => {
    const db = getFirestore()
    const q = query(collection(db, 'items'),
      where('category', '==', id), limit())
    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log('No hay resultados');
      }
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      setLoading(false)
    })
  }

  useEffect(() => {
    setLoading(true)
    id ? getCategory() : getItems()
  }, [id])

  return (
    <>
      <div className='text-center pt-20'><strong>{greeting}</strong></div>
      {products && <ItemList products={products} loading={loading} />}
    </>
  )
}
export default ItemListContainer