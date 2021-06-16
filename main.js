const text1 = document.getElementById(`text1`);
const text2 = document.getElementById(`text2`);
const text3 = document.getElementById(`text3`);
const text = [text1, text2, text3];

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    curData: 0,
    next() {
        if (this.curData < this.data.length) {
            return {
                done: false,
                value: this.data[this.curData++]
            };
        } else {
            this.curData = 0
            return {
                done: false,
                value: this.data[this.curData++]
            };
        }
    },
};

const changeStyle = function (event) {
    event.target.style.background = colors.next().value
    console.log(event.target)
}
text.forEach(item => {
    item.addEventListener('click', changeStyle)
})