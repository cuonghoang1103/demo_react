import { useState } from 'react';
import { Badge, Col, Container, ListGroup, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';
import { BAI_TAP } from './exercises';

/**
 * FER202 · Lớp SE2059 — bài nộp 10 bài tập (Exercise 1 → 10).
 *
 * App chỉ là KHUNG: menu bên trái, nội dung một bài bên phải. Mỗi bài nằm
 * trong một file riêng ở `src/exercises/` để mở đúng file là đọc đúng bài.
 *
 * Điều hướng bằng `useState` — React Router tới Chương 9 mới học, nên ở đây
 * không dùng, đúng phạm vi đã học.
 */
export default function App() {
  const [dangMo, setDangMo] = useState('ex1');

  const bai = BAI_TAP.find((b) => b.ma === dangMo);
  const Comp = bai.Comp;

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand className="fw-bold">⚛️ FER202 — Bài tập 1 → 10</Navbar.Brand>
          <Navbar.Toggle aria-controls="thanh-tren" />
          <Navbar.Collapse id="thanh-tren">
            <Nav className="ms-auto align-items-lg-center">
              <Navbar.Text className="text-white-50 me-lg-3">
                Lớp SE2059 · Tuần 2/10 · Buổi 4
              </Navbar.Text>
              <Nav.Link
                href="https://cuongthai.com/courses/front-end-web-development-with-react/learn"
                target="_blank"
                rel="noreferrer"
              >
                Giáo trình
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="py-3">
        <Row className="g-3">
          <Col xs={12} lg={3} xl={2}>
            <ListGroup>
              {BAI_TAP.map((b) => (
                <ListGroup.Item
                  key={b.ma}
                  action
                  active={b.ma === dangMo}
                  onClick={() => setDangMo(b.ma)}
                  className="d-flex justify-content-between align-items-start gap-2"
                >
                  <span>
                    <span className="fw-semibold">
                      {b.so === null ? 'Bonus' : `Bài ${b.so}`}
                    </span>
                    <span className="d-block small">{b.ten}</span>
                  </span>
                  <Badge bg="secondary">{b.chuong.replace('Chương ', 'C')}</Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <p className="text-muted small mt-2 mb-0">
              Mã nguồn từng bài: <code>src/exercises/</code>
            </p>
          </Col>

          <Col xs={12} lg={9} xl={10}>
            {/* `key` để React dựng lại component khi đổi bài — không có nó thì
                state của bài trước (form đang gõ dở, counter) rớt sang bài sau. */}
            <Comp key={bai.ma} />
          </Col>
        </Row>
      </Container>

      <footer className="border-top mt-4 py-3">
        <Container fluid>
          <p className="text-muted small mb-0">
            FER202 — Front-End Web Development with React · Create React App · React 19 · Bootstrap
            5.3 + React-Bootstrap
          </p>
        </Container>
      </footer>
    </>
  );
}
