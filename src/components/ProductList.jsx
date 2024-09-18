import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Cantidad de productos por página

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Paginación
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {loading ? <h2>Cargando...</h2> : 
        <div className="product-grid">
          {currentProducts.map(product => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <p>{product.price} USD</p>
            </div>
          ))}
        </div>
      }
      <Pagination 
        productsPerPage={productsPerPage} 
        totalProducts={products.length} 
        paginate={paginate} 
      />
    </div>
  );
}

export default ProductList;
