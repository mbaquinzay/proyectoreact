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
