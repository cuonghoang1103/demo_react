// Exercise 10 - Demo cac component cua React-Bootstrap

import { useState } from 'react';
import { Badge, Button, Card, Col, Container, Modal, Navbar, Row } from 'react-bootstrap';
import { products } from '../data/lab';

function Exercise10() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState(0);

  return (
    <div>
      <h3>Exercise 10 — Demo React-Bootstrap</h3>

      <Navbar bg="dark" variant="dark" className="rounded mt-3">
        <Container fluid>
          <Navbar.Brand>My Shop</Navbar.Brand>
          <Navbar.Text className="text-white">
            Giỏ hàng <Badge bg="light" text="dark">{cart}</Badge>
          </Navbar.Text>
        </Container>
      </Navbar>

      <Row xs={1} md={3} className="g-3 mt-1">
        {products.map((p) => (
          <Col key={p.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={p.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.price.toLocaleString('vi-VN')} đ</Card.Text>
                <div className="mt-auto d-flex gap-2">
                  <Button size="sm" onClick={() => setSelected(p)}>Chi tiết</Button>
                  <Button
                    size="sm"
                    variant="outline-success"
                    disabled={p.stock === 0}
                    onClick={() => setCart(cart + 1)}
                  >
                    Thêm vào giỏ
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* modal dong mo bang state chu khong dung data-bs-toggle */}
      <Modal show={selected !== null} onHide={() => setSelected(null)}>
        <Modal.Header closeButton>
          <Modal.Title>{selected && selected.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected && (
            <>
              <p>{selected.desc}</p>
              <p className="mb-0">Còn lại: {selected.stock}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelected(null)}>Đóng</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Exercise10;
