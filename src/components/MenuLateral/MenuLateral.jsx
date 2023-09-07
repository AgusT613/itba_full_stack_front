import "./MenuLateral.css"
import logo from ".../images/logo.png"

export function MenuLateral() {
    return (
        <>
        <aside className="menu-lateral">
            <figure>
                <img id="logo" src={logo} alt="Imagen de logo del banco ITBANK, compuesto por el nombre del banco estilizado" />
            </figure>
            <nav className="header-nav">
                <NavLink to="../Inicio" 
                className= {({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                > 
                    Inicio 
                </NavLink>
                <NavLink to= "../Cuentas" 
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                > 
                    Cuentas 
                </NavLink>
                <NavLink to= "../Transferencias" 
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                > 
                    Transferencias 
                </NavLink>
                <NavLink to= "../Pagos" 
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                > 
                    Pagos 
                </NavLink>
            </nav>
            <button >Cerrar Sesion</button>
        </aside>
        </>
    )
}
// LOGO, LINKS, CERRAR SESION, +conversor de monedas agg