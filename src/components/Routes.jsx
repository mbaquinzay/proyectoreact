import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from '../paginas/Inicio.jsx';//'./paginas/Inicio';
import Hombre from '../paginas/Hombre.jsx';
import Mujer from '../paginas/Mujer.jsx';
import Contacto from '../paginas/Contacto.jsx';
import NavbarM from  '../components/NavbarM'//'./NavbarM';
import Footer from './FooterM.jsx'//'./Footer';


function AppRoutes() {
  return (
    <Router>
      <NavbarM />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/hombres" element={<Hombre />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </Router>
  );
}



export default AppRoutes;
