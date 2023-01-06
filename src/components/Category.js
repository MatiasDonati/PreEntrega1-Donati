import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import Item from "./Item"
import piesYaniLog from "../images/piesYaniLog.jpeg"

const Category = () => {

    const [products, setProducts] = useState([])
    const [ver, setVer] = useState(false)

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

    const verIlustracion = () =>{
        setProducts(PRODUCTS.filter(product => product.category == 'ilustracion'))
        setVer(true)
    }
    const verPintura = () =>{
        setProducts(PRODUCTS.filter(product => product.category == 'pintura'))
        setVer(true)
    }

    return (
        <div className="pt-20">
            <div className="text-center">
                <button onClick={verIlustracion} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Ilustraciones</button>
                <button onClick={verPintura} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Pinturas</button>
            </div>
            {ver==false?<div className="p-5">
                <img src={piesYaniLog} alt="" className="mx-auto rounded-full p-2"></img>
            </div>:
            <div className="text-center p-14">
                <h1><strong>Obra Completa</strong></h1>
                <div className="flex flex-wrap p-10">
                    {products.map(product => <Item key={product.id} {...product} />)}
                </div>
            </div>}
            <div className="text-center">
                <Link to='/'>
                    <button className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Inicio</button>
                </Link>
            </div>
        </div>
    )
}
export default Category