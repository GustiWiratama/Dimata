let student = {
  "first Name": "John",
  grade: "A",
  address: "Nganjuk",
  SayHi() {
    return this["first Name"];
  },
  sayGrade() {
    return this.grade;
  },
  sayAdress() {
    return this.address;
  },
};

console.log(student["first Name"]);
console.log(student.grade);
console.log(student.address);

console.log(student);

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}
