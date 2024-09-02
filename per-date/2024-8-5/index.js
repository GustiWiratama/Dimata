let students = ["agunk", "abie", "junet", "yas2", "oxo"];
let hasilMapping = [];

console.log(
  students.map((students) => {
    return students.toUpperCase();
  })
);

let v = 1;
function fungsi(callback) {
  callback();
}

fungsi(() => {
  v = 10;
});
