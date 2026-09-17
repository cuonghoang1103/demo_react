import { ListGroup } from 'react-bootstrap';
import { KhungBaiTap, KhoiLam, Ma, Bay } from '../components/KhungBaiTap';

/**
 * Exercise 2 — App React đầu tiên bằng Create React App.
 *
 * Chính project này là bài làm: nó được tạo bằng `npx create-react-app`.
 */

const CAY_THU_MUC = [
  ['node_modules/', 'Thư viện npm tải về. KHÔNG commit — đã nằm trong .gitignore.'],
  ['public/index.html', 'Trang HTML duy nhất. Chứa <div id="root"> — chỗ React gắn cây component vào.'],
  ['src/index.js', 'Điểm vào. Gọi createRoot(...).render(<App />).'],
  ['src/App.js', 'Component gốc — nơi bài làm bắt đầu.'],
  ['package.json', 'Khai báo dependency và 4 script: start, build, test, eject.'],
];

export default function Ex02FirstApp() {
  return (
    <KhungBaiTap
      so={2}
      tieuDe="App React đầu tiên"
      chuong="Chương 1"
      slot="Slot 1 · slide 23–25"
      mucTieu="Tạo, chạy và dọn một app React mới để hiểu cấu trúc trước khi thêm mã của mình."
      yeuCau={[
        'Tạo app bằng npx create-react-app (không cần cài toàn cục).',
        'Chạy dev server bằng npm start, mở http://localhost:3000.',
        'Đọc hiểu vai trò của src/index.js và src/App.js.',
        'Rút index.js về bản tối giản.',
      ]}
    >
      <KhoiLam tieuDe="1 · Tạo và chạy">
        <Ma>{`npx create-react-app demo-se2059
cd demo-se2059
npm start        # mở http://localhost:3000, có hot-reload
# Ctrl + C để dừng server`}</Ma>
        <p className="text-muted small mt-2 mb-0">
          <code>npx</code> tải và chạy công cụ một lần rồi bỏ, nên máy không bị đọng một bản
          create-react-app cũ — đây là lý do đề bài không bảo <code>npm i -g</code>.
        </p>
      </KhoiLam>

      <KhoiLam tieuDe="2 · Cấu trúc thư mục sinh ra">
        <ListGroup variant="flush">
          {CAY_THU_MUC.map(([ten, y]) => (
            <ListGroup.Item key={ten}>
              <code className="text-primary">{ten}</code>
              <div className="small text-muted">{y}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </KhoiLam>

      <KhoiLam tieuDe="3 · index.js tối giản" phu="Bản trong đề bài">
        <Ma>{`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}</Ma>
        <p className="small text-muted mt-2 mb-0">
          File <code>src/index.js</code> của project này giữ thêm hai dòng: import CSS Bootstrap
          (yêu cầu của Exercise 5) và <code>React.StrictMode</code> — chế độ báo sớm các lỗi vòng
          đời khi đang phát triển.
        </p>
      </KhoiLam>

      <Bay>
        <code>npm start</code> là dev server, KHÔNG phải bản để nộp. Muốn có bản tĩnh thì chạy{' '}
        <code>npm run build</code> — nó sinh thư mục <code>build/</code>. Và{' '}
        <code>npm run eject</code> là một chiều: đã eject thì không quay lại được, đừng bấm cho biết.
      </Bay>
    </KhungBaiTap>
  );
}
