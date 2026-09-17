import { Table } from 'react-bootstrap';
import { KhungBaiTap, KhoiLam, Ma, KetQua, Bay } from '../components/KhungBaiTap';

/**
 * Exercise 3 — Git: cài, cấu hình, commit và push lên GitHub.
 *
 * Bằng chứng là repo thật của project này, không phải repo mẫu.
 */

const REPO = 'https://github.com/cuonghoang1103/demo_react';

const VONG_LAP = [
  ['git status', 'Xem file nào đã đổi, file nào đã vào staging.'],
  ['git add .', 'Đưa thay đổi vào staging.'],
  ['git commit -m "..."', 'Ghi một mốc vào lịch sử, kèm lời mô tả.'],
  ['git push', 'Đẩy các commit lên GitHub.'],
];

export default function Ex03Git() {
  return (
    <KhungBaiTap
      so={3}
      tieuDe="Git: cài, cấu hình & push"
      chuong="Chương 1"
      slot="Slot 1 · slide 26–33"
      mucTieu="Đưa project vào quản lý phiên bản và đẩy lên GitHub — đúng quy trình dùng để nộp mọi bài lab."
      yeuCau={[
        'Cài Git và kiểm bằng git --version.',
        'Cấu hình danh tính user.name / user.email (một lần mỗi máy).',
        'Tạo repository rỗng trên GitHub.',
        'init → add → commit → branch -M main → remote add → push.',
      ]}
    >
      <KhoiLam tieuDe="1 · Cài & kiểm">
        <Ma>{`$ git --version
git version 2.51.1`}</Ma>
      </KhoiLam>

      <KhoiLam tieuDe="2 · Cấu hình danh tính">
        <Ma>{`git config --global user.name  "Cuong Hoang"
git config --global user.email "cuongthai.xxx@gmail.com"`}</Ma>
        <p className="small text-muted mt-2 mb-0">
          Hai dòng này đi vào <strong>mọi</strong> commit về sau. Cấu hình sai thì GitHub không gắn
          commit vào tài khoản của bạn, và bài nộp trông như của người khác.
        </p>
      </KhoiLam>

      <KhoiLam tieuDe="3 · Khởi tạo, commit & push">
        <Ma>{`cd demo-se2059
git init
git add --all
git commit -m "Initial commit"
git branch -M main
git remote add origin ${REPO}
git push -u origin main`}</Ma>
      </KhoiLam>

      <KhoiLam tieuDe="4 · Vòng lặp hằng ngày sau lần push đầu">
        <Table bordered size="sm" responsive className="mb-0">
          <thead className="table-light">
            <tr>
              <th style={{ width: '35%' }}>Lệnh</th>
              <th>Làm gì</th>
            </tr>
          </thead>
          <tbody>
            {VONG_LAP.map(([lenh, y]) => (
              <tr key={lenh}>
                <td><code>{lenh}</code></td>
                <td>{y}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </KhoiLam>

      <KhoiLam tieuDe="Bằng chứng" phu="Repo thật của chính project này">
        <KetQua nhan="Remote đang cấu hình">
          <code>origin</code> →{' '}
          <a href={REPO} target="_blank" rel="noreferrer">{REPO}</a>
          <div className="small text-muted mt-1">
            Kiểm bằng <code>git remote -v</code>; lịch sử xem bằng <code>git log --oneline</code>.
          </div>
        </KetQua>
      </KhoiLam>

      <Bay>
        Hai bẫy kinh điển. <strong>(1)</strong> Phải có <code>.gitignore</code> chứa{' '}
        <code>node_modules/</code> TRƯỚC lần <code>git add --all</code> đầu tiên, không thì bạn
        commit vài chục nghìn file — CRA đã sinh sẵn file này.{' '}
        <strong>(2)</strong> Slide ghi <code>origin master</code>, nhưng repo GitHub mới mặc định
        nhánh <code>main</code>. Dùng <code>git branch -M main</code> như trên cho khớp.
      </Bay>
    </KhungBaiTap>
  );
}
