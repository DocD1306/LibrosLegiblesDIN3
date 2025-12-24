import Admin from '../pages/Admin';

/**
 * Metadata del componente Admin.
 * El tag 'autodocs' es el que activa la generación automática de la documentación
 * basada en los comentarios JSDoc del código fuente.
 */
export default {
  title: 'Pages/Admin',
  component: Admin,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Vista de administración para la gestión y creación de nuevos libros con validación nativa y accesibilidad mejorada.',
      },
    },
  },
};

/**
 * Historia por defecto del formulario de administración.
 * Muestra el estado inicial del formulario con todos los campos vacíos.
 */
export const Default = {
  render: () => <Admin />,
};

/**
 * Esta historia permite visualizar cómo se comporta el componente en el lienzo.
 * Como el componente Admin no recibe props externas (gestiona su propio estado),
 * la documentación automática se centrará en la descripción de su lógica interna.
 */
export const InteractionView = {
  render: () => <Admin />,
};