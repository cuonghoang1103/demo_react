// Exercise 4 - JSX va ES6: luyen cac method cua mang

import { people, isTeen, numbers, companies, ages, courses } from '../data/lab';

// Part A
const firstTeen = people.find(isTeen);
const allTeens = people.filter(isTeen);
const everyTeen = people.every(isTeen);
const someTeen = people.some(isTeen);

// Part B
const sum = numbers.reduce((acc, n) => acc + n, 0);
const product = numbers.reduce((acc, n) => acc * n, 1);

// Part C
const after1987 = companies.filter((c) => c.start > 1987);
const retail = companies
  .filter((c) => c.category === 'Retail')
  .map((c) => ({ ...c, start: c.start + 1 }));

// copy mang truoc khi sort vi sort() sua thang mang goc
const byEndYear = [...companies].sort((a, b) => a.end - b.end);
const agesDesc = [...ages].sort((a, b) => b - a);

companies.forEach((c) => console.log(c.name));

// Part D - navbar tach thanh component rieng
function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark rounded px-3">
      <span className="navbar-brand">FER202</span>
      <div className="navbar-nav flex-row gap-3">
        <a className="nav-link" href="#home">Trang chủ</a>
        <a className="nav-link" href="#courses">Khoá học</a>
      </div>
    </nav>
  );
}

function Exercise4() {
  return (
    <div>
      <h3>Exercise 4 — JSX & ES6</h3>

      <h5 className="mt-4">Part A — mảng people</h5>
      <ul>
        <li>find: {firstTeen.name} ({firstTeen.age} tuổi)</li>
        <li>filter: {allTeens.map((p) => p.name).join(', ')}</li>
        <li>every: {String(everyTeen)}</li>
        <li>some: {String(someTeen)}</li>
      </ul>

      <h5 className="mt-4">Part B — reduce</h5>
      <ul>
        <li>Tổng: {sum}</li>
        <li>Tích: {product}</li>
      </ul>

      <h5 className="mt-4">Part C — mảng companies</h5>
      <p>Thành lập sau 1987: {after1987.map((c) => c.name).join(', ')}</p>

      <p>Retail, cộng 1 vào năm bắt đầu:</p>
      <div className="row row-cols-1 row-cols-md-3 g-2 mb-3">
        {retail.map((c) => (
          <div className="col" key={c.name}>
            <div className="border rounded p-2">
              <p className="mb-1 fw-bold">{c.name}</p>
              <p className="mb-1">{c.category}</p>
              <p className="mb-0">{c.start} - {c.end}</p>
            </div>
          </div>
        ))}
      </div>

      <p>Sắp xếp theo năm kết thúc:</p>
      <table className="table table-sm table-bordered">
        <thead>
          <tr><th>Tên</th><th>Ngành</th><th>Bắt đầu</th><th>Kết thúc</th></tr>
        </thead>
        <tbody>
          {byEndYear.map((c) => (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.category}</td>
              <td>{c.start}</td>
              <td>{c.end}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Tuổi giảm dần: {agesDesc.join(', ')}</p>

      <h5 className="mt-4">Part D — JSX</h5>
      <NavBar />

      <p className="mt-3">
        FER202 dạy lập trình front-end bằng React: JSX, component, props, state,
        hooks, router và gọi API.
      </p>

      <table className="table table-striped table-bordered">
        <thead>
          <tr><th>Mã</th><th>Tên môn</th><th>Tín chỉ</th></tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Exercise4;
