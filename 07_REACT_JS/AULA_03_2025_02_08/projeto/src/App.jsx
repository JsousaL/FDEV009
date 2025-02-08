import LoginPage from './pages/login';
import HomePage from './pages/home';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>NotFound</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
