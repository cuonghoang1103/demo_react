import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

/**
 * Phép kiểm tối thiểu cho bài nộp: app dựng được và chuyển bài được.
 *
 * Test mặc định của Create React App tìm chữ "learn react" trên trang khởi
 * tạo — trang đó đã được thay bằng danh sách bài tập, nên test cũ luôn đỏ.
 */

test('mở app thì thấy Exercise 1', () => {
  render(<App />);
  // Tiêu đề bài, phân biệt với mục cùng tên trong menu bên trái.
  expect(screen.getByRole('heading', { name: /Cài Node\.js & npm/i })).toBeInTheDocument();
});

test('bấm menu thì chuyển sang bài khác', () => {
  render(<App />);
  // Tìm theo NÚT trong menu: chữ "Form controls" còn xuất hiện ở tiêu đề bài,
  // nên getByText sẽ khớp nhiều chỗ và ném lỗi.
  fireEvent.click(screen.getByRole('button', { name: /Bài 8/ }));
  expect(screen.getByLabelText('Họ và tên')).toBeInTheDocument();
});

test('counter ở Exercise 9 tăng khi bấm', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Bài 9/ }));
  const nut = screen.getAllByRole('button', { name: '+ 1' })[0];
  fireEvent.click(nut);
  fireEvent.click(nut);
  expect(screen.getByText('2')).toBeInTheDocument();
});
