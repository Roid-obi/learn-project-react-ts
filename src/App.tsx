import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login.tsx';
import RegisterPage from './Pages/Register.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import RandomImage from './components-ri/index..tsx';
import ListImage from './components-li/index.tsx';
import WelcomePage from './Pages/welcome.tsx';
import ErrorPage from './Pages/404.tsx';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/image" element={<RandomImage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/images" element={<ListImage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
