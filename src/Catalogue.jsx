import books from "./data/books.js"
import Book from "./Book.jsx"

function Catalogue(){

    /*
    Este componente representa el catálogo de libros.
    Aquí se importa el array de libros desde data/books.js y se mapea para renderizar un componente Book por cada libro en el array.
    */
    return (
        <> 
            <section className="page_title_section">
                <h1 className="heading_h1">Catálogo de libros</h1>
                <p className="text_normal color_grey_2 pt-2 pl-1">Disfruta de una infinidad de historias</p>
            </section>
            <section className="catalogue w-full">
                {
                    books.map( book =>
                        <Book title={book.title} image={book.image} synopsis={book.synopsis}/>
                    )
                }
            </section>
        </>
    )

}

export default Catalogue