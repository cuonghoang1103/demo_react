// Person.js - Lớp cha theo yêu cầu 1
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method introduce() để hiển thị thông tin cá nhân
  introduce() {
    return `Xin chào, tôi là ${this.name}, ${this.age} tuổi.`;
  }
}
