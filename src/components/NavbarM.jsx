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


function NavbarM() {




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

              {/* NAVBAR PARA SECCION DE HOMBRES */}
              <NavDropdown title="Hombre" id="hombre-nav-dropdown">
                <div className="dropdown-menu-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Zapatillas</th>
                        <th>Ropa</th>
                        <th>Accesorios</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><NavDropdown.Item href="/hombres/zapatillas/running-training">Running + Training</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="/hombres/ropa/camperas">Camperas</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="/hombres/accesorios/bolsos">Bolsos</NavDropdown.Item></td>
                        <td rowSpan="5">
                          <img
                            src={imghombre}
                            alt="Hombre"
                            style={{ width: '150px', height: 'auto' }}
                          />
                        </td>
                      </tr>
                      {/* Otras filas omitidas por brevedad */}

                      <tr>
                          <td><NavDropdown.Item href="/hombres/zapatillas/outdoor">Outdoor</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/ropa/buzos">Buzos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/mochilas">Mochilas</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/hombres/zapatillas/botines">Botines</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/ropa/chalecos">Chalecos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/botineros">Botineros</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/hombres/zapatillas/tenis">Tenis</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/ropa/remeras">Remeras</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/medias">Medias</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/hombres/zapatillas/basketball">Basketball</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/ropa/bermudas-shorts">Bermudas y Shorts</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/gorras">Gorras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/hombres/zapatillas/inspiracion-deportiva">Inspiración Deportiva</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/ropa/shorts-bano">Shorts De Baño</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/muñequeras">Muñequeras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/hombres/zapatillas/sandalias">Sandalias</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/ropa/pantalones">Pantalones</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/riñoneras">Riñoneras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><NavDropdown.Item href="/hombres/ropa/conjuntos">Conjuntos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/mat-yoga">Mat Yoga</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/infladores">Infladores</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td><NavDropdown.Item href="/hombres/accesorios/pelotas">Pelotas</NavDropdown.Item></td>
                        </tr>



                    </tbody>
                  </table>
                </div>
              </NavDropdown>

              {/* NAVBAR PARA SECCION DE MUJERES */}
              <NavDropdown title="Mujer" id="mujer-nav-dropdown">
                <div className="dropdown-menu-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Zapatillas</th>
                        <th>Ropa</th>
                        <th>Accesorios</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><NavDropdown.Item href="/mujeres/zapatillas/running-training">Running + Training</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="/mujeres/ropa/camperas">Camperas</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="/mujeres/accesorios/bolsos">Bolsos</NavDropdown.Item></td>
                        <td rowSpan="5">
                          <img
                            src={imgmujer}
                            alt="Mujer"
                            style={{ width: '150px', height: 'auto' }}
                          />
                        </td>
                      </tr>
                      {/* Otras filas omitidas por brevedad */}

                      <tr>
                          <td><NavDropdown.Item href="/mujeres/zapatillas/outdoor">Outdoor</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/ropa/buzos">Buzos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/mochilas">Mochilas</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/mujeres/zapatillas/botines">Botines</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/ropa/chalecos">Chalecos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/botineros">Botineros</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/mujeres/zapatillas/tenis">Tenis</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/ropa/remeras">Remeras</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/medias">Medias</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/mujeres/zapatillas/basketball">Basketball</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/ropa/bermudas-shorts">Bermudas y Shorts</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/gorras">Gorras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/mujeres/zapatillas/inspiracion-deportiva">Inspiración Deportiva</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/ropa/shorts-bano">Shorts De Baño</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/muñequeras">Muñequeras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/mujeres/zapatillas/sandalias">Sandalias</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/ropa/pantalones">Pantalones</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/riñoneras">Riñoneras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><NavDropdown.Item href="/mujeres/ropa/conjuntos">Conjuntos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/mat-yoga">Mat Yoga</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/infladores">Infladores</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td><NavDropdown.Item href="/mujeres/accesorios/pelotas">Pelotas</NavDropdown.Item></td>
                        </tr>



                    </tbody>
                  </table>
                </div>
              </NavDropdown>

              {/* NAVBAR PARA SECCION DE NIÑOS */}
              <NavDropdown title="Niños" id="ninos-nav-dropdown">
                <div className="dropdown-menu-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Zapatillas</th>
                        <th>Ropa</th>
                        <th>Accesorios</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><NavDropdown.Item href="/ninos/zapatillas/running-training">Running + Training</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="/ninos/ropa/camperas">Camperas</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="/ninos/accesorios/bolsos">Bolsos</NavDropdown.Item></td>
                        <td rowSpan="5">
                          <img
                            src={imgniño}
                            alt="Niños"
                            style={{ width: '150px', height: 'auto' }}
                          />
                        </td>
                      </tr>
                      {/* Otras filas omitidas por brevedad */}


                      <tr>
                          <td><NavDropdown.Item href="/ninos/zapatillas/outdoor">Outdoor</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/ropa/buzos">Buzos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/mochilas">Mochilas</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/ninos/zapatillas/botines">Botines</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/ropa/chalecos">Chalecos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/botineros">Botineros</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/ninos/zapatillas/tenis">Tenis</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/ropa/remeras">Remeras</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/medias">Medias</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/ninos/zapatillas/basketball">Basketball</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/ropa/bermudas-shorts">Bermudas y Shorts</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/gorras">Gorras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/ninos/zapatillas/inspiracion-deportiva">Inspiración Deportiva</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/ropa/shorts-bano">Shorts De Baño</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/muñequeras">Muñequeras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td><NavDropdown.Item href="/ninos/zapatillas/sandalias">Sandalias</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/ropa/pantalones">Pantalones</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/riñoneras">Riñoneras</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><NavDropdown.Item href="/ninos/ropa/conjuntos">Conjuntos</NavDropdown.Item></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/mat-yoga">Mat Yoga</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/infladores">Infladores</NavDropdown.Item></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td><NavDropdown.Item href="/ninos/accesorios/pelotas">Pelotas</NavDropdown.Item></td>
                        </tr>

                    </tbody>
                  </table>
                </div>
              </NavDropdown>



{/* e */}



            {/* Nueva opción "Por Talle" */}
            <NavDropdown title="Por Talle" id="talle-nav-dropdown">
                          <div className="dropdown-menu-talles">
                            <div className="row">
                              <div className="col">
                                <h6>Hombre</h6>
                                <div className="talle-grid">
                                  <span>35</span><span>36</span><span>37</span><span>38</span>
                                  <span>39</span><span>40</span><span>41</span><span>42</span>
                                  <span>43</span><span>44</span><span>45</span><span>46</span>
                                </div>
                              </div>
                              <div className="col">
                                <h6>Mujer</h6>
                                <div className="talle-grid">
                                  <span>35</span><span>36</span><span>37</span><span>38</span>
                                  <span>39</span><span>40</span><span>41</span><span>42</span>
                                  <span>43</span><span>44</span><span>45</span><span>46</span>
                                </div>
                              </div>
                        
                              <div className="col">
                                <h6>Niños</h6>
                                <div className="talle-grid">
                                  <span>25</span><span>26</span><span>27</span><span>28</span>
                                  <span>29</span><span>30</span><span>31</span><span>32</span>
                                  <span>33</span><span>34</span><span>35</span>
                                </div>
                              </div>
                            </div>
                          </div>
            </NavDropdown>



            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cart">
              <i className="bi bi-cart"></i> Cart
            </Nav.Link>
{/* fin */}








            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CarouselComponent /> {/* Agrega el carrusel debajo del navbar */}




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

export default NavbarM;
