# FER202 — Hướng dẫn học Bài 1 → 10

File này để **học**, không phải để nộp. Nó trả lời bốn câu:

1. Mỗi bài làm cái gì?
2. Bài đó dạy kiến thức gì — đầy đủ, kể cả cài môi trường và từng lệnh npm?
3. Làm như thế nào, từng bước?
4. Cần biết sẵn gì (HTML, CSS, JS) và học những thứ đó ở đâu, như thế nào?

> **Cách dùng hiệu quả nhất:** mở file này ở một nửa màn hình, mở
> `npm start` ở nửa kia. Đọc một mục → **tự gõ lại bằng tay** (đừng copy) →
> cố ý làm sai một chỗ để xem lỗi trông thế nào → sửa lại. Gõ tay và làm sai
> có chủ đích là hai việc giúp nhớ nhanh nhất; đọc suông thì tuần sau quên.

---

# PHẦN 0 — Cần biết sẵn những gì

React **không thay thế** HTML/CSS/JS. Nó là một thư viện JavaScript viết ra
HTML. Thiếu nền thì học React sẽ thành học thuộc lòng cú pháp.

## 0.1 · HTML — cần tới đâu

| Phải biết | Vì sao trong React |
|---|---|
| Thẻ cơ bản: `div, span, p, h1–h6, ul/li, table, img, a` | JSX viết y hệt các thẻ này |
| Thẻ form: `form, input, label, select, option, textarea, button` | Bài 8 làm nguyên một form |
| Thuộc tính: `id, class, src, href, alt, type, value, checked` | JSX đổi `class` → `className`, `for` → `htmlFor` |
| Cấu trúc trang: `<head>`, `<body>`, thẻ `meta viewport` | Bài 2 và bài 5 nói về `public/index.html` |
| Ngữ nghĩa: `header, main, aside, footer, nav` | Bài 6 dùng đúng các thẻ này thay vì `div` hết |

**Học ở đâu:** MDN (`developer.mozilla.org` → HTML → HTML elements reference).
Đọc mục nào cần mục đó, đừng đọc tuần tự từ đầu.
**Tự kiểm:** viết tay một trang HTML có header, 2 cột, footer và một form
liên hệ — không xem tài liệu. Làm được trong 15 phút là đủ nền.

## 0.2 · CSS — cần tới đâu

Môn này dùng **Bootstrap**, tức là dùng class có sẵn thay vì tự viết CSS.
Nhưng vẫn phải hiểu CSS để biết class đó đang làm gì:

| Phải biết | Ví dụ trong bài |
|---|---|
| Selector: theo thẻ, `.class`, `#id` | `.card`, `.btn-primary` |
| Box model: `margin`, `padding`, `border`, `width/height` | các class `m-3`, `p-2`, `g-4` của Bootstrap chính là nó |
| `display`: `block`, `inline`, `flex`, `grid` | `d-flex`, `flex-column` |
| Flexbox: `justify-content`, `align-items`, `gap` | xếp nút trong card (bài 7) |
| Độ ưu tiên (specificity) và thứ tự file CSS | **quan trọng** — xem 0.2b |
| Responsive & media query | breakpoint của Bootstrap là media query đóng gói sẵn |

### 0.2b · Một bài học rút từ chính project này

`src/App.css` ban đầu có:

```css
.card   { border: 1px solid #e0e0e0; border-radius: 12px; padding: 20px; }
button  { background: #4a90d9; color: #fff; }
```

Hai quy tắc đó **không giới hạn phạm vi**, nên chúng đè lên `.card` và mọi
`<button>` của Bootstrap ở TẤT CẢ các bài — card ở bài 7 mất viền chuẩn, nút ở
bài 10 mất màu. Cách chữa: khoanh vùng lại, đổi thành `.App .card` và
`.App button`, để nó chỉ ăn bên trong phần Bonus (xem `src/BonusEs6.css`).

**Bài học:** CSS toàn cục là tài nguyên chung. Đặt tên chung chung (`.card`,
`.title`, `button`) là sớm muộn cũng đụng thư viện hoặc đụng bài của chính
mình. Luôn hỏi "quy tắc này ăn tới đâu?" trước khi viết.

**Học ở đâu:** MDN CSS → "Learn CSS". Riêng Flexbox thì chơi hết
`flexboxfroggy.com` (24 màn, khoảng 30 phút) — nhanh hơn đọc lý thuyết nhiều.

## 0.3 · JavaScript — phần quan trọng nhất

Đây là chỗ sinh viên hay hụt. React **là** JavaScript.

### Cần chắc trước khi học React

```js
// 1. let / const — KHÔNG dùng var nữa
const a = 1;      // không gán lại được
let b = 2;        // gán lại được

// 2. Arrow function
const cong = (x, y) => x + y;          // return ngầm
const chao = (ten) => { return 'Hi ' + ten; };

// 3. Template literal — dấu ` chứ không phải '
const s = `Xin chào ${ten}, bạn ${tuoi} tuổi`;

// 4. Object & array literal, truy cập thuộc tính
const sv = { ten: 'An', tuoi: 20 };
sv.ten;  sv['ten'];

// 5. Destructuring — LẤY RA thành biến rời
const { ten, tuoi } = sv;              // object
const [dau, hai] = [10, 20];           // array

// 6. Spread (...) — SAO CHÉP rồi thêm/đè
const sv2 = { ...sv, tuoi: 21 };       // object mới, tuoi bị đè
const arr2 = [...arr, 4];              // mảng mới, thêm phần tử

// 7. Rest (...) — GOM lại
function tong(...cac) { return cac.reduce((a, b) => a + b, 0); }

