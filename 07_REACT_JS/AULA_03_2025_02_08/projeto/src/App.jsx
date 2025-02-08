import LoginPage from './pages/login';
import HomePage from './pages/home';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CategoriasPage from './pages/categorias';
import ProdutosPage from './pages/produtos';
import UsuariosPage from './pages/usuarios';
import Menu from './layouts/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          
          <Route path="*" element={<h1>NotFound</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
