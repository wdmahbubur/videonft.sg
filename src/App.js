import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserLayout from './components/UserLayout/UserLayout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import DataProtectionNotice from './pages/DataProtectionNotice/DataProtectionNotice';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Marketplace from './pages/Marketplace/Marketplace';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import VideoDetails from './pages/VideoDetails/VideoDetails';

function App() {
  return (
    <div>
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
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
