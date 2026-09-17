/**
 * Dữ liệu dùng chung cho các bài tập FER202.
 *
 * Hai mảng `people` và `companies` là bộ dữ liệu gốc của Lab 1 (Exercise 4 —
 * JSX & ES6), giữ nguyên tên và số liệu như đề để kết quả đối chiếu được.
 */

/* ── Exercise 4 · Part A ─────────────────────────────────────── */
export const people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 },
];

/** Tuổi teen theo đúng định nghĩa của đề: từ 10 đến 20. */
export const isTeen = (p) => p.age >= 10 && p.age <= 20;

/* ── Exercise 4 · Part B ─────────────────────────────────────── */
export const numbers = [1, 2, 3, 4];

/* ── Exercise 4 · Part C ─────────────────────────────────────── */
export const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

export const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/* ── Exercise 4 · Part D — danh sách khoá học render bằng .map() ── */
export const courses = [
  { id: 'FER202', name: 'Front-End Web Development with React', credits: 3, slot: 'Slot 1–20' },
  { id: 'WED201c', name: 'Web Design', credits: 3, slot: 'Tiên quyết' },
  { id: 'PRO192', name: 'Object-Oriented Programming', credits: 3, slot: 'Kỳ trước' },
  { id: 'DBI202', name: 'Introduction to Databases', credits: 3, slot: 'Kỳ trước' },
  { id: 'SWP391', name: 'Software Development Project', credits: 3, slot: 'Kỳ sau' },
];

/* ── Exercise 7 · lưới card ────────────────────────────────────
 * Ảnh để trong `public/images/` chứ không lấy từ mạng: bài nộp phải hiện
 * đúng cả khi máy chấm không có Internet. Đường dẫn bắt đầu bằng "/" là tính
 * từ thư mục `public`.
 */
export const cardItems = [
  {
    id: 1,
    title: 'React Hooks',
    text: 'useState, useEffect, useContext và useReducer — bộ công cụ quản lý state của component hàm.',
    img: '/images/hooks.svg',
    href: 'https://react.dev/reference/react/hooks',
  },
  {
    id: 2,
    title: 'Bootstrap Grid',
    text: 'Hệ lưới 12 cột với container / row / col và các breakpoint sm, md, lg, xl, xxl.',
    img: '/images/grid.svg',
    href: 'https://getbootstrap.com/docs/5.3/layout/grid/',
  },
  {
    id: 3,
    title: 'React Router',
    text: 'Điều hướng phía client: Routes, Route, Link và useNavigate — học ở Chương 9.',
    img: '/images/router.svg',
    href: 'https://reactrouter.com/',
  },
  {
    id: 4,
    title: 'Redux Toolkit',
    text: 'Kiến trúc Flux gọn lại: store, slice, reducer và thunk bất đồng bộ — Chương 12.',
    img: '/images/redux.svg',
    href: 'https://redux-toolkit.js.org/',
  },
  {
    id: 5,
    title: 'Axios & fetch',
    text: 'Gọi REST API bằng Promise và async/await, xử lý lỗi và trạng thái đang tải.',
    img: '/images/axios.svg',
    href: 'https://axios-http.com/',
  },
  {
    id: 6,
    title: 'Lazy & Suspense',
    text: 'Tách gói bằng React.lazy và Suspense để trang đầu nhẹ hơn — Chương 10.',
    img: '/images/lazy.svg',
    href: 'https://react.dev/reference/react/lazy',
  },
];

/* ── Exercise 10 · sản phẩm cho Navbar + Card + Modal ─────────── */
export const products = [
  {
    id: 1,
    name: 'Bàn phím cơ FPT Edition',
    price: 1290000,
    stock: 12,
    desc: 'Switch êm, layout 75%, đèn nền trắng. Hợp cho việc gõ code cả ngày trong phòng lab.',
    img: '/images/keyboard.svg',
  },
  {
    id: 2,
    name: 'Chuột không dây Silent',
    price: 450000,
    stock: 30,
    desc: 'Click êm, pin AA dùng 12 tháng, cảm biến 4000 DPI. Nhẹ 78g nên mang theo dễ.',
    img: '/images/mouse.svg',
  },
  {
    id: 3,
    name: 'Tai nghe Study Mode',
    price: 890000,
    stock: 0,
    desc: 'Chụp tai, chống ồn chủ động, mic khử tiếng vọng — dùng cho học nhóm online.',
    img: '/images/headphone.svg',
  },
];

/** Định dạng tiền Việt: 1290000 → "1.290.000 ₫". */
export const dinhDangTien = (so) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(so);
