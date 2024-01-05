import './App.css';
import Rootlayout from './layout/Rootlayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import About from './pages/About';
import Service from './pages/Service';
import Class from './pages/Class';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Rootlayout/>}>
            <Route index  element={<Home/>} />
            <Route  path='homepage' element={<Homepage/>} />
            <Route  path='about' element={<About/>} />
            <Route  path='service' element={<Service/>} />
            <Route  path='class' element={<Class/>} />
            <Route  path='team' element={<Team/>} />  
            <Route  path='contact' element={<Contact/>} />
          </Route>
       </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
