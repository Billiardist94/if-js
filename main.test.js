//----------------5.0.----------------
function getNewDate(date) {
    let year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return day + '.' + month + '.' + year;
}
const newDate = getNewDate;
console.log(newDate('2020-11-26'))
test('Date conversion', () => {
    const date = '2020-11-26';
    let year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    expect(day + '.' + month + '.' + year).toBe('26.11.2020')
})