import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';            
import 'aos/dist/aos.css';         
import Header from './components/Header';
import HomePage from './pages/Home';
import PlansPage from './pages/Plans';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register'
import ProfilePage from './pages/Profile'
import ProtectedRoute  from './components/ProtectedRoute';

export default function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  const savedData = localStorage.getItem("userData")
  const [userData, setuserData] = useState(savedData? JSON.parse(savedData):{name:"",email:"",plan:""})
  const [plan, setPlan] = useState<string>(localStorage.getItem("plan") || "Free")
  const [loggedIn, setLoggedIn] = useState<boolean>(localStorage.getItem("loggedIn") === "true"|| false)

  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen overflow-x-hidden bg-[#020617]">
        <Header loggedIn={loggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/plans" element={<PlansPage userData={userData}/>} />
            <Route path="/login" element={<ProtectedRoute redirectPage={loggedIn? "/userHome":"/"} enable={!loggedIn} children={<LoginPage setLoggedIn={setLoggedIn} setUserData={setuserData}/>} />} />
            <Route path="/register" element={<ProtectedRoute redirectPage={loggedIn? "/userHome":"/"} enable={plan && !loggedIn ? true:false} children={<RegisterPage/>}/>}/>
            <Route path="/profile" element={<ProtectedRoute redirectPage="/" enable={loggedIn} children={<ProfilePage userData={userData} setUserData={setuserData} setLoggedIn={setLoggedIn}/>}/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}