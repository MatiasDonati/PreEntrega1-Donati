import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import Item from "./Item"

const ObraCompleta = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(PRODUCTS)
            }, 250);
        })
    }

    return (
        <>
            <div className="text-center p-14">
            <h1><strong>Obra Completa</strong></h1>
                <div className="flex flex-wrap p-10">
                    {products.map(product => <Item key={product.id} {...product} />)}
                </div>
            </div>
            <div className="text-center">
                <Link to='/'>
                    <button className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Inicio</button>
                </Link>
            </div>
        </>
    )
}
export default ObraCompleta