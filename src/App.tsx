import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login.tsx';
import RegisterPage from './Pages/Register.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import RandomImage from './components-ri/index..tsx';
import ListImage from './components-li/index.tsx';
import WelcomePage from './Pages/welcome.tsx';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/random" element={<RandomImage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/list" element={<ListImage />} />
        {/* <Route path="/products" element={<ProductsPage />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
