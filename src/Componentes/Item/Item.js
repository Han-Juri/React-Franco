import { Link } from "react-router-dom"
import "./Item.css"



export const Item = ({id, name, description, image, price, stock, category}) =>{

    return(
        <div className="col-3 item">
            <h2 className="itemName">{name}</h2>
            <img className="itemImage" src={image} alt={name} />
            <p className="itemPrice">Precio: <b>$ {price}</b></p>
            { stock <= 5 && stock > 0
                    ? <p className="itemAlert">Quedan pocas unidades!</p>
                    : stock === 0 && <p className="itemAlert">Ya no quedan unidades!!</p> }
            { stock === 0
                    ? <button disabled={stock === 0} className="btn btn-dark">Ver mas!</button> 
                    : <Link className="btn btn-dark itemLink" to={`/detail/${id}`}>Ver mas!</Link>}
        </div>
    )
}