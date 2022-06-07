import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavLinks from './components/Navlinks/NavLinks';
import Title from './components/Title/Title';
import Main from './views/Main/Main';
import {  useNavigate } from 'react-router-dom'
import DailyBugle from './views/Daily-bugle/DailyBugle';
function App() {
  return (
    <div className='container'>
    
    <BrowserRouter>

      <Routes>
          <Route path="/:id" element={<Main/>} /> 
          <Route path="/" element={<Main/>} /> 
          <Route path="/news/dailybugle" element={<DailyBugle/>} /> 
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
