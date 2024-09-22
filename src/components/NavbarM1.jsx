//import React from 'react';
import React, { useState, useEffect } from 'react';

import { Navbar, Nav, NavDropdown, Container, Card, Button, Row, Col, Form, InputGroup } from 'react-bootstrap'; // Importa Form y InputGroup para el filtro
 
import { Link } from 'react-router-dom';
import logo from '../img/mbtienda.png';
import imghombre from '../img/imghombre.JPG';
import imgmujer from '../img/imgmujer.jpg';
import imgniño from '../img/imgniños.JPG';
import CarouselComponent from './CarouselComponent'; // Asegúrate de importar el carrusel
import '../components/NavbarM.css';
import productosData from '../components/Productosj.json';
import { FaStar, FaStarHalfAlt, FaRegStar, FaSearch } from 'react-icons/fa'; // Para mostrar las estrellas
import FooterM from './FooterM'; // Importar el componente FooterM


function NavbarM1() {
 

      const [productosHombre, setProductosHombre] = useState([]);
      const [productosMujer, setProductosMujer] = useState([]);
      const [searchTerm, setSearchTerm] = useState(''); // Estado para el filtro
  
      useEffect(() => {
          setProductosHombre(productosData.hombres);
          setProductosMujer(productosData.mujeres);
      }, []);
  
      const renderRatingStars = (rating) => {
          const fullStars = Math.floor(rating);
          const halfStar = rating - fullStars >= 0.5;
          const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
          return (
            <>
              {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} className="text-warning" />
              ))}
              {halfStar && <FaStarHalfAlt className="text-warning" />}
              {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={index} className="text-warning" />
              ))}
            </>
          );
      };
  
      const renderProductos = (productos) => {
          return productos
              .filter(producto => producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())) // Filtro por nombre
              .map((producto) => (
              <Col key={producto.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                  <Card className="shadow-sm h-100">
                      <Card.Img
                          variant="top"
                          src={producto.imagen}
                          alt={producto.nombre}
                          style={{ height: '250px', objectFit: 'cover' }}
                      />
                      <Card.Body className="d-flex flex-column">
                          <Card.Title className="text-center">{producto.nombre}</Card.Title>
                          <Card.Text className="text-center">
                              {producto.descripcion}
                              <br />
                              <span style={{ color: '#FF5733', fontWeight: 'bold' }}>Precio: ${producto.precio}</span>
                              <br />
                              <div className="text-center">{renderRatingStars(producto.rating)}</div>
                          </Card.Text>
                          <div className="mt-auto text-center">
                              <Button variant="primary" className="w-75 mx-auto">
                                  Comprar
                              </Button>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
          ));
      };






  return (
    <>
      {/* Navbar principal */}
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="100"
              className="d-inline-block align-top"
              alt="TIENDATECH Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>

              {/* Dropdown para la sección Hombre */}
              <NavDropdown title="Hombre" id="hombre-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/hombres/camisas">Camisas</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/hombres/pantalones">Pantalones</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/hombres/zapatos">Zapatos</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/hombres/otros">Otros</Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown para la sección Mujer */}
              <NavDropdown title="Mujer" id="mujer-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/mujeres/vestidos">Vestidos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mujeres/bolsos">Bolsos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mujeres/zapatos">Zapatos</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/mujeres/otros">Otros</Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown para la sección Niños */}
              <NavDropdown title="Niños" id="niños-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/niños/remeras">Remeras</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/niños/zapatos">Zapatos</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/niños/otros">Otros</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Componente del carrusel */}
      <CarouselComponent />
        
         


            {/* Filtro de búsqueda */}
             <Container className="mt-4">
                <Row>
                    <Col md={12}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Buscar productos por nombre"
                                aria-label="Buscar productos"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} // Controla el filtro
                            />
                            <Button variant="outline-secondary" onClick={() => setSearchTerm('')}>Limpiar</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container> 




      {/* productos destacados */}
      <Container className="productos-destacados mt-5">
        <h2 id="productos-hombre">Productos Destacados - Hombre</h2>
        <Row>{renderProductos(productosHombre)}</Row>

        <h2 id="productos-mujer" className="mt-5">Productos Destacados - Mujer</h2>
        <Row>{renderProductos(productosMujer)}</Row>
      </Container> 

      <FooterM />
             

      </>

     
  );
}

export default NavbarM1;
