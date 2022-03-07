import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserLayout from './components/UserLayout/UserLayout';
import Home from './pages/Home/Home';
import Marketplace from './pages/Marketplace/Marketplace';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='marketplace' element={<Marketplace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
