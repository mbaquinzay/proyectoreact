/*import './App.css';
import NavbarM from './components/NavbarM';

function App() {
  return (
    <div className="App">
      <h1> HOLA SOY MANUEL BAQUINZAY</h1>
      <NavbarM/>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';

const Filters = ({ products, setFilteredProducts }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const keyword = e.target.value;
    setFilter(keyword);

    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filters;

