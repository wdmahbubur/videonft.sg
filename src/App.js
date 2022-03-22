import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoute from './components/common/UserRoute';
import UserLayout from './components/UserLayout/UserLayout';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Create from './pages/Create/Create';
import DataProtectionNotice from './pages/DataProtectionNotice/DataProtectionNotice';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Marketplace from './pages/Marketplace/Marketplace';
import Profile from './pages/Profile/Profile';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import SendOTP from './pages/VerifyPhone/SendOTP';
import VerifyPhone from './pages/VerifyPhone/VerifyPhone';
import VideoDetails from './pages/VideoDetails/VideoDetails';
import Wallet from './pages/Wallet/Wallet';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='marketplace' element={<Marketplace />} />
            <Route path='video-details/:id' element={<VideoDetails />} />
            <Route path='about-us' element={<About />} />
            <Route path='contact-us' element={<Contact />} />
            <Route path='terms-of-use' element={<TermsOfUse />} />
            <Route path='data-protection-notice' element={<DataProtectionNotice />} />
            <Route path='profile' element={<UserRoute><Profile /></UserRoute>} />
            <Route path='wallet' element={<UserRoute><Wallet /></UserRoute>} />
            <Route path='create' element={<UserRoute><Create /></UserRoute>} />

          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/verify-phone' element={<SendOTP />} />
          <Route path='/verify-phone/:id&&:number' element={<VerifyPhone />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
