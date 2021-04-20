//--------------5.0.--------------
const sum = function (num1) {
    return function (num2) {
        return num1 + num2;
    }
}
console.log(sum(2)(3))
//--------------6.0.--------------
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
let curColor1 = 0, curColor2 = 0, curColor3 = 0;
text1.addEventListener('click', () => {
    text1.style.background = colors[curColor1];
    curColor1 ++;
    if (curColor1 === colors.length) curColor1 = 0;
})
text2.addEventListener('click', () => {
    text2.style.background = colors[curColor2];
    curColor2 ++;
    if (curColor2 === colors.length) curColor2 = 0;
})
text3.addEventListener('click', () => {
    text3.style.background = colors[curColor3];
    curColor3 ++;
    if (curColor3 === colors.length) curColor3 = 0;
})
