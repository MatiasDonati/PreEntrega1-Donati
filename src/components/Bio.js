import { useEffect, useState } from "react";
import Item from "./Item";
import yanilog1 from '../images/yanilog1.jpg'
import { PRODUCTS } from "../data/products";
import { Link } from "react-router-dom";

const Bio = () => {

    const [products, setProducts] = useState([])
    const [boton, setBoton] = useState(false)

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

    const verOnoVer = () => {
        if (boton == false) {
            setBoton(true)
        } else {
            setBoton(false)
        }
    }

    return (
        <div className="pt-20">
            <div className="p-5">
                <img src={yanilog1} alt="" className="mx-auto rounded-full p-2"></img>
            </div>
            <div className="text-center p-14">
                <p>Yanilog es una artista visual At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat </p>
                <br />
                {boton == false ? <button onClick={verOnoVer} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full ">Ver Obra</button> : <button onClick={verOnoVer} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Ocultar Obra</button>}
                {boton == true ? <div className="flex flex-wrap p-10">
                    {products.map(product => <Item key={product.id} {...product} />)}
                </div> : <div></div>}
                {boton == false ? <div></div> : <Link to='/'><button className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Inicio</button></Link>}
            </div>
        </div>
    )
}
export default Bio