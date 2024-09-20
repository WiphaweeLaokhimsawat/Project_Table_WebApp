
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FirstPage from'./screen/FirstPage';
import Login from './screen/LoginPage';
import Register from './screen/RegisterPage';
import Home from './screen/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FirstPage/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
