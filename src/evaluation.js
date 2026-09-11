// Yêu cầu 7: Promise - mô phỏng đánh giá sinh viên bất đồng bộ
export const evaluateStudent = (student) => {
return new Promise((resolve) => {
// Giả lập độ trễ 1.5s (gọi API thực tế)
setTimeout(() => {
const avg = parseFloat(student.calculateAverage());
let result;

if (avg >= 8) result = '🎉 Xuất sắc - Sinh viên xuất sắc!';
else if (avg >= 6.5) result = '👍 Giỏi - Kết quả tốt!';
else if (avg >= 5) result = '⚠️ Trung bình - Cần cố gắng hơn';
else result = '❌ Yếu - Cần học lại';

resolve(result);
}, 1500);
});
};

// ===== TÍNH NĂNG MỚI: Async/Await =====
export const evaluateStudentAsync = async (student) => {
try {
const avg = parseFloat(student.calculateAverage());
// Mô phỏng gọi API
await new Promise((resolve) => setTimeout(resolve, 1000));
const result = {
student: student.name,
average: avg,
grade: student.grade,
status: avg >= 5 ? 'Đạt' : 'Không đạt',
passed: avg >= 5,
scores: student.scores,
stats: student.getStats(),
};
return result;
} catch (error) {
throw new Error(`Lỗi đánh giá: ${error.message}`);
}
};

// ===== TÍNH NĂNG MỚI: Đánh giá nhiều sinh viên =====
export const evaluateClass = async (students) => {
const results = await Promise.all(
students.map(async (student) => {
const result = await evaluateStudentAsync(student);
return result;
})
);
return {
total: results.length,
passed: results.filter((r) => r.passed).length,
failed: results.filter((r) => !r.passed).length,
classAverage:
results.reduce((sum, r) => sum + r.average, 0) / results.length,
students: results,
};
};
