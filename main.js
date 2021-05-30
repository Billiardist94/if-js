//----------------5.0.----------------
function getNewDate(date) {
    let year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return day + '.' + month + '.' + year;
}
const newDate = getNewDate;
console.log(newDate('2020-11-26'))
//----------------6.0.----------------
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];
function checkMatching(re) {
    const reUp = re.toUpperCase()
    for (i in data) {
        const list = (data[i].country + ', ' + data[i].city + ', ' + data[i].hotel);
        const listUp = list.toUpperCase()
        if (listUp.includes(reUp)) console.log(list)
    }
}
checkMatching(prompt('Enter the string: '))
