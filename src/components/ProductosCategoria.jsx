function ProductosCategoria({ categoria, productos }) {
    return (
      <Container>
        <h2>Productos Destacados - {categoria}</h2>
        <div className="d-flex flex-wrap">
          {productos.map((producto) => (
            <Card key={producto.id} style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                  {producto.descripcion} <br />
                  Precio: ${producto.precio} <br />
                  Rating: {producto.rating} estrellas
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    );
  }
  