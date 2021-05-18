//----------------5.0.----------------
const str = 'шалаш'
console.log(str.toLowerCase() === str.split('').reverse().join('').toLowerCase());
test('Palindrom', () => {
    const str = 'шалаш';
    expect(str.toLowerCase() === str.split('').reverse().join('').toLowerCase()).toBe(true)
})