// 8. Toán tử điều kiện
const nhan = diem >= 5 ? 'Đậu' : 'Rớt';        // ba ngôi
const ten2 = ten ?? 'Chưa đặt';                 // null/undefined thì lấy vế sau
const dai  = arr?.length;                       // arr null cũng không nổ
```

### Bảy method mảng — học thuộc bằng tay, không học vẹt

Đây là **xương sống** của React: dữ liệu → giao diện đều qua chúng.

| Method | Trả về | Dùng khi |
|---|---|---|
| `.map(f)` | **mảng mới** cùng độ dài | Biến mỗi phần tử thành một thẻ JSX |
| `.filter(f)` | **mảng mới** ngắn hơn | Lọc ra phần tử thoả điều kiện |
| `.find(f)` | **một phần tử** đầu tiên khớp, hoặc `undefined` | Tìm một cái |
| `.some(f)` | `true/false` | "Có ít nhất một cái nào…?" |
| `.every(f)` | `true/false` | "Tất cả đều…?" |
| `.reduce(f, khởiTạo)` | **một giá trị** | Tổng, tích, gom nhóm |
| `.sort(soSánh)` | **chính mảng đó**, đã đổi chỗ | Sắp xếp |
| `.forEach(f)` | `undefined` | Chỉ để chạy, KHÔNG lấy kết quả |

Ba điều rất dễ sai:

1. **`.forEach` không trả về gì.** `const x = arr.forEach(...)` → `x` là
   `undefined`. Muốn có mảng mới thì dùng `.map`.
2. **`.sort()` sửa thẳng mảng gốc** (in place). Trong React, sửa thẳng
   state/props là lỗi kinh điển. Luôn chép trước: `[...arr].sort(...)`.
3. **`.sort()` không tham số thì so như CHUỖI.** `[10, 9, 2].sort()` ra
   `[10, 2, 9]` vì `"10" < "2"`. Luôn truyền `(a, b) => a - b`.

**Học ở đâu:** `javascript.info` — chương "Array methods" là bản giải thích
tốt nhất bằng tiếng Anh dễ đọc. Bài 4 trong project này chính là bài luyện
đúng phần đó, có sẵn đáp án chạy được để đối chiếu.

**Tự kiểm:** cho mảng `[{name, age}]`, viết ra giấy (không mở máy) câu lệnh:
lấy người đầu tiên trên 18 tuổi · lấy tất cả người dưới 30 · kiểm tra có ai
trên 60 không · tính tổng tuổi · sắp xếp theo tuổi giảm dần mà không sửa mảng
gốc. Làm được 5/5 là đủ nền cho cả môn.

---

# PHẦN 1 — Môi trường, công cụ và từng lệnh

## 1.1 · Node.js là gì, npm là gì

- **JavaScript** vốn chỉ chạy trong trình duyệt.
- **Node.js** là môi trường cho JavaScript chạy **ngoài** trình duyệt — trên
  máy bạn, trong terminal. Nhờ nó mà công cụ dựng (build tool) viết bằng JS
  chạy được.
- **npm** (Node Package Manager) đi kèm Node. Nó làm hai việc: **tải thư
  viện** về và **chạy script**.

Hai bản Node trên trang chủ:
- **LTS** (Long-Term Support) — ổn định, được vá lỗi lâu dài. **Chọn bản này.**
- **Current** — mới nhất, đổi API thường xuyên. Không hợp để học.

## 1.2 · Các lệnh npm phải thuộc

```bash
# ── Xem phiên bản ─────────────────────────────────────────────
node -v          # ví dụ: v22.21.0
npm -v           # ví dụ: 10.9.4

# ── Cài thư viện ──────────────────────────────────────────────
npm install                 # cài ĐÚNG những gì package.json khai
npm install bootstrap       # thêm 1 thư viện vào dependencies
npm install -D eslint       # thêm vào devDependencies (chỉ dùng lúc code)
npm install -g serve        # cài TOÀN CỤC, dùng được ở mọi thư mục
npm uninstall bootstrap     # gỡ ra
npm ci                      # cài từ package-lock, sạch và nhanh (dùng trên CI)

# ── Chạy script khai trong package.json ───────────────────────
npm start                   # = npm run start
npm test                    # = npm run test
npm run build               # phải có "run" vì build không phải tên rút gọn
npm run                     # liệt kê mọi script có sẵn

