import { Alert, Badge, Card } from 'react-bootstrap';

/**
 * Khung chung cho mỗi trang bài tập.
 *
 * Mọi bài đều trình bày cùng một thứ tự để cô giáo chấm nhanh:
 *   Đề bài (goal) → Yêu cầu (từng gạch đầu dòng) → Bài làm chạy thật → Ghi chú/bẫy.
 */
export function KhungBaiTap({ so, tieuDe, chuong, slot, mucTieu, yeuCau = [], children }) {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
        <Badge bg="primary" className="fs-6">Exercise {so}</Badge>
        <h2 className="h4 mb-0">{tieuDe}</h2>
      </div>
      <p className="text-muted small mb-3">
        {chuong}
        {slot ? ` · ${slot}` : ''}
      </p>

      <Alert variant="light" className="border">
        <strong>Mục tiêu:</strong> {mucTieu}
        {yeuCau.length > 0 && (
          <ul className="mb-0 mt-2">
            {yeuCau.map((y, i) => (
              <li key={i}>{y}</li>
            ))}
          </ul>
        )}
      </Alert>

      {children}
    </div>
  );
}

/** Một khối "bài làm" có tiêu đề — dùng lặp lại trong mỗi bài. */
export function KhoiLam({ tieuDe, phu, children }) {
  return (
    <Card className="mb-3">
      <Card.Header className="bg-white">
        <strong>{tieuDe}</strong>
        {phu && <div className="text-muted small">{phu}</div>}
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

/**
 * Khối mã nguồn.
 *
 * `children` là một chuỗi thường — KHÔNG phải JSX — nên viết được dấu ngoặc
 * nhọn, dấu nháy và xuống dòng y như trong file gốc mà không phải escape.
 */
export function Ma({ children }) {
  return (
    <pre className="bg-dark text-light rounded p-3 mb-0 overflow-auto">
      <code>{children}</code>
    </pre>
  );
}

/** Kết quả in ra — tách khỏi mã để nhìn là biết đâu là đề, đâu là output. */
export function KetQua({ nhan = 'Kết quả', children }) {
  return (
    <div className="border-start border-4 border-success ps-3 py-1 my-2">
      <div className="text-success small fw-semibold">{nhan}</div>
      <div>{children}</div>
    </div>
  );
}

/** Bẫy / lưu ý — đúng những chỗ đề bài cảnh báo. */
export function Bay({ children }) {
  return (
    <Alert variant="warning" className="mb-3">
      <strong>⚠️ Bẫy:</strong> {children}
    </Alert>
  );
}
