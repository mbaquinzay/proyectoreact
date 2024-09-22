/*
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/FooterM.css'; // Archivo CSS para estilos personalizados del footer

function FooterM() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase">Sobre Nosotros</h5>
            <p className="footer-text">
              Somos una tienda especializada en productos deportivos para hombres, mujeres y niños. Nuestra misión es proporcionar productos de alta calidad para mejorar tu rendimiento y estilo.
            </p>
          </Col>

          <Col md={2} className="mb-4">
            <h5 className="text-uppercase">Categorías</h5>
            <ul className="list-unstyled">
              <li><Link to="/hombres" className="text-light">Hombres</Link></li>
              <li><Link to="/mujeres" className="text-light">Mujeres</Link></li>
              <li><Link to="/ninos" className="text-light">Niños</Link></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h5 className="text-uppercase">Links Útiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-light">Contacto</Link></li>
              <li><Link to="/sobrenosotros" className="text-light">Sobre Nosotros</Link></li>
              <li><Link to="/faq" className="text-light">Preguntas Frecuentes</Link></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="text-uppercase">Síguenos</h5>
            <div className="d-flex justify-content-start social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} TiendaTech. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterM;
*/




import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/FooterM.css'; // Archivo CSS para estilos personalizados del footer

function FooterM() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase">Sobre Nosotros</h5>
            <p className="footer-text">
              Somos una tienda especializada en productos deportivos para hombres, mujeres y niños. Nuestra misión es proporcionar productos de alta calidad para mejorar tu rendimiento y estilo.
            </p>
          </Col>

          <Col md={2} className="mb-4">
            <h5 className="text-uppercase">Categorías</h5>
            <ul className="list-unstyled">
              <li><Link to="/hombres" className="text-light">Hombres</Link></li>
              <li><Link to="/mujeres" className="text-light">Mujeres</Link></li>
              <li><Link to="/ninos" className="text-light">Niños</Link></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h5 className="text-uppercase">Links Útiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-light">Contacto</Link></li>
              <li><Link to="/sobrenosotros" className="text-light">Sobre Nosotros</Link></li>
              <li><Link to="/faq" className="text-light">Preguntas Frecuentes</Link></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="text-uppercase">Síguenos</h5>
            <div className="d-flex justify-content-start social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="text-center">
            <h5 className="text-uppercase">Métodos de Pago</h5>
            <div className="payment-methods">
              <img src="/img/Pagos/visa.png" alt="Visa" className="payment-icon me-2" />
              <img src="/img/Pagos/mastercard.png" alt="MasterCard" className="payment-icon me-2" />
              <img src="/img/Pagos/mercado-pago.png" alt="Mercado Pago" className="payment-icon me-2" />
              <img src="/img/Pagos/cabal.png" alt="Cabal" className="payment-icon me-2" />
              <img src="/img/Pagos/naranaja.png" alt="Tarjeta Naranja" className="payment-icon me-2" />
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} TiendaTech. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterM;
