import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';            
import 'aos/dist/aos.css';         
import Header from './components/Header';
import HomePage from './pages/Home';
import PlansPage from './pages/Plans';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register'
import { ProtectedRoute  } from './components/ProtectedRoute';

export default function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen overflow-x-hidden bg-[#020617]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<ProtectedRoute redirectPage='/' enable={localStorage.getItem("plan") ? true:false} children={<RegisterPage/>}/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}