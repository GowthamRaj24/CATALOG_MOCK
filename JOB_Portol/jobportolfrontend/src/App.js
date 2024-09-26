import './App.css';
import LandingPage from './pages/LandingPage/landingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signupPage/signupPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
