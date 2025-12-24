import { useParams, Link, useNavigate } from "react-router-dom";
import books from "../data/books.js";
import Book from "../components/Book.jsx";
import { useEffect } from "react";

/**
 * Detailed view component for a specific book.
 * * This component retrieves a book ID from the URL parameters, fetches the book's 
 * specific data, and renders a detailed layout. It also includes a "Related Books" 
 * section with a randomized selection of other titles.
 *
 * @component
 * @returns {JSX.Element} The detail page including book info, navigation, and suggestions.
 */
function Detail() {

    /**
     * ID of the book extracted from the URL parameters.
     * @type {string}
     */
    const { id } = useParams(); // El id del libro desde la URL
    
    /**
     * Navigation function to move between history entries.
     * @type {function}
     */
    const navigate = useNavigate(); 

    // Esto encuentra el libro correspondiente al id de la URL
    /**
     * The book object matching the ID from the URL.
     * @type {Object|undefined}
     */
    const book = books.find(book => book.id === Number(id)); 

    /**
     * A randomized selection of 3 books excluding the currently viewed one.
     * @type {Array.<Object>}
     */
    const otherBooks = books
        .filter(b => b.id !== book.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    // Esto hace que cuando se pulsa el link de un libro el scroll suba al inicio de la página para que la navegación se más cómoda
    /**
     * Effect that triggers a smooth scroll to the top of the window whenever the book ID changes.
     */
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    return (
        <>
            {/* Botón volver accesible */}
            <button
                onClick={() => navigate(-1)}
                className="text_medium_bold color_white background_color_primary mb-10 ml-5 border-2 py-2 px-5 rounded-lg hover:underline transition-colors"
                aria-label="Volver a la página anterior"
            >
                Volver
            </button>

            <article
                className="flex flex-col gap-15 lg:flex-row lg:justify-between lg:items-start max-w-7xl w-full mx-auto px-4 mb-25"
                aria-labelledby="book-title"
            >

                {/* Imagen del libro */}
                <figure 
                    className="max-w-[350px] h-[500px] flex justify-center mx-auto overflow-hidden rounded-lg"
                >
                    <img 
                        src={`/${book.image}`}
                        alt={`Portada del libro ${book.title}`}
                        className=" h-full object-cover shadow-[0px_0px_20px_rgba(0,0,0,0.25)]"
                    />
                    <figcaption className="sr-only">{`Portada del libro ${book.title}`}</figcaption>
                </figure>

                {/* Información del libro */}
                <section className="flex flex-col justify-center text-center lg:text-left w-full max-w-full flex-1">
                    
                    <h1 
                        id="book-title" 
                        className="heading_h1 color_primary"
                    >
                        {book.title}
                    </h1>

                    <p className="text_medium color_grey_3 mt-2">
                        {book.genre}
                    </p>

                    <p className="text_large_bold color_primary mt-4">
                        {book.price.toFixed(2)} €
                    </p>

                    <h2 className="heading_h5 mt-8 color_primary">
                        Sinopsis
                    </h2>

                    <p className="text_medium mt-3 color_black_3 leading-relaxed">
                        {book.synopsis}
                    </p>

                </section>
                
            </article>

            {/* Contenedor accesible para los libros relacionados */}
            <div 
                role="region" 
                aria-labelledby="other-books-heading" 
                className="flex flex-col w-full px-4 items-center lg:items-start"
            >
                <h2 
                    id="other-books-heading" 
                    className="heading_h3 color_primary mb-6 text-center lg:text-left"
                >
                    Otros libros que podrían interesarte
                </h2>

                <section className="flex flex-wrap gap-6 justify-center w-full">
                    {   
                        otherBooks.map( item =>
                            <Link 
                                key={item.id}   
                                to={`/detail/${item.id}`} 
                                aria-label={`Ver detalles del libro ${item.title}`}
                            >
                                <Book title={item.title} image={`/${item.image}`} synopsis={item.synopsis}/>
                            </Link>   
                        )
                    }
                </section>
            </div>

        </>
    );
}

export default Detail;