# ── Chạy công cụ mà KHÔNG cài vào máy ─────────────────────────
npx create-react-app my-app # tải, chạy một lần, rồi bỏ
```

**`npm install` khác `npx` chỗ nào?**
`npm install` *cài* thư viện vào dự án để mã của bạn `import`.
`npx` *chạy* một công cụ dòng lệnh một lần rồi thôi — máy không đọng lại bản
`create-react-app` cũ kỹ. Đây là lý do đề bài viết `npx create-react-app`
chứ không phải `npm i -g create-react-app`.

## 1.3 · Ba file/thư mục quyết định mọi thứ

| Tên | Là gì | Có commit lên Git không? |
|---|---|---|
| `package.json` | Bản khai: tên dự án, thư viện cần, các script | **CÓ** |
| `package-lock.json` | Khoá phiên bản CHÍNH XÁC của từng thư viện con | **CÓ** |
| `node_modules/` | Mã thật của mọi thư viện, hàng chục nghìn file | **KHÔNG** |

`node_modules` không commit vì nó dựng lại được từ hai file kia bằng
`npm install`. Commit nó vào là repo phình lên hàng trăm MB. Đây là lý do
`.gitignore` phải có `node_modules/` **trước** lần `git add` đầu tiên.

Đọc `package.json` của project này:

```jsonc
{
  "dependencies": {
    "react": "^19.2.8",            // ^ nghĩa là: nhận bản vá và bản minor mới
    "react-dom": "^19.2.8",        // react-dom lo việc vẽ ra DOM trình duyệt
    "bootstrap": "^5.3.8",         // CSS + JS của Bootstrap
    "react-bootstrap": "^2.10.10", // Bootstrap viết lại thành component React
    "react-scripts": "5.0.1"       // bộ công cụ của Create React App
  },
  "scripts": {
    "start": "react-scripts start", // dev server, có hot-reload
    "build": "react-scripts build", // sinh bản tĩnh trong build/
    "test":  "react-scripts test",  // chạy test
    "eject": "react-scripts eject"  // ⛔ MỘT CHIỀU, đừng bấm cho biết
  }
}
```

## 1.4 · `npm start` và `npm run build` khác nhau ra sao

| | `npm start` | `npm run build` |
|---|---|---|
| Kết quả | Một server chạy ở `localhost:3000` | Thư mục `build/` chứa HTML/CSS/JS tĩnh |
| Tốc độ | Dựng lại ngay khi lưu file (hot-reload) | Chậm hơn, chỉ chạy một lần |
| Mã | Đầy đủ, dễ đọc, có cảnh báo | Rút gọn (minify), bỏ cảnh báo, nhẹ hơn nhiều |
| Dùng khi | Đang code | Đem đi nộp / đưa lên hosting |

Dừng dev server bằng `Ctrl + C` trong terminal.

## 1.5 · VS Code — cấu hình tối thiểu

Tiện ích nên cài: **ES7+ React snippets** (gõ `rafce` ra sẵn khung component),
**Prettier** (tự canh lề khi lưu), **ESLint** (gạch đỏ lỗi ngay khi gõ),
**Auto Rename Tag**. Bật `Format On Save` trong Settings.

---

# PHẦN 2 — Kiến thức React cốt lõi dùng xuyên suốt 10 bài

Bảy khái niệm dưới đây chiếm khoảng 90% những gì bài 1→10 cần.

## 2.1 · JSX — viết HTML bên trong JavaScript

```jsx
const ten = 'An';
const el = <h1 className="tieu-de">Xin chào {ten}</h1>;
```

Sáu luật phải nhớ:

1. **`className`, không phải `class`** — vì `class` là từ khoá của JS.
   Tương tự `htmlFor` thay cho `for`.
2. **Chỉ được trả về MỘT thẻ gốc.** Cần nhiều thẻ ngang hàng thì bọc trong
   `<div>` hoặc **Fragment** `<>...</>` (Fragment không tạo thẻ thật).
3. **`{ }` để nhúng biểu thức JS** — biểu thức, không phải câu lệnh. Viết
   `{ten}`, `{a + b}`, `{arr.map(...)}` được; viết `{if (x) ...}` thì không.
4. **Thẻ rỗng phải tự đóng:** `<img />`, `<br />`, `<input />`.
5. **Component tự viết phải VIẾT HOA chữ đầu.** `<Profile />` là component;
   `<profile />` bị hiểu là thẻ HTML lạ và render ra rỗng — *không báo lỗi*.
6. **Chú thích trong JSX** viết là `{/* ... */}`.

## 2.2 · Component — một hàm trả về JSX

```jsx
function LoiChao({ ten }) {          // props vào bằng tham số
  return <p>Chào {ten}!</p>;
}

<LoiChao ten="An" />                  // dùng như một thẻ
```

- Component là **hàm**. Nhận dữ liệu (props), trả về giao diện (JSX).
- Tách component khi: nó lặp lại, hoặc nó dài quá đọc mệt, hoặc nó có một
  nhiệm vụ rõ ràng đặt tên được.
- **Kỹ thuật đề bài dạy (bài 9): dựng từ LÁ lên.** Viết `Title`,
  `Description`, `Image` trước, rồi mới ghép thành `SimpleCard`. Quyết định
  props của từng cái TRƯỚC khi viết thân hàm.

## 2.3 · Props — dữ liệu truyền từ cha xuống con

```jsx
function Card({ tieuDe, moTa, gia = 0 }) {   // destructuring + giá trị mặc định
  return <div>{tieuDe} — {gia}đ</div>;
}
```

- Props đi **một chiều**: cha → con. Con **không được sửa** props của mình.
- Truyền số/biểu thức thì dùng ngoặc nhọn: `<Counter buoc={5} />`;
  truyền chuỗi thì dùng nháy: `<Card tieuDe="Bàn phím" />`.
- `props.children` là phần nằm GIỮA thẻ mở và thẻ đóng:
  `<Khung>nội dung này</Khung>`.

## 2.4 · State — dữ liệu component tự giữ và thay đổi được

```jsx
import { useState } from 'react';

