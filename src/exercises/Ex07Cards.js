import { useState } from 'react';
import { KhungBaiTap, KhoiLam, Ma, KetQua, Bay } from '../components/KhungBaiTap';
import { cardItems } from '../data/lab';

/**
 * Exercise 7 — Lưới card responsive bằng Bootstrap thuần (class, không phải
 * component React-Bootstrap — bài 10 mới dùng component).
 *
 * Có một công tắc bật/tắt `h-100` để nhìn thấy bằng mắt vì sao đề bài bắt
 * thêm class đó: tắt đi là các card cùng hàng cao lệch nhau ngay.
 */
export default function Ex07Cards() {
  const [caoBang, setCaoBang] = useState(true);

  return (
    <KhungBaiTap
      so={7}
      tieuDe="Cột thẻ (Cards)"
      chuong="Chương 4"
      slot="Slot 4–5 · slide 48"
      mucTieu="Hiển thị một danh sách item dưới dạng card Bootstrap dàn theo lưới responsive."
      yeuCau={[
        'Mỗi card gồm ảnh (card-img-top), tiêu đề, mô tả và một nút.',
        '1 card/hàng trên điện thoại, 3 card/hàng từ md trở lên.',
        'Các card cùng hàng phải cao bằng nhau.',
        'Mỗi phần tử map ra phải có key.',
      ]}
    >
      <KhoiLam tieuDe="Mã nguồn">
        <Ma>{`<div className="row row-cols-1 row-cols-md-3 g-4">
  {items.map(it => (
    <div className="col" key={it.id}>
      <div className="card h-100">
        <img src={it.img} className="card-img-top" alt={it.title} />
        <div className="card-body">
          <h5 className="card-title">{it.title}</h5>
          <p  className="card-text">{it.text}</p>
          <a className="btn btn-primary" href={it.href}>Xem</a>
        </div>
      </div>
    </div>
  ))}
</div>`}</Ma>
      </KhoiLam>

      <KhoiLam
        tieuDe={`Bài làm — ${cardItems.length} card`}
        phu="row-cols-1 row-cols-md-3 g-4"
      >
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="cong-tac-h100"
            checked={caoBang}
            onChange={(e) => setCaoBang(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="cong-tac-h100">
            Bật <code>h-100</code> trên <code>.card</code>{' '}
            <span className="text-muted small">— tắt thử để thấy card cao lệch nhau</span>
          </label>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cardItems.map((it) => (
            <div className="col" key={it.id}>
              <div className={`card ${caoBang ? 'h-100' : ''}`}>
                <img src={it.img} className="card-img-top" alt={it.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{it.title}</h5>
                  <p className="card-text">{it.text}</p>
                  <a
                    className="btn btn-primary mt-auto"
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Xem
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <KetQua nhan="Đang áp dụng">
          {caoBang
            ? 'card h-100 — mọi card trong cùng một hàng cao bằng nhau dù mô tả dài ngắn khác nhau.'
            : 'card (không h-100) — mỗi card chỉ cao bằng nội dung của nó, hàng trông so le.'}
        </KetQua>
      </KhoiLam>

      <Bay>
        Hai chỗ dễ trượt. <strong>(1)</strong> <code>h-100</code> phải đặt trên <code>.card</code>,
        không phải trên <code>.col</code> — cột vốn đã cao bằng nhau, cái lệch là card bên trong.{' '}
        <strong>(2)</strong> Nút nằm sát đáy nhờ <code>d-flex flex-column</code> trên{' '}
        <code>.card-body</code> cộng <code>mt-auto</code> trên nút; không có nó thì nút của các card
        vẫn lệch hàng dù card đã cao bằng nhau.
      </Bay>
    </KhungBaiTap>
  );
}
