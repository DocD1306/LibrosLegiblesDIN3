import Detail from '../pages/Detail';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

export default {
  title: 'Pages/Detail',
  component: Detail,
  decorators: [
    (Story, context) => (
      /* Simulamos el entorno de navegación. 
         Usamos el ID que viene en los args para cargar un libro específico.
      */
      <MemoryRouter initialEntries={[`/detail/${context.args.bookId || 1}`]}>
        <Routes>
          <Route path="/detail/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
  argTypes: {
    bookId: {
      control: { type: 'number' },
      description: 'ID del libro a mostrar (debe existir en data/books.js)',
      defaultValue: 1,
    },
  },
};

/**
 * Vista de detalle para un libro existente (ID 1 - El Principito).
 */
export const Default = {
  args: {
    bookId: 1,
  },
};

/**
 * Vista de detalle para otro libro (ID 2).
 */
export const AnotherBook = {
  args: {
    bookId: 2,
  },
};