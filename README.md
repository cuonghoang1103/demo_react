# FER202 — Front-End Web Development with React

Bài nộp **Exercise 1 → 10** của môn FER202, lớp **SE2059**.
Dự án tạo bằng Create React App, dùng Bootstrap 5.3 và React-Bootstrap.

---

## Chạy thử

```bash
npm install     # lần đầu
npm start       # mở http://localhost:3000
npm test        # 3 phép kiểm
npm run build   # bản tĩnh trong build/
```

Yêu cầu: Node.js LTS (làm bài trên `v22.21.0`) và npm (`10.9.4`).

---

## Mười bài tập ở đâu

Chọn bài ở menu bên trái. Mỗi bài một file riêng trong `src/exercises/`:

| Bài | Nội dung | File | Chương · Slot |
|----|----------|------|---------------|
| 1 | Cài Node.js & npm | `Ex01NodeNpm.js` | C1 · Slot 1 slide 20 |
| 2 | App React đầu tiên | `Ex02FirstApp.js` | C1 · Slot 1 slide 23–25 |
| 3 | Git: cài, cấu hình & push | `Ex03Git.js` | C1 · Slot 1 slide 26–33 |
| 4 | JSX & ES6 — lab method mảng | `Ex04JsxEs6.js` | C3 · Slot 2–3 slide 35 & 41 |
| 5 | Bắt đầu với Bootstrap | `Ex05Bootstrap.js` | C4 · Slot 4–5 slide 14 |
| 6 | Layout bằng lưới Bootstrap | `Ex06Grid.js` | C4 · Slot 4–5 slide 31 |
| 7 | Cột thẻ (Cards) | `Ex07Cards.js` | C4 · Slot 4–5 slide 48 |
| 8 | Form controls | `Ex08Form.js` | C4 · Slot 4–5 slide 51 |
| 9 | React Component 1 | `Ex09Components.js` | C5 · Slot 6 slide 21 |
| 10 | Demo React-Bootstrap | `Ex10ReactBootstrap.js` | C4 · Slot 7 slide 23 |
| Bonus | ES6+ (Class, spread, async/await…) | `BonusEs6.js` | C2 |

Mỗi trang trình bày cùng một thứ tự: **Mục tiêu → Yêu cầu → Mã nguồn →
Bài làm chạy thật → Bẫy**.

---

## Cấu trúc thư mục

```
src/
├── App.js                    khung: navbar + menu 10 bài
├── App.css                   kiểu dáng của khung (rất mỏng)
├── BonusEs6.css              kiểu dáng RIÊNG của phần Bonus, khoanh trong .App
├── components/
│   ├── KhungBaiTap.js        khung trình bày dùng chung cho mọi bài
│   └── DemoComponent.js      component mẫu React-Bootstrap
├── data/
│   └── lab.js                dữ liệu: people, companies, courses, products…
├── exercises/                MƯỜI bài tập, mỗi bài một file
│   └── index.js              danh mục bài — một nguồn sự thật duy nhất
├── Student.js, Person.js, evaluation.js    lớp ES6 của phần Bonus
└── index.js                  điểm vào, nạp CSS Bootstrap

public/images/                ảnh minh hoạ (SVG, nằm trong project)
```

## Vài lựa chọn khi làm bài

- **Không dùng React Router.** Chương 9 mới học tới, nên điều hướng giữa các
  bài làm bằng `useState` — đúng phạm vi đã học đến tuần 2.
- **Ảnh nằm trong `public/images/`, không lấy từ Internet.** Bài nộp phải hiện
  đủ ảnh cả khi máy chấm không có mạng.
- **CSS của phần Bonus được khoanh trong `.App`.** Bản cũ có `.card { }` và
  `button { }` ở cấp toàn cục — hai selector đó đè thẳng lên `.card` và mọi nút
  của Bootstrap, làm hỏng bài 7 và bài 10.
- **Bài 1, 2, 3 là bài môi trường**, không có mã chạy trong trình duyệt, nên
  phần bài làm là các lệnh đã chạy kèm kết quả in ra thật trên máy.
