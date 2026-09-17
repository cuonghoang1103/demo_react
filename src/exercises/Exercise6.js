// Exercise 6 - Dung layout bang he luoi cua Bootstrap

function Exercise6() {
  return (
    <div>
      <h3>Exercise 6 — Layout bằng lưới Bootstrap</h3>

      <div className="container border rounded p-2 mb-3">
        <div className="row mb-2">
          <header className="col-12">
            <div className="bg-primary text-white rounded p-3 text-center">Header</div>
          </header>
        </div>

        <div className="row g-2 mb-2">
          <main className="col-12 col-md-8">
            <div className="border rounded p-3 h-100">Nội dung chính (col-12 col-md-8)</div>
          </main>
          <aside className="col-12 col-md-4">
            <div className="border rounded p-3 h-100">Sidebar (col-12 col-md-4)</div>
          </aside>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-2 mb-2">
          <div className="col"><div className="border rounded p-3 text-center">Card 1</div></div>
          <div className="col"><div className="border rounded p-3 text-center">Card 2</div></div>
          <div className="col"><div className="border rounded p-3 text-center">Card 3</div></div>
        </div>

        <div className="row">
          <footer className="col-12">
            <div className="bg-dark text-white rounded p-3 text-center">Footer</div>
          </footer>
        </div>
      </div>

      <p>Các mốc breakpoint của Bootstrap 5:</p>
      <ul>
        <li>sm ≥ 576px, md ≥ 768px, lg ≥ 992px, xl ≥ 1200px, xxl ≥ 1400px</li>
      </ul>
      <p className="text-muted">
        Viết col-12 trước rồi mới thêm col-md-8. Thu nhỏ cửa sổ để xem layout xếp lại thành 1 cột.
      </p>
    </div>
  );
}

export default Exercise6;
