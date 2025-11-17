function Book(props) {

    /* Desestructuración de las props */
    const {title, image, synopsis} = props;

    /*
    Este componente representa una tarjeta individual de un libro, contiene la imagen, el título y la sinopsis del libro.

    Elementos de accesibilidad incluidos:
    tabIndex sirve para la navegación con tabulador
    aria-label es sirve para la accesibilidad por audio

    figure sirve para agrupar contenido multimedia junto con su descripción
    sr-only le dice a Tailwind que oculte el texto visualmente pero que siga siendo accesible para lectores de pantalla    
    */
    return(
        <article tabIndex={0} aria-label={title} className="background_color_white book_card">

            <figure className="book_card_image_containter">
                <img src={image} alt={title} className="book_image"/>
                <figcaption className="sr-only">{title}</figcaption>
            </figure>

            <p className="text_normal_bold pt-3 color_primary">{title}</p>
            <p className="text_small color_grey_2 pt-2">{synopsis}</p>
        
        </article>
    )


}

export default Book