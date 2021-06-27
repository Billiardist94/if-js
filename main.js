//__________5.0.__________
const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];
const bubbleSort = function (arr) {

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].name > arr[i + 1].name) {
                let current = arr[i].name;
                arr[i].name = arr[i + 1].name
                arr[i + 1].name = current
            }
        }
    }
    return arr
}
console.log(bubbleSort(data));
//__________6.0.__________
//____________________________________Persons________________________________________
//___<div class="search-form-group persons col-3 col-md-6 col-sm-6">___
const personsDiv = document.createElement('div');
personsDiv.classList.add('persons')
personsDiv.classList.add('search-form-group');
personsDiv.classList.add('col-3');
personsDiv.classList.add('col-md-6');
personsDiv.classList.add('col-sm-6');
const datesDiv = document.querySelector('.dates')
datesDiv.after(personsDiv);
//___<input type="text" id="persons">___
const inputDiv = document.createElement('div');
inputDiv.id = 'persons';
personsDiv.insertAdjacentElement('afterbegin', inputDiv);
//___<span class="guests_count">___
const guestsCount = document.createElement('span');
guestsCount.classList.add('guests_count');
inputDiv.appendChild(guestsCount);
//___<span>2</span>___
const adultsCount = document.createElement('span');
adultsCount.innerHTML = '2 Adults';
guestsCount.insertAdjacentElement('afterbegin', adultsCount);
//___<span>0</span>___
const childrenCount = document.createElement('span');
childrenCount.innerHTML = `${'&nbsp;—&nbsp;'} ${'0 Children'}`;
adultsCount.after(childrenCount);
//___<span>1</span>___
const roomsCount = document.createElement('span');
roomsCount.innerHTML = `${'&nbsp;—&nbsp;'} ${'1 Room'}`;
childrenCount.after(roomsCount);

