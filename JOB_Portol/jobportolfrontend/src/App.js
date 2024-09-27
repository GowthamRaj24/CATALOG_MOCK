import './App.css';
// @ts-ignore
import LoginPage from './pages/loginPage/loginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/signupPage/signupPage';
// @ts-ignore
import LandingPage from './pages/landingPage/landingPage';
import AddJobPage from './pages/addJobPage/addJobPage';
import ViewApplicants from './pages/viewApplicants/viewApplicants';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/addJob' element={<AddJobPage />} />
        <Route path="/viewApplicants" element={<ViewApplicants />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
