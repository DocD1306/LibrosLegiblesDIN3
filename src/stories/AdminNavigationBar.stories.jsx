import AdminNavigationBar from '../components/AdminNavigationBar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/AdminNavigationBar',
  component: AdminNavigationBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ minHeight: '100vh', background: '#f4f4f4' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Vista por defecto en escritorio. 
 * Muestra la barra de navegación con los enlaces visibles de forma horizontal.
 */
export const Desktop = {
  args: {},
};

/**
 * Vista de demostración para dispositivos móviles.
 * Nota: En Storybook puedes cambiar el viewport a 'Mobile' en la barra de herramientas 
 * superior para probar la interactividad del botón de hamburguesa.
 */
export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};