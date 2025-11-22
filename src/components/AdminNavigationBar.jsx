import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MainContent from "./MainContent.jsx";
import logo from '../assets/images/LibrosLegiblesLogo.png'
import Footer from "./Footer.jsx";

function AdminNavigationBar() {
    /* Estado para controlar la apertura/cierre del menú móvil */
    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                {/* Añadimos 'aria-label' al nav para identificar esta navegación específica 
                    si hubiera más de una en la página (ej: footer, sidebar).
                    
                    Añadido 'relative' para que el menú desplegable absoluto se posicione respecto a este contenedor.
                */}
                <nav className="navigation_bar background_color_primary relative" aria-label="Navegación principal">

                    {/* Enlace al inicio. */}
                    <Link to="/" className="logo_and_title z-50">
                        {/* Imagen responsive:
                            - w-[40px] h-[40px]: Tamaño para móvil/tablet.
                            - lg:w-[60px] lg:h-[60px]: Tamaño original para escritorio.
                        */}
                        <img 
                            src={logo} 
                            alt="Libros Legibles Logo" 
                            className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] transition-all duration-300 rounded-full" 
                        />
                        {/* Texto responsive mediante media queries en CSS */}
                        <h1 className="heading_h3 color_white transition-all duration-300">
                            LibrosLegibles
                        </h1>
                    </Link>

                    {/* Mejoras de Accesibilidad en el Botón:
                        1. type="button": Previene comportamientos inesperados de submit.
                        2. aria-label: Describe la acción para usuarios que no ven el icono "☰".
                        3. aria-expanded: Informa al lector de pantalla si el menú está abierto (true) o cerrado (false).
                        4. aria-controls: Vincula este botón con el menú que controla mediante su ID.
                        
                        Cambios visuales:
                        - lg:hidden: Se oculta automáticamente en pantallas de escritorio.
                    */}
                    <button 
                        type="button"
                        className="color_white lg:hidden p-2 focus:outline-none"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={open}
                        aria-controls="menu-navegacion"
                    >
                        <span aria-hidden="true" className="heading_h5">
                            {open ? "✕" : "☰"}
                        </span>
                    </button>

                    {/* Cambio semántico: Usamos <ul> (lista desordenada) en lugar de un <div> genérico.
                        Esto permite a los lectores de pantalla anunciar "Lista de 3 elementos".
                        
                        Añadimos id="menu-navegacion" para que coincida con el aria-controls del botón.

                        Lógica de clases para responsividad:
                        - Móvil/Tablet (Open): absolute, top-full, left-0, w-full, flex-col, items-center.
                        - Escritorio (lg): static, flex-row, w-auto, gap-10 (estilo navigation_links), bg-transparent.
                    */}
                    <ul
                        id="menu-navegacion"
                        className={`
                            background_color_primary
                            transition-all duration-300 ease-in-out
                            ${open 
                                ? "absolute top-full left-0 w-full flex flex-col items-center py-7 gap-6 shadow-lg z-40" 
                                : "hidden"
                            }
                            lg:flex lg:static lg:w-auto lg:flex-row lg:gap-10 lg:p-0 lg:shadow-none lg:bg-transparent
                        `}
                    >
                        {/* Cada elemento de navegación debe ir dentro de un <li> */}
                        <li>
                            {/* NavLink para la página de Inicio:
                                - end: Asegura que la ruta raíz "/" no coincida parcialmente con otras rutas.
                                - aria-current: Se calcula dinámicamente. Si isActive es true, asigna "page", 
                                  indicando al lector de pantalla que el link referencia a la página actual.
                                - onCliclk: Cierra el menú móvil al seleccionar una opción.
                            */}
                            <NavLink 
                                to="/" 
                                end
                                onClick={() => setOpen(false)} 
                                className="text_normal_bold color_white hover:opacity-80 transition-opacity"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/catalogue" 
                                onClick={() => setOpen(false)} 
                                className="text_normal_bold color_white hover:opacity-80 transition-opacity"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Catálogo de Libros
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/admin" 
                                onClick={() => setOpen(false)} 
                                className="text_normal_bold color_white hover:opacity-80 transition-opacity"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Administración
                            </NavLink>
                        </li>
                    </ul>

                </nav>
            </header>

            {/*Envolvemos el Outlet en MainContent para mantener el diseño consistente en las páginas.*/}
            <MainContent>
                <Outlet />  
            </MainContent>
            <Footer/>
        </>
    );
}

export default AdminNavigationBar;
