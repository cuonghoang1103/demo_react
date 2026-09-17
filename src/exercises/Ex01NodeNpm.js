import { Table } from 'react-bootstrap';
import { KhungBaiTap, KhoiLam, Ma, Bay } from '../components/KhungBaiTap';

/**
 * Exercise 1 — Cài Node.js & npm.
 *
 * Bài này không có mã để chạy trong trình duyệt, nên phần "bài làm" là các
 * lệnh đã chạy và kết quả in ra thật trên máy làm bài.
 */

/** Kết quả thật, chạy trên máy làm bài ngày 18/09/2026. */
const DA_KIEM = [
  { lenh: 'node -v', ketQua: 'v22.21.0', y: 'Node.js LTS đã cài và nằm trong PATH' },
  { lenh: 'npm -v', ketQua: '10.9.4', y: 'npm đi kèm trình cài Node' },
  { lenh: 'git --version', ketQua: 'git version 2.51.1', y: 'Chuẩn bị sẵn cho Exercise 3' },
];

export default function Ex01NodeNpm() {
  return (
    <KhungBaiTap
      so={1}
      tieuDe="Cài Node.js & npm"
      chuong="Chương 1"
      slot="Slot 1 · slide 20"
      mucTieu="Đưa Node.js (môi trường chạy JavaScript) và npm (trình quản lý package) lên máy — nền tảng cho mọi bài sau."
      yeuCau={[
        'Tải bản LTS ở nodejs.org (không lấy bản Current).',
        'Chạy trình cài, giữ tuỳ chọn mặc định (đã gồm npm và "Add to PATH").',
        'Kiểm bằng node -v và npm -v.',
      ]}
    >
      <KhoiLam tieuDe="Các bước đã làm">
        <ol className="mb-3">
          <li>
            Mở <a href="https://nodejs.org" target="_blank" rel="noreferrer">nodejs.org</a>, chọn bản{' '}
            <strong>LTS</strong> — bản Current mới hơn nhưng đổi API thường xuyên, không hợp để học.
          </li>
          <li>
            Chạy trình cài theo hệ điều hành: <code>.msi</code> trên Windows, <code>.pkg</code> trên
            macOS, còn Linux thì nên dùng <code>nvm</code> thay vì gói của bản phân phối.
          </li>
          <li>Mở terminal MỚI rồi chạy hai lệnh kiểm.</li>
        </ol>
        <Ma>{`$ node -v
v22.21.0
$ npm -v
10.9.4`}</Ma>
      </KhoiLam>

      <KhoiLam tieuDe="Kết quả kiểm trên máy làm bài" phu="Chạy thật ngày 18/09/2026">
        <Table bordered hover responsive size="sm" className="mb-0">
          <thead className="table-light">
            <tr>
              <th style={{ width: '25%' }}>Lệnh</th>
              <th style={{ width: '30%' }}>Kết quả in ra</th>
              <th>Nghĩa là</th>
            </tr>
          </thead>
          <tbody>
            {DA_KIEM.map((d) => (
              <tr key={d.lenh}>
                <td><code>{d.lenh}</code></td>
                <td className="text-success fw-semibold">{d.ketQua}</td>
                <td>{d.y}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </KhoiLam>

      <Bay>
        Sau khi cài xong, terminal <em>đang mở sẵn</em> vẫn dùng PATH cũ. Phải đóng và mở lại
        terminal (hoặc cả VS Code) trước khi chạy <code>node -v</code>, nếu không sẽ báo{' '}
        <code>command not found</code> dù Node đã nằm trên máy.
      </Bay>
    </KhungBaiTap>
  );
}
