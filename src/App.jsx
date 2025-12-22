import './assets/styles/index.css'
import Catalogue from "./pages/Catalogue.jsx"
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx';
import AdminNavigationBar from './components/AdminNavigationBar.jsx';
import Admin from './pages/Admin.jsx';
import Detail from './pages/Detail.jsx';

function App() {

  const isAuthenticated = true; // Cambia esto a true o false para simular un usuario autenticado

  return (
    <>
        <Routes>
        
            <Route path="/" element={ isAuthenticated ? <AdminNavigationBar/> : <NavigationBar/> } >
                
                <Route index element={<Home />} /> {/*Página por defecto*/}
                <Route path="catalogue" element={<Catalogue />} /> 
                <Route path="detail/:id" element={<Detail/>}/>

                <Route path="admin" element={isAuthenticated ? <Admin/> : <Navigate to="/" replace />}>        
                </Route>
        
            </Route>
        
            <Route path="*" element={<Navigate to="/" replace />} /> {/*Redirige rutas no definidas a la página de inicio*/}
        
        </Routes>
    </>
  )
}

export default App
