import { useState } from 'react';
import './App.css';
import { Student, StudentCollection, createScores } from './Student';
import { evaluateStudent, evaluateStudentAsync } from './evaluation';

// ===== KHỞI TẠO DỮ LIỆU =====
const student1 = new Student('Nguyễn Văn A', 20, createScores(8, 9, 10));
const student2 = new Student('Trần Thị B', 21, createScores(6, 7, 5, 4));
const student3 = new Student('Lê Văn C', 19, createScores(9, 8.5, 9.5, 10));

// Spread operator - thêm điểm mới vào sinh viên 1
student1.addScores(9.5, 8.5);

// ===== TÍNH NĂNG MỚI: StudentCollection =====
const classRoom = new StudentCollection();
classRoom.add(student1).add(student2).add(student3);

// Destructuring - tách thuộc tính
const { name: s1Name, age: s1Age, scores: s1Scores, avg: s1Avg, grade: s1Grade } = student1.getInfo();
const { name: s2Name, scores: s2Scores, avg: s2Avg, grade: s2Grade } = student2.getInfo();

function App() {
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detailedResult, setDetailedResult] = useState(null);
  const [ranking, setRanking] = useState([]);

  const handleEvaluate = async () => {
    setLoading(true);
    setRating(null);
    const result = await evaluateStudent(student1);
    setRating(result);
    setLoading(false);
  };

  const handleDetailedEvaluate = async () => {
    setLoading(true);
    setDetailedResult(null);
    const result = await evaluateStudentAsync(student1);
    setDetailedResult(result);
    setLoading(false);
  };

  const handleShowRanking = () => {
    setRanking(classRoom.getRanking());
  };

  return (
    <div className="App">
      <h1>🎓 Student Management - ES6+ Features</h1>

      <section className="card">
        <h2>📋 XẾP HẠNG LỚP HỌC (NEW)</h2>
        <p><strong>Điểm TB lớp:</strong> {classRoom.getClassAverage()}</p>
        <button onClick={handleShowRanking}>📊 Xem xếp hạng</button>
        {ranking.length > 0 && (
          <table className="ranking-table">
            <thead>
              <tr><th>Hạng</th><th>Tên</th><th>Điểm TB</th><th>Xếp loại</th></tr>
            </thead>
            <tbody>
              {ranking.map((s, i) => (
                <tr key={s.name}>
                  <td>#{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.calculateAverage()}</td>
                  <td>{s.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="card">
        <h2>1️⃣ Sinh viên 1 - Xuất sắc ⭐</h2>
        <p><strong>Giới thiệu:</strong> {student1.introduce()}</p>
        <p><strong>Tên (destructured):</strong> {s1Name}</p>
        <p><strong>Tuổi (destructured):</strong> {s1Age}</p>
        <p><strong>Điểm gốc:</strong> [{createScores(8, 9, 10).join(', ')}]</p>
        <p><strong>Điểm sau spread [9.5, 8.5]:</strong> [{s1Scores.join(', ')}]</p>
        <p><strong>Điểm đậu (filter ≥ 5):</strong> [{student1.getPassingScores().join(', ')}]</p>
        <p><strong>Điểm rớt (NEW):</strong> [{student1.getFailingScores().join(', ')}]</p>
        <p><strong>Điểm tăng dần (NEW):</strong> [{student1.getSortedScores(true).join(', ')}]</p>
        <p><strong>Điểm giảm dần (NEW):</strong> [{student1.getSortedScores(false).join(', ')}]</p>
        <p><strong>Xếp loại (map):</strong> [{student1.getScoreLetters().join(' | ')}]</p>
        <p><strong>Tổng (reduce):</strong> {student1.getTotal()}</p>
        <p><strong>Điểm TB:</strong> <span className="highlight">{s1Avg}</span></p>
        <p><strong>Xếp loại (Getter):</strong> <span className="grade">{s1Grade}</span></p>
        <p><strong>JSON (NEW):</strong></p>
        <pre>{JSON.stringify(student1.toJSON(), null, 2)}</pre>
      </section>

      <section className="card">
        <h2>2️⃣ Sinh viên 2 - Cần cải thiện</h2>
        <p><strong>Giới thiệu:</strong> {student2.introduce()}</p>
        <p><strong>Điểm:</strong> [{s2Scores.join(', ')}]</p>
        <p><strong>Điểm đậu:</strong> [{student2.getPassingScores().join(', ')}]</p>
        <p><strong>Điểm rớt (NEW):</strong> [{student2.getFailingScores().join(', ')}]</p>
        <p><strong>Xếp loại:</strong> [{student2.getScoreLetters().join(' | ')}]</p>
        <p><strong>Điểm TB:</strong> <span className="highlight">{s2Avg}</span></p>
        <p><strong>Xếp loại (Getter):</strong> <span className="grade warning">{s2Grade}</span></p>
      </section>

      <section className="card">
        <h2>3️⃣ Sinh viên 3 - Mới thêm (NEW)</h2>
        <p><strong>Giới thiệu:</strong> {student3.introduce()}</p>
        <p><strong>Điểm:</strong> [{student3.scores.join(', ')}]</p>
        <p><strong>Thống kê (NEW):</strong></p>
        <ul>
          <li>Cao nhất: {student3.getStats().highest}</li>
          <li>Thấp nhất: {student3.getStats().lowest}</li>
          <li>Trung vị: {student3.getStats().median}</li>
          <li>Số điểm: {student3.getStats().count}</li>
          <li>Đậu: {student3.getStats().passCount} | Rớt: {student3.getStats().failCount}</li>
        </ul>
        <p><strong>Xếp loại:</strong> <span className="grade">{student3.grade}</span></p>
      </section>

      <section className="card">
        <h2>4️⃣ Promise & Async/Await (NEW)</h2>
        <div className="button-group">
          <button onClick={handleEvaluate} disabled={loading}>
            {loading ? '⏳...' : '🚀 Đánh giá (Promise)'}
          </button>
          <button onClick={handleDetailedEvaluate} disabled={loading}>
            {loading ? '⏳...' : '📝 Chi tiết (async/await)'}
          </button>
        </div>

        {rating && (
          <div className="rating">
            <p>🎯 <strong>{s1Name}</strong> - Điểm TB: <strong>{s1Avg}</strong></p>
            <p>Kết quả: <strong>{rating}</strong></p>
          </div>
        )}

        {detailedResult && (
          <div className="rating detailed">
            <h4>📊 Kết quả chi tiết (async/await):</h4>
            <pre>{JSON.stringify(detailedResult, null, 2)}</pre>
          </div>
        )}
      </section>

      <footer className="footer">
        <p>📚 ES6+: Class, extends, Rest, Spread, Destructuring, Getter/Setter, Private (#field), Static method, async/await</p>
      </footer>
    </div>
  );
}

export default App;
