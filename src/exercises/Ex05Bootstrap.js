import { KhungBaiTap, KhoiLam, Ma, KetQua, Bay } from '../components/KhungBaiTap';

/**
 * Exercise 5 — Đưa Bootstrap vào dự án và XÁC NHẬN nó chạy.
 *
 * Cách kiểm đúng như slide: đặt một nút `.btn .btn-primary` — ra nút xanh
 * nghĩa là CSS Bootstrap đã nạp và class có tác dụng.
 */
export default function Ex05Bootstrap() {
  return (
    <KhungBaiTap
      so={5}
      tieuDe="Bắt đầu với Bootstrap"
      chuong="Chương 4"
      slot="Slot 4–5 · slide 14"
      mucTieu="Thêm Bootstrap 5 vào dự án React và xác nhận các class của nó thật sự có tác dụng."
      yeuCau={[
        'Cài bằng npm install bootstrap (Bootstrap 5 không cần jQuery).',
        'Trong app React: import CSS (và bundle JS) ở src/index.js.',
        'Kiểm bằng một nút .btn .btn-primary — phải ra nút xanh.',
      ]}
    >
      <KhoiLam tieuDe="1 · Cài">
        <Ma>{`npm install bootstrap
# Bootstrap 5 đã bỏ jQuery; bundle JS kèm sẵn Popper (cần cho dropdown, tooltip, modal).`}</Ma>
      </KhoiLam>

      <KhoiLam tieuDe="2 · Nạp vào app React" phu="src/index.js — đúng hai dòng">
        <Ma>{`import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';`}</Ma>
        <p className="small text-muted mt-2 mb-0">
          Trang HTML thuần thì thay bằng thẻ <code>&lt;link&gt;</code> trong <code>&lt;head&gt;</code>{' '}
          và <code>&lt;script&gt;</code> bundle trước <code>&lt;/body&gt;</code>, kèm meta{' '}
          <code>viewport</code>. Project React này dùng cách import vì webpack lo phần còn lại.
        </p>
      </KhoiLam>

      <KhoiLam tieuDe="3 · Kiểm" phu="Nút dưới đây là phép thử, không phải trang trí">
        <button className="btn btn-primary" type="button">
          Test
        </button>

        <KetQua nhan="Cách đọc kết quả">
          Nút hiện ra <strong>màu xanh, bo góc, có khoảng đệm</strong> → CSS Bootstrap đã nạp và
          class <code>.btn-primary</code> có tác dụng. Nếu nó trông như một nút xám mặc định của
          trình duyệt thì dòng <code>import</code> ở <code>src/index.js</code> bị thiếu hoặc sai
          đường dẫn.
        </KetQua>
      </KhoiLam>

      <Bay>
        Trong JSX phải viết <code>className</code>, không phải <code>class</code> — vì{' '}
        <code>class</code> là từ khoá của JavaScript. Và nhớ thẻ meta <code>viewport</code>: thiếu
        nó thì lưới không responsive trên điện thoại dù class vẫn đúng. CRA đã đặt sẵn meta này
        trong <code>public/index.html</code>.
      </Bay>
    </KhungBaiTap>
  );
}
