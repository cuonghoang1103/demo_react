/**
 * Danh mục 10 bài tập — MỘT nguồn sự thật duy nhất.
 *
 * App.js đọc mảng này để dựng cả menu bên trái lẫn nội dung bên phải, nên
 * thêm một bài mới chỉ cần thêm một dòng ở đây, không phải sửa hai chỗ rồi
 * quên mất một.
 */
import Ex01NodeNpm from './Ex01NodeNpm';
import Ex02FirstApp from './Ex02FirstApp';
import Ex03Git from './Ex03Git';
import Ex04JsxEs6 from './Ex04JsxEs6';
import Ex05Bootstrap from './Ex05Bootstrap';
import Ex06Grid from './Ex06Grid';
import Ex07Cards from './Ex07Cards';
import Ex08Form from './Ex08Form';
import Ex09Components from './Ex09Components';
import Ex10ReactBootstrap from './Ex10ReactBootstrap';
import BonusEs6 from './BonusEs6';

export const BAI_TAP = [
  { so: 1, ma: 'ex1', ten: 'Cài Node.js & npm', chuong: 'Chương 1', Comp: Ex01NodeNpm },
  { so: 2, ma: 'ex2', ten: 'App React đầu tiên', chuong: 'Chương 1', Comp: Ex02FirstApp },
  { so: 3, ma: 'ex3', ten: 'Git: cài, cấu hình & push', chuong: 'Chương 1', Comp: Ex03Git },
  { so: 4, ma: 'ex4', ten: 'JSX & ES6 — lab method mảng', chuong: 'Chương 3', Comp: Ex04JsxEs6 },
  { so: 5, ma: 'ex5', ten: 'Bắt đầu với Bootstrap', chuong: 'Chương 4', Comp: Ex05Bootstrap },
  { so: 6, ma: 'ex6', ten: 'Layout bằng lưới Bootstrap', chuong: 'Chương 4', Comp: Ex06Grid },
  { so: 7, ma: 'ex7', ten: 'Cột thẻ (Cards)', chuong: 'Chương 4', Comp: Ex07Cards },
  { so: 8, ma: 'ex8', ten: 'Form controls', chuong: 'Chương 4', Comp: Ex08Form },
  { so: 9, ma: 'ex9', ten: 'React Component 1', chuong: 'Chương 5', Comp: Ex09Components },
  { so: 10, ma: 'ex10', ten: 'Demo React-Bootstrap', chuong: 'Chương 4', Comp: Ex10ReactBootstrap },
  { so: null, ma: 'bonus', ten: 'Bonus — ES6+ (bài cũ)', chuong: 'Chương 2', Comp: BonusEs6 },
];