function Counter() {
  const [so, setSo] = useState(0);        // [giá trị, hàm đổi giá trị]
  return <button onClick={() => setSo(so + 1)}>{so}</button>;
}
```

Bốn luật:

1. **Không gán thẳng.** `so = so + 1` không làm gì cả. Phải gọi `setSo(...)`
   thì React mới vẽ lại.
2. **Dùng dạng hàm khi giá trị mới phụ thuộc giá trị cũ:**
   `setSo(s => s + 1)`. Bấm nhanh hai lần, dạng hàm mới đọc đúng giá trị mới
   nhất; `setSo(so + 1)` có thể mất một nhịp.
3. **Hook chỉ được gọi ở đầu component**, không đặt trong `if`, trong vòng
   lặp, hay trong hàm con.
4. **Mỗi lần dùng component là một state riêng.** Đặt hai `<Counter />` cạnh
   nhau thì bấm cái này không ảnh hưởng cái kia — bài 9 cho thấy tận mắt.

**Props hay State?** Dữ liệu do người khác đưa vào → props. Dữ liệu component
tự thay đổi theo thao tác người dùng → state.

## 2.5 · Render danh sách bằng `.map()` và `key`

```jsx
{courses.map(c => (
  <tr key={c.id}>
    <td>{c.name}</td>
  </tr>
))}
```

- `key` **bắt buộc** cho mỗi phần tử sinh ra từ `.map`.
- `key` phải **ổn định và duy nhất** — dùng `id`, mã môn, mã sản phẩm.
- **Đừng dùng chỉ số mảng làm key** nếu danh sách có thể sắp xếp, thêm hoặc
  xoá: chỉ số đổi thì React ghép nhầm hàng, và ô input trong hàng sẽ nhảy
  lung tung.

## 2.6 · Hiển thị có điều kiện

```jsx
{dangTai && <Spinner />}                        {/* có thì hiện */}
{loi ? <p className="text-danger">{loi}</p> : <p>OK</p>}
{danhSach.length === 0 && <p>Không có gì</p>}
```

⚠️ Bẫy: `{danhSach.length && <List />}` — khi mảng rỗng, `0` là số, và React
**in số 0 ra màn hình**. Luôn so sánh rõ ràng: `danhSach.length > 0 && ...`.

## 2.7 · Sự kiện và form controlled

```jsx
<button onClick={() => xuLy(id)}>Xoá</button>
<input value={ten} onChange={e => setTen(e.target.value)} />
<form onSubmit={e => { e.preventDefault(); guiDi(); }}>
```

- Tên sự kiện viết **camelCase**: `onClick`, `onChange`, `onSubmit`.
- Truyền **hàm**, không phải lời gọi hàm: `onClick={xuLy}` đúng;
  `onClick={xuLy()}` là gọi ngay lúc render — sai.
- **Controlled input**: `value` lấy từ state + `onChange` cập nhật state.
  React là nguồn sự thật duy nhất.
  Đặt `value` mà quên `onChange` → ô input thành chỉ-đọc, gõ không ăn.
- **`e.preventDefault()` trong `onSubmit` là bắt buộc**, nếu không trình
  duyệt tải lại trang theo mặc định và mọi state bay sạch.

---

# PHẦN 3 — Bootstrap 5, đủ dùng cho bài 5 → 10

## 3.1 · Bootstrap là gì

Một bộ **CSS viết sẵn**: bạn gắn class vào thẻ, nó có sẵn kiểu dáng. Đỡ phải
tự viết CSS cho nút, card, form, lưới. Bootstrap 5 **đã bỏ jQuery**; phần JS
đi kèm Popper trong một file bundle.

## 3.2 · Hệ lưới 12 cột

Ba tầng, phải đủ cả ba:

```html
<div class="container">        <!-- giới hạn bề ngang, canh giữa -->
  <div class="row">            <!-- một hàng; là flex container -->
    <div class="col-6">…</div> <!-- cột; tổng trong 1 hàng nên = 12 -->
    <div class="col-6">…</div>
  </div>
</div>
```

- `container` có bề ngang cố định theo breakpoint; `container-fluid` luôn 100%.
- Tổng số cột trong một `row` nên bằng **12**. Vượt 12 thì phần dư tự xuống
  dòng.
- `col` không ghi số thì các cột chia đều nhau.
- Khoảng cách giữa các cột dùng `g-*` (gutter): `g-0` … `g-5`.

## 3.3 · Breakpoint — nền tảng của responsive

| Tên | Bắt đầu từ | Thiết bị tiêu biểu |
|---|---|---|
| (không ghi) | 0px | Điện thoại dọc |
| `sm` | ≥ 576px | Điện thoại ngang |
| `md` | ≥ 768px | Máy tính bảng |
| `lg` | ≥ 992px | Laptop |
| `xl` | ≥ 1200px | Màn hình lớn |
| `xxl` | ≥ 1400px | Màn hình rất lớn |

Đọc `col-12 col-md-8` là: "mặc định chiếm 12/12; **từ 768px trở lên** chiếm
8/12".

**Luôn viết mobile-first**: lớp không ghi breakpoint trước, rồi mới thêm lớp
có breakpoint để ghi đè cho màn hình lớn hơn. Viết ngược (chỉ có `col-md-8`)
thì ở điện thoại cột rơi về mặc định và layout vỡ đúng chỗ khó thấy nhất.

## 3.4 · Các nhóm class hay dùng (utility)

```
Khoảng cách   m-3  mt-2  mb-4  mx-auto  p-3  py-2  px-0      (0 → 5)
Chữ           text-center  text-muted  text-primary  fw-bold  small
Nền / viền    bg-light  bg-dark  border  rounded  shadow-sm
Flex          d-flex  flex-column  justify-content-between  align-items-center  gap-2
Kích thước    w-100  h-100
Hiện/ẩn       d-none  d-md-block
```

Quy ước đọc: `m` = margin, `p` = padding; `t b s e x y` = top, bottom, start
(trái), end (phải), trục ngang, trục dọc. Ví dụ `mb-3` = margin-bottom mức 3.

## 3.5 · Card và Form

```html
<div class="card h-100">
  <img class="card-img-top" src="…" alt="…">
  <div class="card-body">
    <h5 class="card-title">Tiêu đề</h5>
    <p class="card-text">Mô tả</p>
    <a class="btn btn-primary" href="#">Xem</a>
  </div>
</div>
```

`h-100` trên `.card` để các card cùng hàng **cao bằng nhau**. Muốn nút dính
đáy thì thêm `d-flex flex-column` cho `.card-body` và `mt-auto` cho nút.

```html
<div class="mb-3">
  <label class="form-label" for="email">Email</label>
  <input type="email" class="form-control" id="email">
</div>
<select class="form-select">…</select>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="ok">
  <label class="form-check-label" for="ok">Đồng ý</label>
