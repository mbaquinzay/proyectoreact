import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap'; // Asegúrate de importar estos componentes
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <h1 className="text-center mt-4">Lista de Productos</h1>
      {loading ? (
        <h2 className="text-center">Cargando...</h2>
      ) : (
        <Row className="my-4">
          {currentProducts.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{product.title}</Card.Title>
                  <Card.Text className="text-center">
                    <span style={{ fontWeight: 'bold', color: '#FF5733' }}>
                      ${product.price}
                    </span>
                  </Card.Text>
                  <div className="mt-auto text-center">
                    <Button variant="primary" className="w-100">
                      Comprar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <Pagination 
        productsPerPage={productsPerPage} 
        totalProducts={products.length} 
        paginate={paginate} 
      />
    </Container>
  );
}

export default ProductList;
