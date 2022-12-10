import { useEffect, useState } from "react";
import { PRODUCTS } from "../data/products";
import Item from "./Item";
import ItemPinturas from "./ItemPinturas";

const Pinturas = () => {

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
            const pintura = PRODUCTS.filter(product => product.category == 'Pintura')
            setTimeout(() => {
                resolve(pintura)
            }, 250);
        })
    }

    return (
        <div className="text-center">
            <h1>Pinturas</h1>
            <div className="flex flex-wrap p-10">
                {products.map(product => <ItemPinturas key={product.id} {...product} />)}
            </div>
        </div>
    )
}
export default Pinturas