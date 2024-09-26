import './App.css';
import LoginPage from './pages/loginPage/loginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signupPage/signupPage';
import LandingPage from './pages/landingPage/landingPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path='/landing' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
