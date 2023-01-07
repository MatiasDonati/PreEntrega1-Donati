import CartWidget from "./CartWidget"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../context/CartContext"
import ItemList from "./ItemList"
import { useAuth } from "../context/AuthContext"
import { async } from "@firebase/util"

const NavBar = () => {


    const { user, logout } = useAuth()
    const { items } = useCart()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/')
    }

    return (
        <div className="navbar bg-base-100 fixed z-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Link to='/'>
                        <img src="https://drive.google.com/uc?export=view&id=12iGO_TiqbkcGhPw4MDWer2JjenIwxWOx" />
                    </Link>
                </div>
            </label>
            <div className="flex-1">

                <div>
                    <Link to='/category/ilustracion' className="btn btn-ghost normal-case text-xl">Ilustraciones</Link>
                    <Link to='/category/pintura' className="btn btn-ghost normal-case text-xl">Pinturas</Link>
                    <Link to='/bio' className="btn btn-ghost normal-case text-xl">Yanilog Bio</Link>
                    <Link to="/category"><button className="btn btn-ghost normal-case text-xl">Categorías Usando Estados</button></Link>
                </div>
            </div>
            {!user ?
                <Link to="/login"><button className="btn btn-ghost normal-case text-xl">Admin Log</button></Link>
                :
                <>
                <Link to="/edit-items-admin"><div className="btn btn-ghost normal-case text-xl">{user.email}</div></Link>
                <button onClick={handleLogout} className="btn btn-ghost normal-case text-xl">Logout</button>
                </>
            }

            {/* <Link to="/register"><button className="btn btn-ghost normal-case text-xl">Admin Register</button></Link> */}
            <div className="form-control">
                <input type="text" placeholder="Buscar" className="input input-bordered" />
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    {items.length > 0 && <CartWidget />}
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