</div>
```

Báo lỗi: thêm `is-invalid` cho ô input và đặt một `<div class="invalid-feedback">`
ngay sau nó.

## 3.6 · Bootstrap thuần vs React-Bootstrap

| | Bootstrap thuần (bài 5–8) | React-Bootstrap (bài 10) |
|---|---|---|
| Cách viết | `<div className="card">` | `<Card>` |
| Mở/đóng modal | thuộc tính `data-bs-toggle` + JS của Bootstrap | prop `show={bien}` — **state React** |
| Ưu | Sát tài liệu Bootstrap gốc | Hợp với cách nghĩ của React |

⛔ **Đừng trộn hai lối trên cùng một thành phần.** Gắn `data-bs-toggle` vào
một `<Modal>` của React-Bootstrap thì hai cơ chế cùng điều khiển một modal →
nó nhấp nháy hoặc kẹt mở.

---

# PHẦN 4 — Mười bài: làm gì · học gì · làm thế nào

Ký hiệu: **[Làm gì]** · **[Học được]** · **[Các bước]** · **[Bẫy]** ·
**[Tự kiểm]**.

## Bài 1 — Cài Node.js & npm
*Chương 1 · Slot 1 slide 20 · file `src/exercises/Ex01NodeNpm.js`*

**[Làm gì]** Cài Node.js bản LTS và npm lên máy, xác nhận bằng hai lệnh.

**[Học được]** Node.js là gì và vì sao cần nó · npm là gì · LTS khác Current ·
biến môi trường **PATH** là gì · cách kiểm tra một công cụ đã cài hay chưa.

**[Các bước]**
1. Vào `nodejs.org`, tải bản **LTS**.
2. Chạy trình cài: `.msi` (Windows) / `.pkg` (macOS) / `nvm` (Linux). Giữ
   nguyên tuỳ chọn mặc định — chúng bao gồm npm và "Add to PATH".
3. **Mở terminal MỚI**, chạy `node -v` rồi `npm -v`.

**[Bẫy]** Terminal đang mở sẵn vẫn giữ PATH cũ. Không đóng mở lại thì
`node -v` báo `command not found` dù Node đã cài xong. Đây là lỗi bị hiểu nhầm
nhiều nhất trong cả bài.

**[Tự kiểm]** Cả hai lệnh in ra số phiên bản.

**[Mở rộng]** Dùng `nvm` (macOS/Linux) hoặc `nvm-windows` để đổi phiên bản
Node theo từng dự án — rất cần khi bạn học nhiều môn với yêu cầu Node khác nhau.

---

## Bài 2 — App React đầu tiên
*Chương 1 · Slot 1 slide 23–25 · `Ex02FirstApp.js`*

**[Làm gì]** Tạo app bằng Create React App, chạy dev server, hiểu cấu trúc
thư mục, rút `index.js` về bản tối giản.

**[Học được]** `npx` khác `npm install` · vai trò `public/index.html`,
`src/index.js`, `src/App.js` · `ReactDOM.createRoot(...).render(...)` ·
hot-reload · các script `start/build/test` · `React.StrictMode` là gì.

**[Các bước]**
```bash
npx create-react-app demo-se2059
cd demo-se2059
npm start                    # mở http://localhost:3000
# Ctrl + C để dừng
```
Rồi rút `src/index.js` còn:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**Chuỗi liên kết cần hiểu:** `public/index.html` có `<div id="root">` →
`index.js` tìm đúng thẻ đó → gắn `<App />` vào → mọi thứ bạn thấy nằm bên
trong nó.

**[Bẫy]** `npm start` là server phát triển, KHÔNG phải bản để nộp — muốn bản
tĩnh thì `npm run build`. Và `npm run eject` là **một chiều**: đã eject thì
không quay lại được.

**[Tự kiểm]** Sửa chữ trong `App.js`, lưu, trình duyệt tự đổi ngay.

---

## Bài 3 — Git: cài, cấu hình & push
*Chương 1 · Slot 1 slide 26–33 · `Ex03Git.js`*

**[Làm gì]** Đưa dự án vào quản lý phiên bản và đẩy lên GitHub — đúng quy
trình nộp bài.

**[Học được]** Vùng làm việc → staging → commit → remote · `.gitignore` ·
nhánh `main` vs `master` · vòng lặp làm việc hằng ngày.

**[Các bước]**
```bash
git --version                       # kiểm đã cài

git config --global user.name  "Tên của bạn"
git config --global user.email "ten@example.com"

cd demo-se2059
git init
git add --all
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<tài-khoản>/<repo>
git push -u origin main
```
Sau đó hằng ngày chỉ còn:
```bash
git status                  # đang đổi những gì
git add .                   # đưa vào staging
git commit -m "mô tả"       # ghi một mốc
git push                    # đẩy lên GitHub
```

**[Bẫy]**
1. `.gitignore` phải có `node_modules/` **trước** `git add --all` đầu tiên,
   nếu không bạn commit hàng chục nghìn file. CRA đã sinh sẵn file này.
2. Slide ghi `origin master`, nhưng repo GitHub mới mặc định nhánh `main`.
   Phải khớp với nhánh mặc định của remote. *(Repo của bài này đang dùng
   `master` — nếu muốn đổi: `git branch -M main` rồi
   `git push -u origin main`.)*

**[Tự kiểm]** Mở trang repo trên GitHub, thấy đủ file, và **không thấy**
`node_modules`.

---

## Bài 4 — JSX & ES6, lab method mảng
*Chương 3 · Slot 2–3 slide 35 & 41 · `Ex04JsxEs6.js`*

Bài nặng nhất trong mười bài, và cũng là bài đáng đầu tư nhất.

**[Làm gì]** Bốn phần:
- **A** — `find` / `filter` / `every` / `some` trên mảng `people`.
- **B** — `reduce` tính tổng và tích của `[1, 2, 3, 4]`.
- **C** — `forEach` / `filter` / `map` / spread / `sort` trên mảng `companies`.
- **D** — dựng UI bằng JSX: navbar, khối chữ, danh sách khoá học.

**[Học được]** Toàn bộ bảng method mảng ở mục 0.3 · spread để tạo object mới ·
vì sao `sort` phải chép mảng trước · `.map()` + `key` để biến dữ liệu thành
JSX · tách một phần UI thành component (`<NavBar />`).

**[Các bước]**
```jsx
const isTeen = p => p.age >= 10 && p.age <= 20;
people.find(isTeen);     // { name: 'Ann', age: 19 }
people.filter(isTeen);   // [Ann, Elisabeth]
people.every(isTeen);    // false  ← Jack 50 tuổi
people.some(isTeen);     // true

