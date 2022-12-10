import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import Item from "./Item";


const ItemList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log('comienza getProducts');
        getProducts().then(response => {
            console.log(response);
            setProducts(response)
        })
        console.log('termina getProducts');
    }, [])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(PRODUCTS)
            }, 250);
        })
    }

    return (
        <div className="text-center">
            <h1>Ilustraciones</h1>
            <div className="flex flex-wrap p-10">
                {products.map(product => <Item key={product.id} {...product} />)}
            </div>
        </div>
    )
}
export default ItemList