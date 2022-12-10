import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link  to='/' className="btn btn-ghost normal-case text-xl">Yanilog</Link>
            <Link  to='/ilustraciones' className="btn btn-ghost normal-case text-xl">Ilustraciones/Arte Digital</Link>
            <Link  to='/pinturas' className="btn btn-ghost normal-case text-xl">Pinturas</Link>
            <Link  to='/rick' className="btn btn-ghost normal-case text-xl">RickAndMortyTest</Link>
            {/* <a className="btn btn-ghost normal-case text-xl">Arte Digital</a> */}
        </div>
        {/* <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Yanilog</a>
        </div> */}
        <div className="form-control">
            <input type="text" placeholder="Buscar" className="input input-bordered" />
        </div>

        <div className="flex-none">
            <div className="dropdown dropdown-end">
            {/* Componente CartWidget dentro de NavBar */}
            <CartWidget />
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
                    <li><a>YaniLogout</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default NavBar