import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import './CartItem.css'

export const CartItem = ({id, name, price, cantidad, stock, image, color}) => {

    const { eliminarItem, cantidadInCart, updateColorInCart } = useContext(CartContext)

    const [newColor, setNewColor] = useState(color)

    const [cantidadCart, setCantidadCart] = useState(cantidad)

    const handleRestarCart = () => {
        if (cantidadCart > 1) {
            setCantidadCart(cantidadCart - 1)
            cantidadInCart(id, cantidadCart - 1);
        }
    };

    const handleSumarCart = () => {
        if (cantidadCart < stock){
            setCantidadCart(cantidadCart + 1)
            cantidadInCart(id, cantidadCart + 1);
        }
    };

    useEffect(() => {
        cantidadInCart(id, cantidadCart);
    }, [id, cantidadCart]);

    const handleSelection = (e) => {
        const selectedColor = e.target.value;
        setNewColor(selectedColor);
        updateColorInCart(id, selectedColor);
    };

    const colores = [
        {value: 'rojo', text: 'Rojo', id:1},
        {value: 'azul', text: 'Azul', id:2},
        {value: 'verde', text: 'Verde', id:3},
        {value: 'negro', text: 'Negro', id:4},
        {value: 'blanco', text: 'Blanco', id:5}
    ]

    return(
        <div className="cartItemContainer">
            <div className="cartItemTop">
                <div className="cartItemNamePrice">
                    <h3 className="cartItemName">{name}</h3>
                    <p className="cartItemPrice">Precio unidad: ${price}</p>
                    <p className="cartItemPrice">Precio total: ${price * cantidad}</p>
                </div>
                <div className="cartItemImageContainer">
                    <img src={image} className="cartItemImage" />
                </div>
            </div>
            <div className="cartItemActions">
                <div className="itemCartCountContainer">
                    <button onClick={handleRestarCart} className="itemCartCountButton decrement">-</button>
                    <span className="itemCartCount">{cantidadCart}</span>
                    <button onClick={handleSumarCart} className="itemCartCountButton increment">+</button>
                </div>
                {color && (
                    <select className="cartColorSelector" value={newColor} onChange={handleSelection}>
                        {colores.map((colors) => (
                            <option key={colors.id} value={colors.value}>
                                {colors.text}
                            </option>
                        ))}
                    </select>
                )}
                <button onClick={() => eliminarItem(id)} className="btn btn-outline-danger">
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    )
}