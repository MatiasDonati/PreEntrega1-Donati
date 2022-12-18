import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../context/CartContext"

const NavBar = () => {


  const { carroVacio } = useCart()

    const [categorias, setCategorias] = useState(false)

    const verOnoVer = () => {
        categorias == false ? setCategorias(true) : setCategorias(false)
    }

    return (
        <div className="navbar bg-base-100">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Link to='/'>
                        <img src="https://drive.google.com/uc?export=view&id=12iGO_TiqbkcGhPw4MDWer2JjenIwxWOx" />
                    </Link>
                </div>
            </label>
            <div className="flex-1">
                <Link to='/bio' className="btn btn-ghost normal-case text-xl">YanilogBio</Link>
                <div>
                    <Link to='/category/ilustracion' className="btn btn-ghost normal-case text-xl">Ilustraciones</Link>
                    <Link to='/category/pintura' className="btn btn-ghost normal-case text-xl">Pinturas</Link>
                    {/* <Link to='/category/obracompleta' className="btn btn-ghost normal-case text-xl">Toda la Obra</Link> */}
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost normal-case text-xl">
                        <Link to="/category"><button onClick={verOnoVer}>Categorías-UsandoEstados</button></Link>
                    </label>
                </div>
                {/* <Link to='/rick' className="btn btn-ghost normal-case text-xl">(RickAndMortyTest)</Link> */}
            </div>
            <div className="form-control">
                <input type="text" placeholder="Buscar" className="input input-bordered" />
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    {/* Componente CartWidget dentro de NavBar */}
                    {carroVacio==false && <CartWidget />}
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">Perfil
                                <span className="badge">Nuevo</span>
                            </a>
                        </li>
                        <li><a>Ajustes</a></li>
                        <li><a>YaniLogOut</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar