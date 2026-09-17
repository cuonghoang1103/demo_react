// Exercise 9 - React Component 1

import { useState } from 'react';

function Profile() {
  return (
    <div>
      <h5>Hoàng Mạnh Cường</h5>
      <p>Sinh viên lớp SE2059, đang học môn FER202.</p>
    </div>
  );
}

function HelloWorld() {
  return <h4>Hello, World!</h4>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex align-items-center gap-2">
      <button className="btn btn-outline-danger" onClick={() => setCount(count - 1)}>-</button>
      <span className="fs-4">{count}</span>
      <button className="btn btn-outline-success" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function Title({ text }) {
  return <h5>{text}</h5>;
}

function Description({ text }) {
  return <p className="mb-0">{text}</p>;
}

function Image({ url }) {
  return <img src={url} alt="" width={120} className="me-3" />;
}

function SimpleCard({ item }) {
  return (
    <div className="card p-3">
      <div className="d-flex">
        <Image url={item.imageUrl} />
        <div>
          <Title text={item.title} />
          <Description text={item.description} />
        </div>
      </div>
    </div>
  );
}

const items = [
  { id: 1, title: 'Học React', description: 'Buổi 4: Bootstrap, lưới, card, form.', imageUrl: '/images/card1.svg' },
  { id: 2, title: 'Component', description: 'Component là một hàm trả về JSX.', imageUrl: '/images/card2.svg' },
];

function Exercise9() {
  return (
    <div>
      <h3>Exercise 9 — React Component 1</h3>

      <h5 className="mt-4">1. Profile</h5>
      <Profile />

      <h5 className="mt-4">2. Hello World</h5>
      <HelloWorld />

      <h5 className="mt-4">3. Counter</h5>
      <Counter />

      <h5 className="mt-4">4. SimpleCard</h5>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {items.map((item) => (
          <div className="col" key={item.id}>
            <SimpleCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercise9;
