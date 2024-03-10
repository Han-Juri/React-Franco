import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import { useStarContext } from "../../context/StarContext";
import { CartWidget } from "../CartWidget/CartWidget";
import { Sabers_and_icons } from "../Sabers_and_Icons/Sabers_and_icons";
import './Header.css'

export const Header = () => {

    const { user, logout } = useLoginContext()

    const { quantity, setQuantity, size, setSize, starConfirm, setStarConfirm } = useStarContext()

    const handleStarConfirm = () => {
        if ( starConfirm === true) {
            setStarConfirm(false)
        } else {
            setStarConfirm(true)
        }        

    }

    const handleOnCLickQuantityIncrement = () => {
        if (quantity <= 3000) {
            setQuantity(quantity + 5)
        }
    }
    const handleOnCLickQuantityDecrement = () => {
        if (quantity >= 500) {
            setQuantity(quantity - 5)
        }
    }

    const handleOnCLickSizeIncrement = () => {
        if (size  <= 4.5) {
            setSize(size + .1)
        }
    }
    const handleOnCLickSizeDecrement = () => {
        if (size >= .5) {
            setSize(size - .1)
        }
    }

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
      };
    const handleChangeSize = (event) => {
        setSize(parseFloat(event.target.value));
      };

    return(
        <header className="contenedorLogoLinksCarrito">
            <Sabers_and_icons />
            <div className="contenedorLogo">
                <Link className="logoLink" to="/"><h2 className="logo">PMC</h2></Link>
            </div>
            <div className="rangeCointainer">
                <div>
                    <div>
                        <label htmlFor="rangeQuantity">Cantidad: {quantity}</label>
                    </div>
                    <div className="inputButtonsContainer">
                        <button onClick={handleOnCLickQuantityDecrement} className="incrementDecrement">-</button>
                        <input
                            type="range"
                            id="rangeQuantity"
                            name="rangeQuantity"
                            min="500"
                            max="3000"
                            value={quantity}
                            onChange={handleChangeQuantity}
                        /><button onClick={handleOnCLickQuantityIncrement} className="incrementDecrement">+</button>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="rangeSize">Tamaño: <span className="sizeIndicator" style={{ width: `${size * 2.5}px`, height: `${size * 2.5}px` }}></span></label>
                    </div>
                    <div className="inputButtonsContainer">
                        <button onClick={handleOnCLickSizeDecrement} className="incrementDecrement">-</button>
                        <input
                            type="range"
                            id="rangeSize"
                            name="rangeSize"
                            min=".5"
                            max="4.5"
                            step="0.1"
                            value={size}
                            onChange={handleChangeSize}
                        /><button onClick={handleOnCLickSizeIncrement} className="incrementDecrement">+</button>
                    </div>
                </div>
                <div>
                    <button className='starConfirm' onClick={handleStarConfirm}>Confirm</button>
                </div>
            </div>
            <nav className="contenedorLinks">
                <Link className="links" to="/">Inicio</ Link>
                <Link className="links" to="/productos/consola">Consolas</Link>
                <Link className="links" to="/productos/pc">PC</Link>
                <Link className="links" to="/plataformas">Plataformas</Link>
            </nav>
            <section className="contenedorCarrito">
                <CartWidget />
            </section>
            <div className="contenedorHeader">
                
                {user.logged ?
                 <div>
                 <p className="userWelcome"> Bienvenid@ {user.displayName}</p>
                 <button className="btn btn-danger" onClick={logout}>Logout</button>
                 </div>
                 : <Link to='/login'><button className="btn btn-danger">Login</button></Link>}
            </div>
        </header>
    )
}

export default Header;
