import { KhungBaiTap, KhoiLam, Ma, KetQua, Bay } from '../components/KhungBaiTap';

/** Ngưỡng breakpoint của Bootstrap 5, tính bằng px. */
const NGUONG = [
  ['xs', 0, 'Mặc định — điện thoại dọc'],
  ['sm', 576, 'Điện thoại ngang'],
  ['md', 768, 'Máy tính bảng'],
  ['lg', 992, 'Laptop'],
  ['xl', 1200, 'Màn hình lớn'],
  ['xxl', 1400, 'Màn hình rất lớn'],
];

/**
 * Exercise 6 — Dựng layout responsive chỉ bằng lưới Bootstrap.
 */
export default function Ex06Grid() {
  return (
    <KhungBaiTap
      so={6}
      tieuDe="Dựng layout bằng lưới Bootstrap"
      chuong="Chương 4"
      slot="Slot 4–5 · slide 31"
      mucTieu="Tái tạo một layout trang chỉ với .container, .row, .col-* và các breakpoint."
      yeuCau={[
        'Header chiếm trọn chiều ngang.',
        'Main / Sidebar chia 8/4 từ md trở lên, xếp chồng ở màn hình nhỏ.',
        'Một hàng 3 card: 1 cột ở điện thoại, 3 cột từ md.',
        'Footer chiếm trọn chiều ngang.',
      ]}
    >
      <KhoiLam tieuDe="Bộ khung">
        <Ma>{`<div className="container">
  <div className="row">
    <header className="col-12">Header</header>
  </div>
  <div className="row">
    <main  className="col-12 col-md-8">Nội dung chính</main>
    <aside className="col-12 col-md-4">Sidebar</aside>
  </div>
  <div className="row row-cols-1 row-cols-md-3 g-3">
    <div className="col">Card 1</div>
    <div className="col">Card 2</div>
    <div className="col">Card 3</div>
  </div>
  <div className="row"><footer className="col-12">Footer</footer></div>
</div>`}</Ma>
      </KhoiLam>

      <KhoiLam tieuDe="Bài làm — layout chạy thật">
        <div className="container border rounded p-2 bg-body-tertiary">
          <div className="row g-2 mb-2">
            <header className="col-12">
              <div className="bg-primary text-white rounded p-3 text-center">
                Header · <code className="text-white">col-12</code>
              </div>
            </header>
          </div>

          <div className="row g-2 mb-2">
            <main className="col-12 col-md-8">
              <div className="bg-white border rounded p-3 h-100">
                <h5>Nội dung chính</h5>
                <code>col-12 col-md-8</code>
                <p className="mb-0 mt-2 small text-muted">
                  Mobile-first: viết <code>col-12</code> trước cho mọi màn hình, rồi{' '}
                  <code>col-md-8</code> ghi đè từ 768px trở lên.
                </p>
              </div>
            </main>
            <aside className="col-12 col-md-4">
              <div className="bg-white border rounded p-3 h-100">
                <h6>Sidebar</h6>
                <code>col-12 col-md-4</code>
                <p className="mb-0 mt-2 small text-muted">8 + 4 = 12, vừa đúng một hàng.</p>
              </div>
            </aside>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-2 mb-2">
            {[1, 2, 3].map((n) => (
              <div className="col" key={n}>
                <div className="bg-white border rounded p-3 text-center h-100">Card {n}</div>
              </div>
            ))}
          </div>

          <div className="row g-2">
            <footer className="col-12">
              <div className="bg-dark text-white rounded p-3 text-center">
                Footer · <code className="text-white">col-12</code>
              </div>
            </footer>
          </div>
        </div>
      </KhoiLam>

      <KhoiLam tieuDe="Bảng breakpoint của Bootstrap 5" phu="Kéo hẹp cửa sổ để thấy layout ở trên đổi theo">
        <div className="d-flex flex-wrap gap-1 mb-2">
          {NGUONG.map(([k, min, y]) => (
            <span className="badge bg-light text-dark border" key={k} title={y}>
              {k} ≥ {min}px
            </span>
          ))}
        </div>
        <KetQua nhan="Cách đọc">
          <code>col-md-8</code> nghĩa là "từ 768px trở lên thì chiếm 8/12 cột". Dưới 768px lớp đó
          chưa có hiệu lực, nên <code>col-12</code> viết trước sẽ ăn: mọi khối xếp thành một cột.
        </KetQua>
      </KhoiLam>

      <Bay>
        Luôn bắt đầu mobile-first: <code>col-12</code> trước, rồi mới thêm <code>col-md-*</code>.
        Viết ngược lại (chỉ có <code>col-md-8</code>) thì ở màn hình nhỏ cột rơi về mặc định và
        layout vỡ đúng chỗ khó thấy nhất — trên điện thoại.
      </Bay>
    </KhungBaiTap>
  );
}
