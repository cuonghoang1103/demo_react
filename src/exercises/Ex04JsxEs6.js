import { Badge, Nav, Navbar, Table } from 'react-bootstrap';
import { KhungBaiTap, KhoiLam, Ma, KetQua, Bay } from '../components/KhungBaiTap';
import { people, isTeen, numbers, companies, ages, courses } from '../data/lab';

/**
 * Exercise 4 — JSX & ES6 (lab method mảng).
 *
 * Mọi con số trong trang này đều TÍNH LÚC RENDER từ dữ liệu trong
 * `src/data/lab.js`. Không có kết quả nào gõ tay — sửa dữ liệu là kết quả đổi
 * theo, đúng tinh thần "dữ liệu → UI" mà bài tập đang dạy.
 */

/* ── Part A ─────────────────────────────────────────────────── */
const teenDauTien = people.find(isTeen);
const moiTeen = people.filter(isTeen);
const tatCaLaTeen = people.every(isTeen);
const coAiLaTeen = people.some(isTeen);

/* ── Part B ─────────────────────────────────────────────────── */
const tong = numbers.reduce((acc, n) => acc + n, 0);
const tich = numbers.reduce((acc, n) => acc * n, 1);

/* ── Part C ─────────────────────────────────────────────────── */
const sauNam1987 = companies.filter((c) => c.start > 1987);
const banLeCongMot = companies
  .filter((c) => c.category === 'Retail')
  .map((c) => ({ ...c, start: c.start + 1 }));
// Chép mảng TRƯỚC khi sort: sort() đổi tại chỗ, sort thẳng là sửa dữ liệu gốc.
const theoNamKetThuc = [...companies].sort((a, b) => a.end - b.end);
const tuoiGiamDan = [...ages].sort((a, b) => b - a);
// Đề bài yêu cầu in tên từng công ty — forEach không trả về gì, nó chỉ chạy.
companies.forEach((c) => console.log(c.name));

