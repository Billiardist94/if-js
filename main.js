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

//-----------------5.0.-----------------
function palindrom(pal) {
    const palUp = pal.toUpperCase()
    const list = [];
    for (i of palUp) {
        if (i === ' ' || i === '.' || i === ',' || i === '!') {
            continue
        } else {
            list.push(i);
        }
    }
    while (list.length > 0) {
        if (list[0] === list[list.length - 1]) {
            list.pop();
            list.shift();
            if (list.length === 0) {
                alert(`'${pal}' is a palindrom`)
            }
        } else {
            alert(`'${pal}' is not a palindrom`)
            break
        }
    }
}
const checkPal = palindrom;
checkPal(prompt('Enter some phrase: '));
//-----------------6.1.-----------------
let min = (a, b) => (a > b) ? b : (a === b) ? ('equal') : a;
alert(min(prompt('Enter the first number: '), prompt('Enter the second number: ')));
//-----------------6.2.-----------------
let max = (a, y) => (a > y) ? a : (a === y) ? ('equal') : y;
alert(max(prompt('Enter the first number: '), prompt('Enter the second number: ')));
//-----------------7.0.-----------------
const list = [];
function getRandomList(min, max) {
    for (let i = Math.floor(Math.random() * (max - min + 1) + min); list.length < 10; i = Math.floor(Math.random() * (max - min + 1) + min)) {
        list.push(i);
    }
    for (i of list) {
        if (i % 10 === 0){
            const index = list.indexOf(i);
            const str = String(i);
            const newStr = str.replace(/0/g, 'zero');
            list.splice(index, 1, newStr);
        }
    }
    return list;
}
const result = getRandomList;
console.log(result(0, 100));