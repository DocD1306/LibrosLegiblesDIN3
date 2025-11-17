import { Outlet, Link } from "react-router-dom"
import logo from '../assets/images/LibrosLegiblesLogo.png'
import MainContent from "./MainContent.jsx";

function NavigationBar() {
    return (
        <>
            <nav className="navigation_bar background_color_primary">
                <Link to="/" className="logo_and_title">
                    <img src={logo} alt="Libros Legibles Logo" className="w-[60px] h-[60px]" />
                    <h1 className="heading_h4 color_white">Libros Legibles</h1>
                </Link>
                <div className="navigation_links color_white text_normal_bold">
                    <Link to="/">Inicio</Link>
                    <Link to="/catalogue">Catálogo</Link>
                </div>
            </nav>
            <MainContent> {/* Todas las páginas van a utilizar el mismo MainContent */}
                <Outlet />
            </MainContent>
        </>
    )
}   
export default NavigationBar