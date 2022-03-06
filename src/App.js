import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserLayout from './components/UserLayout/UserLayout';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
