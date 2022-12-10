import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products";
import Item from "./Item";
import yanilogLogo from "../images/yanilogLogo.png"
import yanilog1 from "../images/yanilog1.jpg"


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
        <>
        <div className="p-5">
            <img src={yanilog1} alt="" className="mx-auto rounded-full p-2"></img>

            <img src={yanilog1} alt="" className="mx-auto"></img>
        </div>
            <div className="text-center">
                <div className="flex flex-wrap p-10">
                    {products.map(product => <Item key={product.id} {...product} />)}
                </div>
            </div>
        </>
    )
}
export default ItemList