// Exercise 1 - Cai dat Node.js va npm

function Exercise1() {
  return (
    <div>
      <h3>Exercise 1 — Cài Node.js & npm</h3>

      <p>Các bước:</p>
      <ol>
        <li>Vào nodejs.org, tải bản LTS.</li>
        <li>Chạy file cài đặt, để nguyên các tuỳ chọn mặc định.</li>
        <li>Mở terminal mới rồi kiểm tra bằng 2 lệnh dưới đây.</li>
      </ol>

      <pre className="bg-light border rounded p-3">
{`$ node -v
v22.21.0
$ npm -v
10.9.4`}
      </pre>

      <p className="text-muted">
        Lưu ý: phải mở lại terminal sau khi cài, không thì vẫn báo command not found.
      </p>
    </div>
  );
}

export default Exercise1;
