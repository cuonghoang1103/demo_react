// Exercise 3 - Git: cai dat, cau hinh va push len GitHub

function Exercise3() {
  return (
    <div>
      <h3>Exercise 3 — Git: cài, cấu hình & push</h3>

      <p>1. Kiểm tra đã cài git chưa:</p>
      <pre className="bg-light border rounded p-3">git --version</pre>

      <p>2. Cấu hình tên và email (chỉ làm 1 lần):</p>
      <pre className="bg-light border rounded p-3">
{`git config --global user.name "Ten cua ban"
git config --global user.email "email@example.com"`}
      </pre>

      <p>3. Tạo repo trên GitHub rồi push code lên:</p>
      <pre className="bg-light border rounded p-3">
{`git init
git add --all
git commit -m "Initial commit"
git branch -M main
git remote add origin <link repo>
git push -u origin main`}
      </pre>

      <p>4. Những lần sau chỉ cần:</p>
      <pre className="bg-light border rounded p-3">
{`git add .
git commit -m "mo ta thay doi"
git push`}
      </pre>

      <p className="text-muted">
        File .gitignore phải có node_modules trước khi add lần đầu, không thì commit rất nhiều file.
      </p>
    </div>
  );
}

export default Exercise3;
