import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import { UserDataContext } from './context/userContext';

const App = () => {

 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captainlogin' element={<CaptainLogin />} />
        <Route path='/captainsignup' element={<CaptainSignup />} />

      </Routes>
    </div>
  )
}

export default App