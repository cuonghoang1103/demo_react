// Exercise 5 - Them Bootstrap vao du an React

function Exercise5() {
  return (
    <div>
      <h3>Exercise 5 — Bắt đầu với Bootstrap</h3>

      <p>1. Cài bằng npm:</p>
      <pre className="bg-light border rounded p-3">npm install bootstrap</pre>

      <p>2. Import vào src/index.js:</p>
      <pre className="bg-light border rounded p-3">
{`import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';`}
      </pre>

      <p>3. Kiểm tra bằng một cái nút, nếu ra nút xanh là chạy được:</p>
      <button className="btn btn-primary">Test</button>

      <p className="text-muted mt-3">
        Trong JSX dùng className chứ không dùng class.
      </p>
    </div>
  );
}

export default Exercise5;
