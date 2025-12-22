import books from "../data/books.js";
import Book from "../components/Book.jsx";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";

/*
    Este componente representa el catálogo de libros.
    Aquí se importa el array de libros desde data/books.js y se mapea para renderizar un componente Book por cada libro en el array.
*/
function Catalogue(){

    const [searchTerm, setSearchTerm] = useState("");

    const filteredBooks = useMemo(() => {

        if(!searchTerm) {
            return books;
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return books.filter((book) =>
            book.title.toLowerCase().includes(lowerCaseSearchTerm)
        );

    }, [searchTerm]);

    return (
        <> 
            <h1 className="heading_h1 color_primary">Catálogo de libros</h1>
            <p className="text_normal color_grey_2 pt-2 pl-1">Disfruta de una infinidad de historias</p>
            
            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Buscar libros por nombre..."
            />

            <section className="catalogue w-full">
                {
                    filteredBooks.map( book =>
                        <Link 
                            key={book.id}
                            to={`/detail/${book.id}`} 
                            aria-label={`Ver detalles del libro ${book.title}`}
                        >
                            <Book title={book.title} image={book.image} synopsis={book.synopsis}/>
                        </Link>   
                    )
                }
            </section>
        </>
    )

}

export default Catalogue