

import React from 'react'


//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

/*import { Navbar, Nav, Container } from 'react-bootstrap';*/
import { Link } from 'react-router-dom';
import logo from '../img/mbtienda.png';

import '../components/NavbarM.css'//'./Navbar.css'; // Archivo CSS para estilos personalizados
import imghombre from '../img/imghombre.JPG'; // Asegúrate de que la ruta sea correcta

//REALIZADO POR MANUEL BAQUINZAY 

function NavbarM() {
  /*
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TIENDATECH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hombre</Nav.Link>
            <Nav.Link href="#link">Mujer</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>


            <NavDropdown title="Hombre" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  */

  //segundo comentadooo
  return (
    
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo} // Reemplaza con la ruta correcta de tu logo
            height="100"
            className="d-inline-block align-top"
            alt="TIENDATECH Logo"
            
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
        {/*     <Nav.Link href="/Hombres">Hombre</Nav.Link> */}



            <NavDropdown title="Hombre" id="hombre-nav-dropdown">
                  <div className="dropdown-menu-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Zapatillas</th>
                          <th>Ropa</th>
                          <th>Accesorios</th>
                          <th></th> {/* Columna vacía para la imagen */}

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
                          </td> {/* Imagen del hombre */}


                        </tr>
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




            
            <Nav.Link href="/mujer">Mujer</Nav.Link>
            <Nav.Link href="/sobrenosotros">Niños</Nav.Link>

            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cart">
              <i className="bi bi-cart"></i> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
  

  /*
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="app-mrb/public/logo512.png" // Reemplaza con la ruta correcta de tu logo
            height="40"
            className="d-inline-block align-top"
            alt="TIENDATECH Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/about">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/shop">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <i className="bi bi-cart"></i> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );  
  */

}

export default NavbarM;

