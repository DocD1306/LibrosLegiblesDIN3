import Book from '../components/Book';

export default {
  title: 'Components/Book',
  component: Book,
  // Configuramos los controles para que sean más intuitivos
  argTypes: {
    title: {
      control: 'text',
      description: 'Título del libro',
    },
    image: {
      control: 'text',
      description: 'URL de la imagen de portada',
    },
    synopsis: {
      control: 'text', // Cambiado a text para el control básico
      description: 'Resumen breve del libro',
    },
  },
};

/**
 * Historia base para jugar con los controles (Playground).
 */
export const Playground = {
  args: {
    title: 'El Principito',
    image: '/images/el-principito.jpg',
    synopsis: 'Todas las personas mayores han comenzado por ser niños. (Pero pocas lo recuerdan).',
  },
};

/**
 * Ejemplo con un texto de sinopsis muy extenso para probar el diseño.
 */
export const LongSynopsis = {
  args: {
    title: 'Crónica de una Muerte Anunciada',
    image: '/images/cien-años-de-soledad.jpg',
    synopsis: 'El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo. Había dormido poco y mal, dejando siempre la luz encendida, y despertó con un dolor de cabeza que le pareció un estigma de la parranda del día anterior.',
  },
};

/**
 * Caso de prueba donde la imagen no carga o no existe.
 */
export const NoImage = {
  args: {
    title: 'Libro sin Portada',
    image: '',
    synopsis: 'Esta es una prueba para ver cómo se comporta el componente cuando la propiedad de imagen llega vacía.',
  },
};