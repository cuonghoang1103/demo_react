import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('mo app thi thay Exercise 1', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Exercise 1/i })).toBeInTheDocument();
});

test('bam menu thi doi bai', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Exercise 8/i }));
  expect(screen.getByLabelText('Họ và tên')).toBeInTheDocument();
});
