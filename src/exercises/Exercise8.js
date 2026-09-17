// Exercise 8 - Form controls cua Bootstrap, form controlled trong React

import { useState } from 'react';

function Exercise8() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    className: '',
    gender: 'nam',
    subscribe: false,
  });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const valid = form.fullName !== '' && emailOk && form.className !== '';

  const handleSubmit = (e) => {
    e.preventDefault(); // khong cho trang tu tai lai
    setSubmitted(form);
  };

  return (
    <div>
      <h3>Exercise 8 — Form controls</h3>

      <form onSubmit={handleSubmit} className="mt-3" style={{ maxWidth: 500 }}>
        <div className="mb-3">
          <label className="form-label" htmlFor="fullName">Họ và tên</label>
          <input
            id="fullName"
            name="fullName"
            className="form-control"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={form.email !== '' && !emailOk ? 'form-control is-invalid' : 'form-control'}
            value={form.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">Email không đúng định dạng</div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="className">Lớp</label>
          <select
            id="className"
            name="className"
            className="form-select"
            value={form.className}
            onChange={handleChange}
          >
            <option value="">-- Chọn lớp --</option>
            <option value="SE2059">SE2059</option>
            <option value="SE2060">SE2060</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Giới tính</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="nam"
                value="nam"
                checked={form.gender === 'nam'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="nam">Nam</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="nu"
                value="nu"
                checked={form.gender === 'nu'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="nu">Nữ</label>
            </div>
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={form.subscribe}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="subscribe">Nhận thông báo môn học</label>
        </div>

        <button className="btn btn-primary" type="submit" disabled={!valid}>Gửi</button>
      </form>

      {submitted && (
        <div className="alert alert-success mt-3" style={{ maxWidth: 500 }}>
          <p className="mb-1">Đã gửi:</p>
          <p className="mb-0">
            {submitted.fullName} — {submitted.email} — {submitted.className}
          </p>
        </div>
      )}

      <p className="text-muted mt-3">
        Mỗi input lấy value từ state và có onChange cập nhật state (controlled component).
      </p>
    </div>
  );
}

export default Exercise8;