//___<div class="block">___
const personsBlockDiv = document.createElement('div');
personsBlockDiv.classList.add('block');
personsDiv.insertAdjacentElement("beforeend", personsBlockDiv);
//___<div class="box">___
const personsBoxDiv = document.createElement('div');
personsBoxDiv.classList.add('box');
personsBlockDiv.appendChild(personsBoxDiv);
//____________________________________Adults__________________________________________
//___<div class="item">___
const personsItemDiv1 = document.createElement('div');
personsItemDiv1.classList.add('item');
personsBoxDiv.insertAdjacentElement('afterbegin', personsItemDiv1);
personsItemDiv1.innerHTML = '<span>Adults</span>';
//___<div class="choose">___
const personsItem1Div = document.createElement('div');
personsItem1Div.classList.add('choose');
personsItem1Div.innerHTML = '<span id="adultsNum">2</span>';
personsItemDiv1.insertAdjacentElement('beforeend', personsItem1Div);
//___<input style="display: none" class="input" type="number" min="0" max="30" value="2">___
const personsItem1Input = document.createElement('input');
personsItem1Input.classList.add('input');
personsItem1Input.style = 'display: none';
personsItem1Input.type = 'number';
personsItem1Input.setAttribute('value', '2');
personsItem1Div.insertAdjacentElement('afterbegin', personsItem1Input);
//___<button type="button" class="btn"><span>-</span></button>___
const personsItem1Btn1 = document.createElement('button');
personsItem1Btn1.classList.add('btn');
personsItem1Btn1.type = 'button';
personsItem1Input.after(personsItem1Btn1);
personsItem1Btn1.innerHTML = '<span>-</span>';
//___<button type="button" class="btn"><span>+</span></button>___
const personsItem1Btn2 = document.createElement('button');
personsItem1Btn2.classList.add('btn');
personsItem1Btn2.type = 'button';
personsItem1Btn2.innerHTML = '<span>+</span>';
personsItem1Div.insertAdjacentElement("beforeend", personsItem1Btn2);
//____________________________________Children________________________________________
//___<div class="item">___
const personsItemDiv2 = document.createElement('div');
personsItemDiv2.classList.add('item');
personsItemDiv1.after(personsItemDiv2);
personsItemDiv2.innerHTML = '<span>Children</span>';
//___<div class="choose">___
const personsItem2Div = document.createElement('div');
personsItem2Div.classList.add('choose');
personsItem2Div.innerHTML = '<span id="childrenNum">0</span>';
personsItemDiv2.insertAdjacentElement('beforeend', personsItem2Div);
//___<input style="display: none" class="input" type="number" min="0" max="10" value="0">___
const personsItem2Input = document.createElement('input');
personsItem2Input.classList.add('input');
personsItem2Input.style = 'display: none';
personsItem2Input.type = 'number';
personsItem2Input.setAttribute('value', '0');
personsItem2Div.insertAdjacentElement('afterbegin', personsItem2Input);
//___<button type="button" class="btn"><span>-</span></button>___
const personsItem2Btn1 = document.createElement('button');
personsItem2Btn1.classList.add('btn');
personsItem2Btn1.classList.add('disabled-btn');
personsItem2Btn1.type = 'button';
personsItem2Input.after(personsItem2Btn1);
personsItem2Btn1.innerHTML = '<span>-</span>';
//___<button type="button" class="btn"><span>+</span></button>___
const personsItem2Btn2 = document.createElement('button');
personsItem2Btn2.classList.add('btn');
personsItem2Btn2.type = 'button';
personsItem2Btn2.innerHTML = '<span>+</span>';
personsItem2Div.insertAdjacentElement("beforeend", personsItem2Btn2);
//____________________________________Rooms________________________________________
//___<div class="item">___
const personsItemDiv3 = document.createElement('div');
personsItemDiv3.classList.add('item');
personsItemDiv2.after(personsItemDiv3);
personsItemDiv3.innerHTML = '<span>Rooms</span>';
//___<div class="choose">___
const personsItem3Div = document.createElement('div');
personsItem3Div.classList.add('choose');
personsItem3Div.innerHTML = '<span id="roomsNum">1</span>';
personsItemDiv3.insertAdjacentElement('beforeend', personsItem3Div);
//___<input style="display: none" class="input" type="number" min="0" max="30" value="0">___
const personsItem3Input = document.createElement('input');
personsItem3Input.classList.add('input');
personsItem3Input.style = 'display: none';
personsItem3Input.type = 'number';
personsItem3Input.setAttribute('value', '1');
personsItem3Div.insertAdjacentElement('afterbegin', personsItem3Input);
//___<button type="button" class="btn"><span>-</span></button>___
const personsItem3Btn1 = document.createElement('button');
personsItem3Btn1.classList.add('btn');
personsItem3Btn1.type = 'button';
personsItem3Input.after(personsItem3Btn1);
personsItem3Btn1.innerHTML = '<span>-</span>';
//___<button type="button" class="btn"><span>+</span></button>___
const personsItem3Btn2 = document.createElement('button');
personsItem3Btn2.classList.add('btn');
personsItem3Btn2.type = 'button';
personsItem3Btn2.innerHTML = '<span>+</span>';
personsItem3Div.insertAdjacentElement("beforeend", personsItem3Btn2);
//____________________________________Child age________________________________________
//___<div class="child-age">___
const personsChild = document.createElement('div');
personsChild.classList.add('child-age');
personsChild.style.display = 'none';
personsItemDiv3.after(personsChild);
//___<p class="child-age-span">What is the age of the child you’re travelling with?</p>___
const personsChildText = document.createElement('p');
personsChildText.classList.add('child-age-span');
personsChildText.innerText = 'What is the age of the child you’re travelling with?';
personsChild.appendChild(personsChildText);
//_________________________________________________________________________________
//___появление блока с фильтром___
const openBox = function (){
    display =  personsBlockDiv.style.display;
    if(display === 'none'){
        personsBlockDiv.style.display='block';
    } else {
        personsBlockDiv.style.display='none';
    }
};
inputDiv.addEventListener('click', openBox);
//___клик на кнопки +/-_________________________________________________________________________________
let adultsInt = Number.parseInt(personsItem1Input.value);
let adultsNum = document.querySelector('#adultsNum');
let childrenInt = Number.parseInt(personsItem2Input.value);
let childrenNum = document.querySelector('#childrenNum');
let roomsInt = Number.parseInt(personsItem3Input.value);
let roomsNum = document.querySelector('#roomsNum');
//________________________________клик по Adults________________________________________________
//___клик по +___
const clickPlusAdults = function (event) {
    adultsInt += 1;
    adultsNum.innerHTML = adultsInt;
    if (adultsInt === 1) {
        adultsCount.innerHTML = `${adultsInt} ${'Adult'}`;
    } else {
        adultsCount.innerHTML = `${adultsInt} ${'Adults'}`;
    }
    if (adultsInt < 1) {
        personsItem1Btn1.classList.add('disabled-btn');
        personsItem1Btn1.removeEventListener('click', clickMinusAdults)
    } else {
        personsItem1Btn1.classList.remove('disabled-btn')
        personsItem1Btn1.addEventListener('click', clickMinusAdults);
    }
    if (adultsInt > 29) {
        personsItem1Btn2.classList.add('disabled-btn');
        personsItem1Btn2.removeEventListener('click', clickPlusAdults)
    } else {
        personsItem1Btn2.classList.remove('disabled-btn')
        personsItem1Btn2.addEventListener('click', clickPlusAdults);
    }
};
personsItem1Btn2.addEventListener('click', clickPlusAdults);
// ___клик по -___
const clickMinusAdults = function (event) {
    adultsInt -= 1;
    adultsNum.innerHTML = adultsInt;
    if (adultsInt === 1) {
        adultsCount.innerHTML = `${adultsInt} ${'Adult'}`;
    } else {
        adultsCount.innerHTML = `${adultsInt} ${'Adults'}`;
    }
    if (adultsInt < 1) {
        personsItem1Btn1.classList.add('disabled-btn');
        personsItem1Btn1.removeEventListener('click', clickMinusAdults)
    } else {
        personsItem1Btn1.classList.remove('disabled-btn')
        personsItem1Btn1.addEventListener('click', clickMinusAdults);
    }
    if (adultsInt > 29) {
        personsItem1Btn2.classList.add('disabled-btn');
        personsItem1Btn2.removeEventListener('click', clickPlusAdults)
    } else {
        personsItem1Btn2.classList.remove('disabled-btn')
        personsItem1Btn2.addEventListener('click', clickPlusAdults);
    }
};
personsItem1Btn1.addEventListener('click', clickMinusAdults);
//________________________________клик по Children_______________________________________________
//___клик по +___
const clickPlusChildren = function (event) {
    childrenInt += 1;
    childrenNum.innerHTML = childrenInt;
    console.log(childrenInt)
    if (childrenInt === 1) {
        childrenCount.innerHTML = `${'&nbsp;—&nbsp;'} ${childrenInt} ${' Child'}`;
    } else {
        childrenCount.innerHTML = `${'&nbsp;—&nbsp;'} ${childrenInt} ${' Children'}`;
    }
    if (childrenInt < 1) {
        personsItem2Btn1.classList.add('disabled-btn');
        personsItem2Btn1.removeEventListener('click', clickMinusChildren)
    } else {
        personsItem2Btn1.classList.remove('disabled-btn')
        personsItem2Btn1.addEventListener('click', clickMinusChildren);
        personsChild.style.display = 'block';
    }
    if (childrenInt > 9) {
        personsItem2Btn2.classList.add('disabled-btn');
        personsItem2Btn2.removeEventListener('click', clickPlusChildren)
    } else {
        personsItem2Btn2.classList.remove('disabled-btn')
        personsItem2Btn2.addEventListener('click', clickPlusChildren);
    }

};
personsItem2Btn2.addEventListener('click', clickPlusChildren);
// ___клик по -___
const clickMinusChildren = function (event) {
    if (childrenInt === 0) {
        return
    }
    childrenInt -= 1;
    childrenNum.innerHTML = childrenInt;
    console.log(childrenInt)
    if (childrenInt === 1) {
        childrenCount.innerHTML = `${'&nbsp;—&nbsp;'} ${childrenInt} ${'Child'}`;
    } else {
        childrenCount.innerHTML = `${'&nbsp;—&nbsp;'} ${childrenInt} ${'Children'}`;
    }
    if (childrenInt < 1) {
        personsItem2Btn1.classList.add('disabled-btn');
        personsItem2Btn1.removeEventListener('click', clickMinusChildren)
        personsChild.style.display = 'none';
    } else {
        personsItem2Btn1.classList.remove('disabled-btn')
        personsItem2Btn1.addEventListener('click', clickMinusChildren);
    }
    if (childrenInt > 9) {
        personsItem2Btn2.classList.add('disabled-btn');
        personsItem2Btn2.removeEventListener('click', clickPlusChildren)
    } else {
        personsItem2Btn2.classList.remove('disabled-btn')
        personsItem2Btn2.addEventListener('click', clickPlusChildren);
    }
};
personsItem2Btn1.addEventListener('click', clickMinusChildren);
//_________________________________клик по Rooms________________________________________________
//___клик по +___
const clickPlusRooms = function (event) {
    roomsInt += 1;
    roomsNum.innerHTML = roomsInt;
    if (roomsInt === 1) {
        roomsCount.innerHTML = `${'&nbsp;—&nbsp;'} ${roomsInt} ${'Room'}`;
    } else {
        roomsCount.innerHTML = `${'&nbsp;—&nbsp;'} ${roomsInt} ${'Rooms'}`;
    }
    if (roomsInt < 1) {
        personsItem3Btn1.classList.add('disabled-btn');
        personsItem3Btn1.removeEventListener('click', clickMinusRooms)
    } else {
        personsItem3Btn1.classList.remove('disabled-btn')
        personsItem3Btn1.addEventListener('click', clickMinusRooms);
    }
    if (roomsInt > 29) {
        personsItem3Btn2.classList.add('disabled-btn');
        personsItem3Btn2.removeEventListener('click', clickPlusRooms)
    } else {
        personsItem3Btn2.classList.remove('disabled-btn')
        personsItem3Btn2.addEventListener('click', clickPlusRooms);
    }
};
personsItem3Btn2.addEventListener('click', clickPlusRooms);
// ___клик по -___
const clickMinusRooms = function (event) {
    roomsInt -= 1;
    roomsNum.innerHTML = roomsInt;
    if (roomsInt === 1) {
        roomsCount.innerHTML = `${'&nbsp;—&nbsp;'} ${roomsInt} ${'Room'}`;
    } else {
        roomsCount.innerHTML = `${'&nbsp;—&nbsp;'} ${roomsInt} ${'Rooms'}`;
    }
    if (roomsInt < 1) {
        personsItem3Btn1.classList.add('disabled-btn');
        personsItem3Btn1.removeEventListener('click', clickMinusRooms)
    } else {
        personsItem3Btn1.classList.remove('disabled-btn')
        personsItem3Btn1.addEventListener('click', clickMinusRooms);
    }
    if (roomsInt > 29) {
        personsItem3Btn2.classList.add('disabled-btn');
        personsItem3Btn2.removeEventListener('click', clickPlusRooms)
    } else {
        personsItem3Btn2.classList.remove('disabled-btn')
        personsItem3Btn2.addEventListener('click', clickPlusRooms);
    }
};
personsItem3Btn1.addEventListener('click', clickMinusRooms);
//_______________________________________________________________________________
//___добавление фильтра выбоора возраста ребенка___
const addChildSelection = function () {
    //___<select class="select-child-age">___
    let personsChildSelect = document.createElement('select');
    personsChildSelect.classList.add('select-child-age');
    personsChildSelect.name = 'select-child-age'
    personsChildSelect.innerHTML = `
    <option value="0">0 years old</option>
    <option value="1">1 years old</option>
    <option value="2">2 years old</option>
    <option value="3">3 years old</option>
    <option value="4">4 years old</option>
    <option value="5">5 years old</option>
    <option value="6">6 years old</option>
    <option value="7">7 years old</option>
    <option value="8">8 years old</option>
    <option value="9">9 years old</option>
    <option value="10">10 years old</option>
    <option value="11">11 years old</option>
    <option value="12">12 years old</option>
    <option value="13">13 years old</option>
    <option value="14">14 years old</option>
    <option value="15">15 years old</option>
    <option value="16">16 years old</option>
    <option value="17">17 years old</option>
`;
    personsChild.insertAdjacentElement('beforeend', personsChildSelect)
    if (childrenInt > 9) {
        personsItem2Btn2.removeEventListener('click', addChildSelection)
    }
};
personsItem2Btn2.addEventListener('click', addChildSelection);

