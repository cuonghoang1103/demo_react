// Exercise 2 - Tao app React dau tien bang Create React App

function Exercise2() {
  return (
    <div>
      <h3>Exercise 2 — App React đầu tiên</h3>

      <pre className="bg-light border rounded p-3">
{`npx create-react-app demo-se2059
cd demo-se2059
npm start`}
      </pre>

      <p>Các file chính trong thư mục src:</p>
      <ul>
        <li><code>index.js</code> — điểm vào, gắn App vào thẻ div id="root"</li>
        <li><code>App.js</code> — component gốc, viết giao diện ở đây</li>
        <li><code>index.css</code>, <code>App.css</code> — file css</li>
      </ul>

      <p>index.js rút gọn:</p>
      <pre className="bg-light border rounded p-3">
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
      </pre>

      <p className="text-muted">npm start để chạy dev, npm run build để tạo bản deploy.</p>
    </div>
  );
}

export default Exercise2;
