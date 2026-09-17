// Du lieu dung cho cac bai tap

export const people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 },
];

export const isTeen = (p) => p.age >= 10 && p.age <= 20;

export const numbers = [1, 2, 3, 4];

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

export const courses = [
  { id: 'FER202', name: 'Front-End Web Development with React', credits: 3 },
  { id: 'WED201c', name: 'Web Design', credits: 3 },
  { id: 'PRO192', name: 'Object-Oriented Programming', credits: 3 },
  { id: 'DBI202', name: 'Introduction to Databases', credits: 3 },
  { id: 'SWP391', name: 'Software Development Project', credits: 3 },
];

export const cardItems = [
  { id: 1, title: 'React Hooks', text: 'useState, useEffect, useContext, useReducer.', img: '/images/hooks.svg' },
  { id: 2, title: 'Bootstrap Grid', text: 'Hệ lưới 12 cột: container, row, col.', img: '/images/grid.svg' },
  { id: 3, title: 'React Router', text: 'Điều hướng phía client: Routes, Route, Link.', img: '/images/router.svg' },
  { id: 4, title: 'Redux Toolkit', text: 'Quản lý state toàn cục bằng store và slice.', img: '/images/redux.svg' },
  { id: 5, title: 'Axios & fetch', text: 'Gọi REST API bằng promise và async/await.', img: '/images/axios.svg' },
  { id: 6, title: 'Lazy & Suspense', text: 'Tách gói JS để trang đầu tải nhanh hơn.', img: '/images/lazy.svg' },
];

export const products = [
  { id: 1, name: 'Bàn phím cơ', price: 1290000, stock: 12, desc: 'Switch êm, layout 75%, đèn nền trắng.', img: '/images/keyboard.svg' },
  { id: 2, name: 'Chuột không dây', price: 450000, stock: 30, desc: 'Click êm, pin AA dùng 12 tháng, 4000 DPI.', img: '/images/mouse.svg' },
  { id: 3, name: 'Tai nghe', price: 890000, stock: 0, desc: 'Chụp tai, chống ồn chủ động, mic khử tiếng vọng.', img: '/images/headphone.svg' },
];
