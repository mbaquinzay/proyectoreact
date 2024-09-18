import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/FooterM.css'; // Archivo CSS para estilos personalizados del footer

function FooterM() {
  return (
    <footer className="bg-light text-dark mt-5 pt-4 pb-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Sobre Nosotros</h5>
            <p>
              Somos una tienda especializada en productos deportivos para hombres, mujeres y niños. Nuestra misión es proporcionar productos de alta calidad para mejorar tu rendimiento y estilo.
            </p>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Categorías</h5>
            <ul className="list-unstyled">
              <li><Link to="/hombres">Hombres</Link></li>
              <li><Link to="/mujeres">Mujeres</Link></li>
              <li><Link to="/ninos">Niños</Link></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Links Útiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Redes Sociales</h5>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i> Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i> Twitter
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} TiendaTech. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterM;

