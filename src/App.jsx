import './index.css'
import Catalogue from "./Catalogue.jsx"
import MainContent from "./MainContent.jsx"

function App() {

  /*
  Para la estructura de mi aplicación, he decidido no pasarle el array de libros desde app para mantener la limpieza del código.
  Mi idea es que dentro de App.jsx se llame a la cabecera (cosa que todavía no se ha pedido), al MainContent y al pie de página (tampoco se ha pedido todavía).
  Luego, dentro de MainContent se llamará al catálogo y este será el que llame al array de libros, evitando sobrecargar un único componente con demasiado código.
  */
  return (
    <>
        <MainContent>
          <Catalogue/>
        </MainContent>
    </>
  )
}

export default App
