function MainContent({ children }){
    
    /* 
    Componente que envuelve el contenido principal de la aplicación, se le puede cualquier contenido de modo que es reutilizable a lo largo de la aplicación.

    El id "main-content" se utiliza para el enlace de accesibilidad en main.jsx
    
    El role "main" es un refuerzo a la etiqueta main que indica que este es el contenido principal de la página
    
    tabIndex="-1" hace que el elemento no se pueda enfocar mediante tabulación, pero permite que los scripts lo enfoquen si es necesario (como al usar 
    el enlace de "Saltar al contenido principal")

    Con el className se le aplican los estilos, en este caso se hace para que todas las secciones principales tengan el mismo padding.
    */
    return (
        <main id="main-content" role="main" tabIndex="-1" className="main_content">
            {children}
        </main>
    )
}

export default MainContent