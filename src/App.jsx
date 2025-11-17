import './assets/styles/index.css'
import Catalogue from "./pages/Catalogue.jsx"
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx';

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<NavigationBar />} >
                <Route index element={<Home />} />
                <Route path="catalogue" element={<Catalogue />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