[1,2,3,4].reduce((acc, n) => acc + n, 0);   // 10
[1,2,3,4].reduce((acc, n) => acc * n, 1);   // 24  ← khởi tạo 1, không phải 0

companies.filter(c => c.start > 1987);
companies
  .filter(c => c.category === 'Retail')
  .map(c => ({ ...c, start: c.start + 1 }));   // object MỚI, không sửa gốc
[...companies].sort((a, b) => a.end - b.end);  // chép TRƯỚC khi sort
[...ages].sort((a, b) => b - a);               // giảm dần
```

**[Bẫy]**
- `reduce` tính tích mà khởi tạo `0` thì kết quả luôn là `0`.
- `.sort()` sửa mảng gốc và so như chuỗi nếu không truyền hàm so sánh.
- `.map(c => ({ ...c }))` — phải bọc object trong **ngoặc tròn**, không thì
  JS hiểu `{` là mở thân hàm.

**[Tự kiểm]** Mở `src/data/lab.js`, đổi tuổi của một người, lưu. Mọi con số ở
Part A phải tự đổi theo — vì chúng được tính lúc render, không gõ tay.

---

## Bài 5 — Bắt đầu với Bootstrap
*Chương 4 · Slot 4–5 slide 14 · `Ex05Bootstrap.js`*

**[Làm gì]** Đưa Bootstrap 5 vào dự án React và xác nhận class có tác dụng.

**[Học được]** Cài thư viện bằng npm · `import` file CSS trong dự án React ·
vì sao JSX dùng `className` · vai trò thẻ meta `viewport`.

**[Các bước]**
```bash
npm install bootstrap
```
Thêm vào **`src/index.js`** (hai dòng, đặt TRƯỚC `./index.css` để CSS của bạn
ghi đè được lên Bootstrap):
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```
Kiểm: `<button className="btn btn-primary">Test</button>` → ra nút xanh.

**[Bẫy]** `class` trong JSX không có tác dụng, phải là `className`. Thiếu meta
`viewport` thì lưới không responsive trên điện thoại dù class vẫn đúng (CRA
đã đặt sẵn trong `public/index.html`).

**[Tự kiểm]** Nút hiện ra xanh, bo góc, có khoảng đệm. Nếu nó trông như nút
xám mặc định của trình duyệt thì dòng import bị thiếu hoặc sai đường dẫn.

---

## Bài 6 — Layout bằng lưới Bootstrap
*Chương 4 · Slot 4–5 slide 31 · `Ex06Grid.js`*

**[Làm gì]** Dựng layout: header ngang hết · main 8 / sidebar 4 · một hàng 3
card · footer ngang hết. Điện thoại thì xếp một cột.

**[Học được]** `container` / `row` / `col` · hệ 12 cột · breakpoint · lớp
`row-cols-*` · gutter `g-*` · tư duy mobile-first · dùng thẻ ngữ nghĩa
(`header`, `main`, `aside`, `footer`) thay vì `div` hết.

**[Các bước]**
```jsx
<div className="container">
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
</div>
```

**[Bẫy]** Viết `col-md-8` mà quên `col-12` thì ở màn hình nhỏ cột rơi về mặc
định. `8 + 4 = 12` — cộng quá 12 là tự xuống dòng.

**[Tự kiểm]** Kéo hẹp cửa sổ trình duyệt. Qua mốc 768px, main/sidebar phải
gộp thành một cột và ba card phải xếp dọc.

---

## Bài 7 — Cột thẻ (Cards)
*Chương 4 · Slot 4–5 slide 48 · `Ex07Cards.js`*

**[Làm gì]** Hiển thị một danh sách thành lưới card: ảnh + tiêu đề + mô tả +
nút. 1 cột trên điện thoại, 3 cột từ `md`.

**[Học được]** Cấu trúc một card (`card-img-top`, `card-body`, `card-title`,
`card-text`) · `h-100` để card cao bằng nhau · `d-flex flex-column` + `mt-auto`
để nút dính đáy · `.map()` + `key` lần nữa, lần này trên UI thật.

**[Các bước]**
```jsx
<div className="row row-cols-1 row-cols-md-3 g-4">
  {items.map(it => (
    <div className="col" key={it.id}>
      <div className="card h-100">
        <img src={it.img} className="card-img-top" alt={it.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{it.title}</h5>
          <p  className="card-text">{it.text}</p>
          <a className="btn btn-primary mt-auto" href={it.href}>Xem</a>
        </div>
      </div>
    </div>
  ))}
</div>
```

**[Bẫy]** `h-100` đặt trên `.card`, KHÔNG phải trên `.col` — cột vốn đã cao
bằng nhau, cái lệch là card bên trong. Mỗi `.col` sinh ra từ `.map` phải có
`key`.

**[Tự kiểm]** Trang bài 7 có công tắc bật/tắt `h-100`. Tắt đi để thấy tận mắt
các card cao lệch nhau.

---

## Bài 8 — Form controls
*Chương 4 · Slot 4–5 slide 51 · `Ex08Form.js`*

**[Làm gì]** Một form đăng ký đầy đủ: text, email, select, radio, textarea,
checkbox — **controlled** toàn bộ, có kiểm tra dữ liệu và khoá nút Gửi.

**[Học được]** Class form của Bootstrap · **controlled component** · gom
nhiều trường vào một object state · một handler `onChange` dùng chung cho mọi
trường · `e.preventDefault()` · hiển thị lỗi bằng `is-invalid` +
`invalid-feedback` · `disabled` theo điều kiện.

**[Các bước]**
```jsx
const [form, setForm] = useState({ hoTen: '', email: '', dangKy: false });

// Một handler cho mọi ô — phân biệt checkbox bằng chính type của nó
const doi = (e) => {
  const { name, type, value, checked } = e.target;
  setForm(cu => ({ ...cu, [name]: type === 'checkbox' ? checked : value }));
};

<input name="hoTen" className="form-control" value={form.hoTen} onChange={doi} />

<form onSubmit={e => { e.preventDefault(); guiDi(); }}>
```
Ba điểm đáng để ý trong đoạn trên: `[name]` là **computed property** — tên
thuộc tính lấy từ biến; `{ ...cu, ... }` giữ nguyên các trường khác; dùng
`setForm(cu => …)` để luôn đọc state mới nhất.

**[Bẫy]** Có `value` mà quên `onChange` → ô input thành chỉ-đọc, gõ không ăn,
React in cảnh báo ra Console. Quên `e.preventDefault()` → trang tải lại, mất
sạch state.

**[Tự kiểm]** Gõ vào form; khối JSON bên phải phải đổi theo **từng ký tự**.
Nhập email sai định dạng thì viền đỏ hiện lên và nút Gửi vẫn khoá.

---

## Bài 9 — React Component 1
*Chương 5 · Slot 6 slide 21 · `Ex09Components.js`*

**[Làm gì]** Bốn bài nhỏ tăng dần: (1) component giới thiệu bản thân,
(2) `Hello, World!`, (3) counter tăng/giảm, (4) `SimpleCard` ghép từ
`Title` / `Description` / `Image`.

**[Học được]** Viết component · truyền và destructure props · giá trị mặc
định cho prop · `useState` lần đầu · dạng hàm `setSo(s => s + 1)` · **mỗi bản
component có state riêng** · kỹ thuật **dựng từ lá lên**.

**[Các bước]**
```jsx
function Title({ text })       { return <h5>{text}</h5>; }
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
}
```

**[Bẫy]** Tên component **phải viết hoa chữ đầu**; `<helloWorld />` bị coi là
thẻ HTML lạ, render ra rỗng và **không báo lỗi** — rất khó tìm.

**[Tự kiểm]** Trang bài 9 có hai `<Counter />` (bước 1 và bước 5). Bấm cái
trên, cái dưới phải đứng yên — đó là bằng chứng mỗi bản giữ state riêng.

---

## Bài 10 — Demo React-Bootstrap
*Chương 4 · Slot 7 slide 23 · `Ex10ReactBootstrap.js`*

**[Làm gì]** Một app nhỏ: Navbar + lưới Card sản phẩm + Modal chi tiết mở
bằng state, kèm đếm số món trong giỏ.

**[Học được]** Dùng component thay class · `<Row xs={1} md={3}>` (breakpoint
thành prop) · **Modal điều khiển bằng state** · `disabled` theo dữ liệu
(hết hàng) · cập nhật mảng state không sửa mảng cũ · `Intl.NumberFormat` để
định dạng tiền Việt.

**[Các bước]**
```jsx
const [dangXem, setDangXem] = useState(null);   // null = modal đang đóng

<Button onClick={() => setDangXem(p)}>Chi tiết</Button>

<Modal show={dangXem !== null} onHide={() => setDangXem(null)}>
  <Modal.Header closeButton><Modal.Title>{dangXem?.name}</Modal.Title></Modal.Header>
  <Modal.Body>{dangXem?.desc}</Modal.Body>
</Modal>
```
Mẹo: giữ **cả object** đang xem trong state (`dangXem`) thay vì một cờ
`true/false` — vừa biết modal có mở không, vừa biết đang xem sản phẩm nào.
Thêm vào giỏ thì tạo mảng mới: `setGio(cu => [...cu, p.id])`.

**[Bẫy]** Đừng trộn `data-bs-toggle` với `<Modal>` của React-Bootstrap. Và
`dangXem?.name` — dấu `?.` cần thiết vì lúc modal đóng thì `dangXem` là `null`.

**[Tự kiểm]** Mở modal, khối "State đang điều khiển giao diện" phải hiện đúng
tên sản phẩm. Sản phẩm hết hàng thì nút "Thêm vào giỏ" phải mờ và bấm không ăn.

---

# PHẦN 5 — Lộ trình tự học

## 5.1 · Nếu bạn còn hổng nền (khoảng 2 tuần, 1–2 giờ/ngày)

| Ngày | Học gì | Nguồn | Xong thì làm được |
|---|---|---|---|
| 1–2 | HTML: thẻ, thuộc tính, form | MDN "HTML basics" | Viết tay một trang có form |
| 3–4 | CSS: selector, box model, màu, chữ | MDN "Learn CSS" | Tô màu, canh lề được |
| 5 | Flexbox | flexboxfroggy.com (24 màn) | Xếp hàng ngang/dọc, canh giữa |
| 6–8 | JS cơ bản: biến, hàm, `if`, vòng lặp, object, array | javascript.info chương 2 | Viết hàm tính toán |
| 9–10 | **ES6**: arrow, destructuring, spread, template literal | javascript.info | Đọc hiểu mã React |
| 11–12 | **Method mảng** (map/filter/find/reduce/sort) | javascript.info "Array methods" | **Làm được Bài 4** |
| 13–14 | DOM & sự kiện cơ bản | MDN | Hiểu `onClick` thật ra là gì |

## 5.2 · Học React (khoảng 2 tuần nữa)

| Thứ tự | Chủ đề | Bài tương ứng | Nguồn chính |
|---|---|---|---|
| 1 | Môi trường, CRA | Bài 1, 2 | `react.dev` → "Quick Start" |
| 2 | JSX | Bài 4 (Part D) | `react.dev` → "Writing Markup with JSX" |
| 3 | Component & props | Bài 9 | `react.dev` → "Passing Props to a Component" |
| 4 | Render danh sách & `key` | Bài 4, 7 | `react.dev` → "Rendering Lists" |
| 5 | State & sự kiện | Bài 9, 10 | `react.dev` → "Adding Interactivity" |
| 6 | Form controlled | Bài 8 | `react.dev` → "Reacting to Input with State" |
| 7 | Bootstrap & React-Bootstrap | Bài 5–8, 10 | `getbootstrap.com`, `react-bootstrap.github.io` |

**Bốn nguồn đáng tin, đọc bốn cái này là đủ:**
- `react.dev` — tài liệu chính thức, đã viết lại năm 2023 theo hướng hook.
  **Đọc phần "Learn React", không đọc tài liệu React cũ nói về class component.**
- `developer.mozilla.org` (MDN) — chuẩn cho HTML/CSS/JS.
- `javascript.info` — giải thích JS sâu mà vẫn dễ đọc.
- `getbootstrap.com/docs/5.3` — luôn xem bản **5.3**, đừng xem bản 4 (cú pháp
  khác: `ml-*` đổi thành `ms-*`, bỏ jQuery…).

## 5.3 · Phương pháp học — bốn bước, lặp cho mỗi chủ đề

1. **Đọc 15 phút.** Vừa đủ để biết khái niệm tên là gì.
2. **Gõ lại bằng tay.** Không copy-paste. Gõ tay ép mắt đọc từng ký tự và
   là lúc bạn phát hiện mình chưa hiểu chỗ nào.
3. **Cố ý phá.** Xoá `key`, đổi `className` thành `class`, bỏ
   `e.preventDefault()`, xoá `h-100`. **Xem lỗi trông như thế nào.** Sau này
   gặp lại là nhận ra ngay — đây là bước bị bỏ qua nhiều nhất và cũng là bước
   hiệu quả nhất.
4. **Tự làm một biến thể** không nhìn bài mẫu. Làm được mới tính là hiểu.

## 5.4 · Bài tự luyện (không có trong đề, tự làm để chắc kiến thức)

1. Thêm ô tìm kiếm cho lưới card ở bài 7: gõ chữ, danh sách lọc theo tên.
   *(dùng `useState` + `.filter()`)*
2. Thêm nút sắp xếp sản phẩm bài 10 theo giá tăng/giảm.
   *(nhớ `[...products].sort()`, đừng sửa mảng gốc)*
3. Bài 8: thêm trường "Ngày sinh" và bắt buộc đủ 18 tuổi mới cho Gửi.
4. Bài 9: viết component `<DiemTrungBinh scores={[8,9,10]} />` hiển thị điểm
   trung bình và xếp loại. *(dùng `reduce`)*
5. Tách `<NavBar />` ở bài 4 thành file riêng trong `src/components/` và dùng
   lại ở một bài khác.

---

# PHẦN 6 — Lỗi hay gặp và cách đọc

| Thông báo / triệu chứng | Nguyên nhân thường gặp | Cách chữa |
|---|---|---|
| `command not found: node` | PATH chưa nạp | Đóng và mở lại terminal |
| `Module not found: Can't resolve 'xxx'` | Chưa `npm install xxx`, hoặc sai đường dẫn tương đối | Cài thư viện; kiểm lại `./` và `../` |
| `Each child in a list should have a unique "key" prop` | Thiếu `key` trong `.map()` | Thêm `key={item.id}` |
| `Objects are not valid as a React child` | Đang render thẳng một object | Render một thuộc tính, hoặc `JSON.stringify(obj)` |
| Gõ vào ô input không ăn | Có `value` mà thiếu `onChange` | Thêm `onChange` cập nhật state |
| Bấm nút xong trang tự tải lại | Thiếu `e.preventDefault()` trong `onSubmit` | Thêm vào |
| Component không hiện gì, không lỗi | Tên component viết thường | Viết hoa chữ đầu |
| Màn hình trắng trơn | Có lỗi JS lúc chạy | **Mở Console (F12)** — luôn là việc đầu tiên |
| `EADDRINUSE: port 3000` | Còn một `npm start` cũ đang chạy | Đóng terminal cũ, hoặc `npm start` rồi chọn cổng khác |
| Class Bootstrap không ăn | Quên import CSS, hoặc CSS của mình đè lên | Kiểm `src/index.js`; xem mục 0.2b |
| Sửa code mà trang không đổi | Dev server đã tắt, hoặc đang xem bản `build/` cũ | Chạy lại `npm start` |

**Thói quen quan trọng nhất khi lỗi:** mở **Console** (F12 → Console) trước,
đọc dòng lỗi đầu tiên, tìm tên file và số dòng trong đó. Đoán mò trước khi đọc
lỗi là cách chậm nhất.

---

# PHỤ LỤC — Tra nhanh

```bash
# Dự án
npm install            # cài thư viện
npm start              # chạy dev, localhost:3000
npm run build          # bản tĩnh trong build/
npm test               # chạy test
Ctrl + C               # dừng server

# Git
git status             # đang đổi gì
git add .              # đưa vào staging
git commit -m "..."    # ghi mốc
git push               # đẩy lên GitHub
git log --oneline      # xem lịch sử
```

```jsx
// React
const [x, setX] = useState(giáTrịĐầu);        // state
setX(cu => cu + 1);                            // cập nhật dựa giá trị cũ
{dieuKien && <Thẻ />}                          // hiện có điều kiện
{mang.map(i => <li key={i.id}>{i.ten}</li>)}   // render danh sách
<input value={x} onChange={e => setX(e.target.value)} />   // controlled
```

```
Bootstrap
container / row / col-12 col-md-8      lưới 12 cột
row-cols-1 row-cols-md-3 g-4           lưới card
card h-100 / card-body / card-title    card cao bằng nhau
form-label form-control form-select    form
btn btn-primary / btn-outline-*        nút
d-flex flex-column gap-2 mt-auto       flex
m-3 p-2 mb-4 text-muted fw-bold        khoảng cách & chữ
sm≥576  md≥768  lg≥992  xl≥1200  xxl≥1400
```
