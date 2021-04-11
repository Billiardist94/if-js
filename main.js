// ----------------6.1.----------------
let user = 'John Doe';
console.log(user);
// ----------------6.3.----------------
const student = 'Pavel';
console.log(student);
// ----------------6.5.----------------
user = student;
// Значение переменной user равно значению переменной student, а именно 'Pavel'
console.log(user);
// ----------------7.1.----------------
let test = 1;
++test;
test += '1';
// Значение переменной test равно '21'
console.log(test);
console.log(typeof test);
// ----------------7.6.----------------
test -= 1;
// Значение переменной test равно 20
console.log(test);
console.log(typeof test);
// ----------------7.9.----------------
test = !!test;
// Значение переменной test равно true
console.log(test);
console.log(typeof test);
// ----------------8.0.----------------
test = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < test.length; i++) {
  result *= test[i];
}
console.log(result);
// ----------------9.0.----------------
test = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < test.length; i++) {
  const result = test[i];
  if (result > 5 && result < 10) {
    console.log(result);
  }
}
// ----------------10.0.----------------
test = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < test.length; i++) {
  const result = test[i];
  if (result % 2 === 0 && result !== 0) {
    console.log(result);
  }
}
