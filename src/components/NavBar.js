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
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    {items.length > 0 && <CartWidget />}
                </div>
            </div>
        </div>
    )
}
export default NavBar