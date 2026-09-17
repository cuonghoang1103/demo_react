import { useState } from 'react';
import { Badge, Button, Card, Col, Container, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import { KhungBaiTap, KhoiLam, Ma, KetQua, Bay } from '../components/KhungBaiTap';
import { products, dinhDangTien } from '../data/lab';

/**
 * Exercise 10 — Demo React-Bootstrap: Navbar + lưới Card + Modal điều khiển
 * bằng state.
 *
 * Điểm của bài: cùng một giao diện Bootstrap, nhưng việc mở/đóng modal KHÔNG
 * còn do thuộc tính `data-bs-*` và JS của Bootstrap lo, mà do một biến state
 * React. Đó là khác biệt duy nhất đáng nhớ giữa hai cách dùng.
 */
export default function Ex10ReactBootstrap() {
  const [dangXem, setDangXem] = useState(null); // null = modal đang đóng
  const [gio, setGio] = useState([]);

  const themVaoGio = (p) => setGio((cu) => [...cu, p.id]);

  return (
    <KhungBaiTap
      so={10}
      tieuDe="Demo React-Bootstrap"
      chuong="Chương 4"
      slot="Slot 7 · slide 23"
      mucTieu="Dùng các component React-Bootstrap cùng nhau: navbar, hàng card responsive, và modal mở từ nút."
      yeuCau={[
        'Navbar có brand và menu.',
        'Row xs={1} md={3} chứa các Card sản phẩm.',
        'Modal hiện chi tiết, đóng/mở bằng state React.',
        'Dùng component (<Card>, <Button>) thay cho class thuần.',
      ]}
    >
      <KhoiLam tieuDe="Mẫu trong đề">
        <Ma>{`import { Navbar, Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const [show, setShow] = useState(false);

<Row xs={1} md={3} className="g-3">
  {products.map(p => (
    <Col key={p.id}>
      <Card><Card.Body>
        <Card.Title>{p.name}</Card.Title>
        <Button onClick={() => setShow(true)}>Chi tiết</Button>
      </Card.Body></Card>
    </Col>
  ))}
</Row>

<Modal show={show} onHide={() => setShow(false)}>...</Modal>`}</Ma>
      </KhoiLam>

      <KhoiLam tieuDe="Bài làm — một app nhỏ chạy được">
        <Navbar bg="dark" variant="dark" expand="sm" className="rounded">
          <Container fluid>
            <Navbar.Brand>🛒 My Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#sp">Sản phẩm</Nav.Link>
              <Nav.Link href="#lh">Liên hệ</Nav.Link>
            </Nav>
            <Navbar.Text className="text-white">
              Giỏ hàng <Badge bg="light" text="dark">{gio.length}</Badge>
            </Navbar.Text>
          </Container>
        </Navbar>

        <Container fluid className="mt-3 px-0">
          <Row xs={1} md={3} className="g-3">
            {products.map((p) => (
              <Col key={p.id}>
                <Card className="h-100">
                  <Card.Img variant="top" src={p.img} alt={p.name} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="h6">{p.name}</Card.Title>
                    <Card.Text className="text-primary fw-bold mb-1">
                      {dinhDangTien(p.price)}
                    </Card.Text>
                    <Card.Text className="small text-muted">
                      {p.stock > 0 ? `Còn ${p.stock} sản phẩm` : 'Tạm hết hàng'}
                    </Card.Text>
                    <div className="mt-auto d-flex gap-2">
                      <Button size="sm" onClick={() => setDangXem(p)}>
                        Chi tiết
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-success"
                        disabled={p.stock === 0}
                        onClick={() => themVaoGio(p)}
                      >
                        Thêm vào giỏ
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>

        {/* `show` là một biểu thức React, không phải thuộc tính data-bs-* nào cả. */}
        <Modal show={dangXem !== null} onHide={() => setDangXem(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title className="h5">{dangXem?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {dangXem && (
              <>
                <img
                  src={dangXem.img}
                  alt={dangXem.name}
                  className="img-fluid rounded mb-3"
                />
                <p>{dangXem.desc}</p>
                <p className="mb-0">
                  Giá: <strong className="text-primary">{dinhDangTien(dangXem.price)}</strong> · Kho:{' '}
                  <strong>{dangXem.stock}</strong>
                </p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDangXem(null)}>
              Đóng
            </Button>
            <Button
              disabled={!dangXem || dangXem.stock === 0}
              onClick={() => {
                themVaoGio(dangXem);
                setDangXem(null);
              }}
            >
              Thêm vào giỏ
            </Button>
          </Modal.Footer>
        </Modal>

        <KetQua nhan="State đang điều khiển giao diện">
          <code>
            {JSON.stringify({ modalDangMo: dangXem ? dangXem.name : null, soMonTrongGio: gio.length })}
          </code>
          <div className="small text-muted mt-1">
            Modal hiện hay ẩn là do biến state <code>dangXem</code> quyết định — không có dòng nào
            đi sửa DOM trực tiếp. Đó chính là điểm hơn của React-Bootstrap so với Bootstrap thuần.
          </div>
        </KetQua>
      </KhoiLam>

      <Bay>
        Đừng trộn hai lối. Component React-Bootstrap KHÔNG cần{' '}
        <code>data-bs-toggle</code> / <code>data-bs-target</code> — gắn thêm vào thì hai cơ chế cùng
        điều khiển một modal và nó nhấp nháy hoặc kẹt mở. Chọn một: hoặc class Bootstrap thuần (bài
        7), hoặc component React-Bootstrap (bài này).
      </Bay>
    </KhungBaiTap>
  );
}
