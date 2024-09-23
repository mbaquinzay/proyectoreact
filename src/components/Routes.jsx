import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from '../paginas/Inicio.jsx'; // Página de inicio
import Hombre from '../paginas/Hombre.jsx';
import Mujer from '../paginas/Mujer.jsx';
import Contacto from '../paginas/Contacto.jsx';
import NavbarM from '../components/NavbarM'; // NavbarM ya importado
import ProductList from '../components/ProductList'; // Importa ProductList

function AppRoutes() {
  return (
    <Router>
      <NavbarM /> {/* El Navbar se mantiene siempre */}
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/hombres" element={<Hombre />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<ProductList />} /> 



      </Routes>
    </Router>
  );
}

export default AppRoutes;
