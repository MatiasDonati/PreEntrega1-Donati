import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products";
import Item from "./Item";
import GridLoader from "react-spinners/ClipLoader";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemList = ({products, loading}) => {

    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(false)

    // const getProducts = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (id) {
    //                 resolve(PRODUCTS.filter(product => product.category == id))
    //             } else {
    //                 resolve(PRODUCTS)
    //             }
    //             setLoading(false)
    //         }, 2000);
    //     })
    // }
    
    // const getItems = async () => {
    //     const db = getFirestore()
    //     const collectionRef = collection(db, 'items')
    //     const snapshot = await getDocs(collectionRef)
    //     setProducts(snapshot.docs.map(doc => ({ id: doc.data, ...doc.data() })))
    //     setLoading(false)
    // }
    
    // useEffect(() => {
    //     setLoading(true)
    //     getItems()
    // }, [id])

    return (
        <>
            <div className="text-center p-14">
                {loading ?
                    <div className="p-20">
                        <GridLoader
                            color="#724b80"
                            cssOverride={{}}
                            loading
                            margin={5}
                            size={50}
                        />
                    </div>
                    :
                    <div className="flex flex-wrap p-10">
                        {products.map(product => <Item key={product.id} {...product} />)}
                    </div>
                }
            </div>
        </>
    )
}
export default ItemList