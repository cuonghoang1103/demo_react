import { Person } from './Person';

// Yêu cầu 3: Rest Parameter - gom nhiều điểm thành mảng
export const createScores = (...values) => values;

// Yêu cầu 2: Student extends Person
export class Student extends Person {
#grade = ''; // Private field (ES2022)

constructor(name, age, scores = []) {
super(name, age);
this._scores = scores;
this.#updateGrade();
}

// ===== GETTER / SETTER =====
get scores() {
return this._scores;
}

set scores(newScores) {
this._scores = newScores;
this.#updateGrade();
}

get grade() {
return this.#grade;
}

// ===== Private method =====
#updateGrade() {
const avg = this.calculateAverage();
if (avg >= 8) this.#grade = 'Xuất sắc';
else if (avg >= 6.5) this.#grade = 'Giỏi';
else if (avg >= 5) this.#grade = 'Trung bình';
else this.#grade = 'Yếu';
}

// Tính điểm trung bình bằng reduce()
calculateAverage() {
if (this._scores.length === 0) return 0;
const total = this._scores.reduce((sum, s) => sum + s, 0);
return (total / this._scores.length).toFixed(2);
}

// Yêu cầu 5: Spread Operator - gộp điểm mới vào danh sách cũ
addScores(...newScores) {
this._scores = [...this._scores, ...newScores];
this.#updateGrade();
}

// Yêu cầu 6: Array methods
getPassingScores() {
return this._scores.filter((s) => s >= 5);
}

// Tính năng mới: Lọc điểm dưới 5
getFailingScores() {
return this._scores.filter((s) => s < 5);
}

getScoreLetters() {
return this._scores.map((s) => {
if (s >= 8) return `${s} (Giỏi)`;
if (s >= 6.5) return `${s} (Khá)`;
if (s >= 5) return `${s} (Trung bình)`;
return `${s} (Yếu)`;
});
}

getTotal() {
return this._scores.reduce((sum, s) => sum + s, 0);
}

// Tính năng mới: Sắp xếp điểm
getSortedScores(ascending = true) {
return [...this._scores].sort((a, b) => ascending ? a - b : b - a);
}

// Tính năng mới: Thống kê điểm
getStats() {
const sorted = [...this._scores].sort((a, b) => b - a);
return {
highest: Math.max(...this._scores),
lowest: Math.min(...this._scores),
median: sorted[Math.floor(sorted.length / 2)],
count: this._scores.length,
passCount: this.getPassingScores().length,
failCount: this.getFailingScores().length,
};
}

// Tính năng mới: Xuất JSON
toJSON() {
return {
name: this.name,
age: this.age,
scores: this._scores,
average: this.calculateAverage(),
grade: this.grade,
};
}

// Yêu cầu 4: Destructuring - tách name và age từ object
getInfo() {
const { name, age } = this;
return {
name,
age,
scores: this._scores,
avg: this.calculateAverage(),
grade: this.grade,
};
}

// Hiển thị đầy đủ thông tin
displayInfo() {
return `${this.introduce()} | Điểm: [${this._scores.join(', ')}] | TB: ${this.calculateAverage()}`;
}

// ===== STATIC METHODS =====
static fromJSON(json) {
return new Student(json.name, json.age, json.scores);
}

static compareByAverage(a, b) {
return parseFloat(b.calculateAverage()) - parseFloat(a.calculateAverage());
}
}

// Tính năng mới: Class quản lý nhiều sinh viên
export class StudentCollection {
#list = [];

add(student) {
this.#list.push(student);
return this;
}

remove(name) {
this.#list = this.#list.filter((s) => s.name !== name);
return this;
}

getAll() {
return this.#list;
}

getTopPerformers(minAvg = 8) {
return this.#list
.filter((s) => parseFloat(s.calculateAverage()) >= minAvg)
.sort(Student.compareByAverage);
}

getRanking() {
return [...this.#list].sort(Student.compareByAverage);
}

getClassAverage() {
if (this.#list.length === 0) return 0;
const total = this.#list.reduce(
(sum, s) => sum + parseFloat(s.calculateAverage()),
0
);
return (total / this.#list.length).toFixed(2);
}
}
