import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products";
import Item from "./Item";
import GridLoader from "react-spinners/ClipLoader";

const ItemList = ({ id }) => {

    console.log(id);
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProducts().then(response => {
            setProducts(response)
        })
    }, [id])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id) {
                    resolve(PRODUCTS.filter(product => product.category == id))
                } else {
                    resolve(PRODUCTS)
                }
                setLoading(false)
            }, 2000);
        })
    }

    console.log(products);

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