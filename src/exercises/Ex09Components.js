import { useState } from 'react';
import { KhungBaiTap, KhoiLam, Ma, KetQua, Bay } from '../components/KhungBaiTap';

/* ═══ Bài 1 · component giới thiệu bản thân ═══ */
function Profile({ ten, lop, moTa }) {
  return (
    <div className="d-flex align-items-center gap-3">
      <div
        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0"
        style={{ width: 56, height: 56, fontSize: 22 }}
      >
        {ten.charAt(0)}
      </div>
      <div>
        <h5 className="mb-0">{ten}</h5>
        <div className="text-muted small">{lop}</div>
        <p className="mb-0 mt-1">{moTa}</p>
      </div>
    </div>
  );
}

/* ═══ Bài 2 · Hello World ═══ */
function HelloWorld() {
  return <h4 className="mb-0">Hello, World!</h4>;
}

/* ═══ Bài 3 · Counter ═══ */
function Counter({ buoc = 1 }) {
  const [so, setSo] = useState(0);
  return (
    <div>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-danger" onClick={() => setSo((s) => s - buoc)}>
          − {buoc}
        </button>
        <span className="fs-3 fw-bold px-3" style={{ minWidth: 90, textAlign: 'center' }}>
          {so}
        </span>
        <button className="btn btn-outline-success" onClick={() => setSo((s) => s + buoc)}>
          + {buoc}
        </button>
        <button className="btn btn-link" onClick={() => setSo(0)}>
          Đặt lại
        </button>
      </div>
      <div className="form-text">
        Dùng <code>setSo(s =&gt; s + 1)</code> chứ không phải <code>setSo(so + 1)</code>: bấm nhanh
        hai lần thì bản sau đọc đúng giá trị mới nhất.
      </div>
    </div>
  );
}

/* ═══ Bài 4 · SimpleCard — dựng từ component LÁ rồi ghép lên ═══ */
function Title({ text }) {
  return <h5 className="mb-1">{text}</h5>;
}
function Description({ text }) {
  return <p className="mb-0 text-muted small">{text}</p>;
}
function Anh({ url, alt }) {
  return <img src={url} alt={alt} width={120} height={120} className="rounded me-3 object-fit-cover" />;
}
function SimpleCard({ item }) {
  return (
    <div className="card p-3 h-100">
      <div className="d-flex">
        <Anh url={item.imageUrl} alt={item.title} />
        <div>
          <Title text={item.title} />
          <Description text={item.description} />
        </div>
      </div>
    </div>
  );
}

const THE = [
  {
    id: 1,
    title: 'Học React ở FPT',
    description: 'Buổi 4 của tuần 2/10 — Bootstrap, lưới, card và form controls.',
    imageUrl: '/images/card1.svg',
  },
  {
    id: 2,
    title: 'Component là hàm',
    description: 'Nhận props, trả JSX. Không đổi props — đổi thì đó là state, không phải props.',
    imageUrl: '/images/card2.svg',
  },
];

/**
 * Exercise 9 — React Component 1: bốn bài nhỏ, tăng dần độ khó.
 */
export default function Ex09Components() {
  return (
    <KhungBaiTap
      so={9}
      tieuDe="React Component 1"
      chuong="Chương 5"
      slot="Slot 6 · slide 21"
      mucTieu="Luyện tạo và ghép component, truyền props. Làm theo thứ tự — mỗi bài khó hơn một bậc."
      yeuCau={[
        '1 · Component hiển thị tên và một lời giới thiệu ngắn.',
        '2 · Component render "Hello, World!".',
        '3 · Counter có nút tăng/giảm, dùng useState.',
        '4 · SimpleCard ghép từ Title / Description / Image.',
      ]}
    >
      <KhoiLam tieuDe="1 · Profile — component nhận props">
        <Profile
          ten="Hoàng Mạnh Cường"
          lop="SE2059 · FER202"
          moTa="Sinh viên năm 3, đang học React. Thích làm sản phẩm chạy được hơn là slide."
        />
        <Ma>{`function Profile({ ten, lop, moTa }) { ... }

<Profile ten="Hoàng Mạnh Cường" lop="SE2059 · FER202" moTa="..." />`}</Ma>
      </KhoiLam>

      <KhoiLam tieuDe="2 · Hello World — component nhỏ nhất có thể">
        <HelloWorld />
        <Ma>{`function HelloWorld() {
  return <h4>Hello, World!</h4>;
}`}</Ma>
        <p className="small text-muted mt-2 mb-0">
          Tên component BẮT BUỘC viết hoa chữ đầu. Viết <code>helloWorld</code> thì JSX hiểu là thẻ
          HTML tên <code>helloworld</code> và render ra rỗng, không báo lỗi.
        </p>
      </KhoiLam>

      <KhoiLam tieuDe="3 · Counter — component đầu tiên có state">
        <Counter buoc={1} />
        <hr />
        <Counter buoc={5} />
        <Ma>{`const [so, setSo] = useState(0);
<button onClick={() => setSo(s => s - buoc)}>−</button>
<button onClick={() => setSo(s => s + buoc)}>+</button>`}</Ma>
        <KetQua nhan="Hai Counter, hai state riêng">
          Cùng một component dựng hai lần thì mỗi bản giữ state của riêng nó — bấm cái trên không
          làm đổi cái dưới. Đây là điều khiến component tái dùng được.
        </KetQua>
      </KhoiLam>

      <KhoiLam tieuDe="4 · SimpleCard — ghép từ component lá" phu="Title · Description · Image">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {THE.map((item) => (
            <div className="col" key={item.id}>
              <SimpleCard item={item} />
            </div>
          ))}
        </div>
        <Ma>{`function Title({ text })       { return <h5>{text}</h5>; }
function Description({ text }) { return <p>{text}</p>; }
function Anh({ url })          { return <img src={url} width={120} alt="" />; }

function SimpleCard({ item }) {
  return (
    <div className="card p-3">
      <Anh url={item.imageUrl} />
      <Title text={item.title} />
      <Description text={item.description} />
    </div>
  );
}`}</Ma>
      </KhoiLam>

      <Bay>
        Kỹ thuật đề bài dạy: dựng từ <strong>lá</strong> (Title, Description, Image) rồi mới lên
        khối bọc (SimpleCard), và quyết định props của từng component TRƯỚC khi viết. Nghĩ theo
        chiều "props đi xuống" là kỹ năng cốt lõi mà bài này luyện.
      </Bay>
    </KhungBaiTap>
  );
}
