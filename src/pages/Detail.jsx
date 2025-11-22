import { useParams, Link, useNavigate } from "react-router-dom";
import books from "../data/books.js";

function Detail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const book = books.find(book => book.id === Number(id));


    return (
        <>
            {/* Botón volver accesible */}
            <button
                onClick={() => navigate(-1)}
                className="text_medium_bold color_white background_color_primary mb-10 ml-5 border-2 py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Volver a la página anterior"
            >
                Volver
            </button>

            <article
                className="flex flex-col gap-15 lg:flex-row lg:justify-between lg:items-start max-w-7xl w-full mx-auto px-4 mb-10"
                aria-labelledby="book-title"
            >

                {/* Imagen del libro */}
                <figure 
                    className="w-full max-w-[350px] flex justify-center mx-auto"
                >
                    <img 
                        src={`/${book.image}`}
                        alt={`Portada del libro ${book.title}`}
                        className="
                            w-full h-auto rounded-lg 
                            shadow-[0px_0px_20px_rgba(0,0,0,0.25)]
                        "
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
        </>
    );
}

export default Detail;