/* ── Part D · component NavBar tách riêng ───────────────────── */
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="rounded">
      <Navbar.Brand className="ps-3">FER202</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Trang chủ</Nav.Link>
        <Nav.Link href="#courses">Khoá học</Nav.Link>
        <Nav.Link href="#about">Giới thiệu</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default function Ex04JsxEs6() {
  return (
    <KhungBaiTap
      so={4}
      tieuDe="JSX & ES6 — lab method mảng"
      chuong="Chương 3"
      slot="Slot 2–3 · slide 35 & 41 (Lab 1)"
      mucTieu="Luyện đúng những method mảng ES6 mà React dùng để biến dữ liệu thành UI, rồi dựng giao diện bằng JSX."
      yeuCau={[
        'Part A — find / filter / every / some trên mảng people.',
        'Part B — reduce để tính tổng và tích của [1, 2, 3, 4].',
        'Part C — forEach / filter / map / spread / sort trên mảng companies.',
        'Part D — dựng navbar, khối chữ và danh sách khoá học bằng JSX.',
      ]}
    >
      {/* ── PART A ── */}
      <KhoiLam tieuDe="Part A · mảng people" phu="Teen = tuổi từ 10 đến 20">
        <Ma>{`const isTeen = p => p.age >= 10 && p.age <= 20;

people.find(isTeen);     // người teen ĐẦU TIÊN, hoặc undefined
people.filter(isTeen);   // MỌI người teen
people.every(isTeen);    // TẤT CẢ đều là teen?  → boolean
people.some(isTeen);     // CÓ ai là teen?       → boolean`}</Ma>

        <KetQua nhan="find — teen đầu tiên">
          <code>{teenDauTien ? `{ name: '${teenDauTien.name}', age: ${teenDauTien.age} }` : 'undefined'}</code>
          <div className="small text-muted">
            Dừng ngay ở phần tử khớp đầu tiên — Michael 9 tuổi không lọt vì dưới 10.
          </div>
        </KetQua>

        <KetQua nhan={`filter — tất cả teen (${moiTeen.length} người)`}>
          {moiTeen.map((p) => (
            <Badge bg="info" className="me-1" key={p.name}>
              {p.name} · {p.age}
            </Badge>
          ))}
        </KetQua>

        <KetQua nhan="every / some">
          <code>every(isTeen)</code> → <strong>{String(tatCaLaTeen)}</strong> (Jack 50 tuổi làm sai
          điều kiện) · <code>some(isTeen)</code> → <strong>{String(coAiLaTeen)}</strong>
        </KetQua>
      </KhoiLam>

      {/* ── PART B ── */}
      <KhoiLam tieuDe="Part B · reduce trên [1, 2, 3, 4]">
        <Ma>{`const array = [1, 2, 3, 4];
array.reduce((acc, n) => acc + n, 0);   // tổng — acc bắt đầu từ 0
array.reduce((acc, n) => acc * n, 1);   // tích — acc bắt đầu từ 1`}</Ma>
        <KetQua nhan="Kết quả">
          Tổng = <strong>{tong}</strong> · Tích = <strong>{tich}</strong>
          <div className="small text-muted">
            Giá trị khởi tạo (tham số thứ hai) không phải cho đẹp: tích mà khởi tạo bằng 0 thì kết
            quả luôn là 0.
          </div>
        </KetQua>
      </KhoiLam>

      {/* ── PART C ── */}
      <KhoiLam tieuDe="Part C · mảng companies">
        <Ma>{`companies.forEach(c => console.log(c.name));          // in tên từng công ty
companies.filter(c => c.start > 1987);                // thành lập sau 1987
companies
  .filter(c => c.category === 'Retail')
  .map(c => ({ ...c, start: c.start + 1 }));          // Retail, +1 năm bắt đầu
[...companies].sort((a, b) => a.end - b.end);         // theo năm kết thúc tăng dần
[...ages].sort((a, b) => b - a);                      // tuổi giảm dần`}</Ma>

        <KetQua nhan="forEach">
          Đã in {companies.length} tên ra Console của trình duyệt (F12 → Console). <code>forEach</code>{' '}
          trả về <code>undefined</code>, nên nó chỉ dùng để gây tác dụng phụ, không dùng để lấy dữ liệu.
        </KetQua>

        <KetQua nhan={`filter — thành lập sau 1987 (${sauNam1987.length}/${companies.length})`}>
          {sauNam1987.map((c) => (
            <Badge bg="secondary" className="me-1 mb-1" key={c.name}>
              {c.name} · {c.start}
            </Badge>
          ))}
        </KetQua>

        <KetQua nhan="filter + map + spread — Retail, start + 1, render bằng JSX">
          <div className="row row-cols-1 row-cols-md-3 g-2">
            {banLeCongMot.map((c) => (
              <div className="col" key={c.name}>
                <div className="border rounded p-2 h-100">
                  <p className="fw-semibold mb-1">{c.name}</p>
                  <p className="mb-1 small text-muted">{c.category}</p>
                  <p className="mb-0 small">
                    {c.start} → {c.end}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="small text-muted mt-2">
            <code>{'{ ...c, start: c.start + 1 }'}</code> tạo object MỚI — mảng gốc không bị sửa.
          </div>
        </KetQua>

        <KetQua nhan="sort — theo năm kết thúc tăng dần">
          <Table size="sm" bordered responsive className="mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Tên</th>
                <th>Ngành</th>
                <th>Bắt đầu</th>
                <th>Kết thúc</th>
              </tr>
            </thead>
            <tbody>
              {theoNamKetThuc.map((c, i) => (
                <tr key={c.name}>
                  <td>{i + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.category}</td>
                  <td>{c.start}</td>
                  <td className="fw-semibold">{c.end}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </KetQua>

        <KetQua nhan="sort — mảng tuổi giảm dần">
          <code>[{tuoiGiamDan.join(', ')}]</code>
        </KetQua>
      </KhoiLam>

      <Bay>
        <code>sort()</code> sắp xếp <strong>tại chỗ</strong>, và không truyền hàm so sánh thì nó so
        như <em>chuỗi</em> — <code>[10, 9, 2]</code> thành <code>[10, 2, 9]</code>. Luôn truyền{' '}
        <code>(a, b) =&gt; a - b</code> và chép mảng bằng <code>[...arr]</code> trước, vì sửa thẳng
        props/state là lỗi React kinh điển.
      </Bay>

      {/* ── PART D ── */}
      <KhoiLam tieuDe="Part D · dựng UI bằng JSX" phu="Navbar tách thành component riêng">
        <NavBar />

        <h5 className="mt-3">Khối chữ giới thiệu</h5>
        <p>
          FER202 dạy phát triển web phía client bằng React: từ nền tảng ES6, JSX, component và
          props, qua state và Hooks, React Router, tới gọi REST API và quản lý state toàn cục bằng
          Redux Toolkit. Môn học yêu cầu tiên quyết WED201c.
        </p>

        <h5 className="mt-3">Danh sách khoá học — render bằng .map() + key</h5>
        <Table striped bordered hover responsive size="sm" className="mb-2">
          <thead className="table-light">
            <tr>
              <th>Mã</th>
              <th>Tên môn</th>
              <th>Tín chỉ</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td><code>{c.id}</code></td>
                <td>{c.name}</td>
                <td>{c.credits}</td>
                <td className="text-muted">{c.slot}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Ma>{`{courses.map(c => (
  <tr key={c.id}>          {/* key BẮT BUỘC và phải ỔN ĐỊNH */}
    <td>{c.id}</td>
    <td>{c.name}</td>
  </tr>
))}`}</Ma>
        <p className="small text-muted mt-2 mb-0">
          Dùng mã môn làm <code>key</code> chứ không dùng chỉ số mảng: chỉ số đổi khi danh sách được
          sắp xếp hay chèn thêm, và React sẽ dựng lại nhầm hàng.
        </p>
      </KhoiLam>
    </KhungBaiTap>
  );
}
