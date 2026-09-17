import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { KhungBaiTap, KhoiLam, Ma, KetQua, Bay } from '../components/KhungBaiTap';

const RONG = { hoTen: '', email: '', lop: '', gioiTinh: 'nam', dangKy: false, loiNhan: '' };

/** Kiểm tra từng trường, trả về object lỗi rỗng nếu hợp lệ. */
function kiemTra(f) {
  const loi = {};
  if (!f.hoTen.trim()) loi.hoTen = 'Chưa nhập họ tên.';
  if (!f.email.trim()) loi.email = 'Chưa nhập email.';
  // Kiểm tối thiểu: có @ và có dấu chấm sau @. Không đi xa hơn — regex email
  // "đầy đủ" dài hàng trăm ký tự và vẫn loại nhầm địa chỉ hợp lệ.
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) loi.email = 'Email không đúng định dạng.';
  if (!f.lop) loi.lop = 'Chưa chọn lớp.';
  return loi;
}

/**
 * Exercise 8 — Form controls Bootstrap + form controlled trong React.
 *
 * Mọi input đều là controlled: `value` lấy từ state, `onChange` cập nhật
 * state — đúng mẫu form chuẩn của React mà slide dạy.
 */
export default function Ex08Form() {
  const [form, setForm] = useState(RONG);
  const [daGui, setDaGui] = useState(null);

  const loi = kiemTra(form);
  const hopLe = Object.keys(loi).length === 0;

  /** Một handler cho mọi trường — phân biệt checkbox bằng chính type của ô. */
  const doi = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((cu) => ({ ...cu, [name]: type === 'checkbox' ? checked : value }));
  };

  const guiForm = (e) => {
    // Không có dòng này thì trình duyệt tải lại trang và mọi state biến mất.
    e.preventDefault();
    if (!hopLe) return;
    setDaGui(form);
  };

  return (
    <KhungBaiTap
      so={8}
      tieuDe="Form controls"
      chuong="Chương 4"
      slot="Slot 4–5 · slide 51"
      mucTieu="Tạo kiểu form bằng class Bootstrap và biến nó thành form controlled — giá trị input do state điều khiển."
      yeuCau={[
        'Dùng form-label, form-control, form-select, form-check của Bootstrap.',
        'Mỗi input là controlled: value lấy từ state, onChange cập nhật state.',
        'Kiểm tra dữ liệu và khoá nút Gửi khi chưa hợp lệ.',
        'Chặn reload mặc định khi submit.',
      ]}
    >
      <KhoiLam tieuDe="Mẫu trong đề">
        <Ma>{`function ContactForm() {
  const [email, setEmail] = React.useState('');
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control"
               value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <button className="btn btn-primary">Gửi</button>
    </form>
  );
}`}</Ma>
      </KhoiLam>

      <KhoiLam tieuDe="Bài làm — form đăng ký, controlled toàn bộ">
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <form onSubmit={guiForm} noValidate>
              <div className="mb-3">
                <label className="form-label" htmlFor="hoTen">Họ và tên</label>
                <input
                  id="hoTen"
                  name="hoTen"
                  type="text"
                  className={`form-control ${form.hoTen && loi.hoTen ? 'is-invalid' : ''}`}
                  value={form.hoTen}
                  onChange={doi}
                  placeholder="Nguyễn Văn A"
                />
                {form.hoTen && loi.hoTen && <div className="invalid-feedback">{loi.hoTen}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control ${form.email && loi.email ? 'is-invalid' : ''}`}
                  value={form.email}
                  onChange={doi}
                  placeholder="ten@fpt.edu.vn"
                />
                {form.email && loi.email && <div className="invalid-feedback">{loi.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="lop">Lớp</label>
                <select
                  id="lop"
                  name="lop"
                  className="form-select"
                  value={form.lop}
                  onChange={doi}
                >
                  <option value="">— Chọn lớp —</option>
                  <option value="SE2059">SE2059</option>
                  <option value="SE2060">SE2060</option>
                  <option value="SE2061">SE2061</option>
                </select>
              </div>

              <div className="mb-3">
                <span className="form-label d-block">Giới tính</span>
                {[
                  ['nam', 'Nam'],
                  ['nu', 'Nữ'],
                  ['khac', 'Khác'],
                ].map(([v, nhan]) => (
                  <div className="form-check form-check-inline" key={v}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gioiTinh"
                      id={`gt-${v}`}
                      value={v}
                      checked={form.gioiTinh === v}
                      onChange={doi}
                    />
                    <label className="form-check-label" htmlFor={`gt-${v}`}>{nhan}</label>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="loiNhan">Lời nhắn</label>
                <textarea
                  id="loiNhan"
                  name="loiNhan"
                  rows={3}
                  className="form-control"
                  value={form.loiNhan}
                  onChange={doi}
                  placeholder="Không bắt buộc"
                />
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="dangKy"
                  name="dangKy"
                  checked={form.dangKy}
                  onChange={doi}
                />
                <label className="form-check-label" htmlFor="dangKy">
                  Đăng ký nhận thông báo môn học
                </label>
              </div>

              <button className="btn btn-primary" type="submit" disabled={!hopLe}>
                Gửi
              </button>{' '}
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => {
                  setForm(RONG);
                  setDaGui(null);
                }}
              >
                Xoá form
              </button>
              {!hopLe && (
                <div className="form-text">
                  Nút Gửi mở khoá khi họ tên, email và lớp đều hợp lệ.
                </div>
              )}
            </form>
          </div>

          <div className="col-12 col-lg-5">
            <KetQua nhan="State của React ngay lúc này">
              <pre className="bg-light border rounded p-2 mb-0 small">
                {JSON.stringify(form, null, 2)}
              </pre>
              <div className="small text-muted mt-1">
                Gõ vào form bên trái — khối này đổi theo từng ký tự. Đó chính là nghĩa của
                "React là nguồn sự thật duy nhất".
              </div>
            </KetQua>

            {daGui && (
              <Alert variant="success" className="mt-3">
                <strong>Đã gửi:</strong>
                <pre className="mb-0 mt-2 small">{JSON.stringify(daGui, null, 2)}</pre>
              </Alert>
            )}
          </div>
        </div>
      </KhoiLam>

      <KhoiLam tieuDe="Controlled là gì">
        <p className="mb-2">
          Một input <strong>controlled</strong> lấy <code>value</code> từ state và có{' '}
          <code>onChange</code> cập nhật state — React là nguồn sự thật duy nhất. Ngược lại,
          input <strong>uncontrolled</strong> để DOM tự giữ giá trị, và React không biết người dùng
          đang gõ gì cho tới lúc đi đọc ô đó.
        </p>
        <Ma>{`// controlled — React biết ngay từng ký tự
<input value={email} onChange={e => setEmail(e.target.value)} />

// uncontrolled — DOM giữ, React không biết
<input />`}</Ma>
        <p className="small text-muted mt-2 mb-0">
          Đây là mẫu chuẩn của React; Chương 6 đi sâu hơn, và Slot 7 slide 13 nhắc lại.
        </p>
      </KhoiLam>

      <Bay>
        Đặt <code>value</code> mà quên <code>onChange</code> thì ô input thành chỉ-đọc: gõ không ăn
        và React in cảnh báo ra Console. Còn <code>e.preventDefault()</code> trong hàm submit là bắt
        buộc — thiếu nó trình duyệt tải lại trang theo hành vi mặc định của thẻ{' '}
        <code>&lt;form&gt;</code>, và toàn bộ state biến mất.
      </Bay>
    </KhungBaiTap>
  );
}
