// Exercise 7 - Lam mot luoi card bang Bootstrap

import { cardItems } from '../data/lab';

function Exercise7() {
  return (
    <div>
      <h3>Exercise 7 — Cột thẻ (Cards)</h3>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardItems.map((item) => (
          <div className="col" key={item.id}>
            {/* h-100 de cac card trong cung 1 hang cao bang nhau */}
            <div className="card h-100">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <a href="#xem" className="btn btn-primary mt-auto">Xem</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercise7;
