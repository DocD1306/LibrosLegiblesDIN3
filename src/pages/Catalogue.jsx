import books from "../data/books.js";
import Book from "../components/Book.jsx";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";

/**
 * Catalogue component that displays a searchable list of books.
 * * It handles the logic for filtering books based on a search term using 
 * memoization for performance and renders a grid of accessible book links.
 *
 * @component
 * @returns {JSX.Element} The book catalogue view with search functionality.
 */
function Catalogue(){

    /**
     * State for the current search input value.
     * @type {string}
     */
    const [searchTerm, setSearchTerm] = useState("");

    /**
     * Memoized list of books filtered by the title according to the search term.
     * @type {Array.<Object>}
     */
    const filteredBooks = useMemo(() => {

        if(!searchTerm) {
            return books;
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return books.filter((book) =>
            book.title.toLowerCase().includes(lowerCaseSearchTerm)
        );

    }, [searchTerm]);

    /*
        Este componente representa el catálogo de libros.
        Aquí se importa el array de libros desde data/books.js y se mapea para renderizar un componente Book por cada libro en el array.
    */
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