//___удаление фильтра выбоора возраста ребенка___
const removeChildSelection = function () {
    //___<select class="select-child-age">___
    let personsChildSelect = document.querySelectorAll('.select-child-age')
    personsChildSelectAll = personsChildSelect.length - 1;
    personsChildSelect[personsChildSelectAll].remove()
}
personsItem2Btn1.addEventListener('click', removeChildSelection);
//_____________________________________________________________________________________________
//_______________Получение данных из формы_______________
const form = document.querySelector('.form');

function retrieveFormValue(event) {
    event.preventDefault();

    const search = form.querySelector('[name="destination"]')
    const adults = form.querySelector('#adultsNum')
    const children = form.querySelectorAll('select');
    const rooms = form.querySelector('#roomsNum')

    const childrenArr = []
    children.forEach(child => {
        childrenArr.push(child.value)
    })

    const values = {
        search: search.value,
        adults: adults.innerHTML,
        children: childrenArr.join(','),
        rooms: rooms.innerHTML,
    };
    console.log(values)

    //_____________GET запрос_____________
    const url = new URL('https://fe-student-api.herokuapp.com/api/hotels')

    const params = {search: values.search, adults: values.adults, children: values.children, rooms: values.rooms}
    url.search = new URLSearchParams(params).toString()

    function getRequest () {
        fetch (url)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                console.log(data);
                const generateCard = (name, city, country, imageUrl) => {
                    return `
            <li class="homes-list-item col-3 col-md-6 col-sm-3">
                <div class="homes-list-card">
                    <div class="homes-list-images">
                        <img src=${imageUrl} class="homes-link-image" alt='${name}'>
                    </div>
                    <div class="homes-list-content">
                        <div class="homes-list-heading">
                            <span class="homes-list-title">${name}</span>
                            <span class="homes-list-subtitle">${city}, ${country}</span>
                        </div>
                    </div>
                </div>
            </li> 
        `;
                }
                const availableHotelsSection = document.querySelector('.available-hotels')
                availableHotelsSection.style.display = 'block'
                const homesListCardsHTML = data.map(card => {
                    return generateCard(card.name, card.city, card.country, card.imageUrl)
                }).join('')
                const ul = document.querySelector('.homes-list')
                ul.innerHTML = homesListCardsHTML;
                availableHotelsSection.scrollIntoView({behavior: "smooth"})
            })
            .catch(function(err) {
                console.log(err);
            })
    }
    getRequest()
}

form.addEventListener('submit', retrieveFormValue)