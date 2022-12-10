import { Link } from "react-router-dom"

const CharCard = ({ id, name, species, status, image }) => {
    return (
        <Link to={`/rick/${id}`}>
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>{species}</p>
                    <p>{status}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
export default CharCard