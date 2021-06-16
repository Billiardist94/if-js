//___<section class="intro">___
const introSection = document.createElement('section');
introSection.classList.add('intro');
introSection.style.background = 'grey';// ___remove at the end___'
const body = document.body;
body.appendChild(introSection);

//___<div class="container">___
const divContainer = document.createElement('div');
divContainer.classList.add('container');
introSection.appendChild(divContainer);
//___<h1 class="intro-title">___
const h1 = document.createElement('h1');
h1.classList.add('intro-title');
h1.innerText = 'Discover stays\n to live, work or just relax';
divContainer.insertAdjacentElement('afterbegin', h1);

//___<form action="#" class="form" method="post">___
const form = document.createElement('form');
form.classList.add('form');
form.setAttribute('action', '#');
form.setAttribute('method', 'post');
h1.after(form);
//___<div class="inputs">___
const inputsDiv = document.createElement('div');
inputsDiv.classList.add('inputs');
form.appendChild(inputsDiv);
//___<div class="search-form-group destination col-4 col-md-12 col-sm-6">___
const destinationDiv = document.createElement('div');
destinationDiv.classList.add('destination');
destinationDiv.classList.add('search-form-group');
destinationDiv.classList.add('col-4');
destinationDiv.classList.add('col-md-12');
destinationDiv.classList.add('col-sm-6');
inputsDiv.insertAdjacentElement('afterbegin', destinationDiv);
//___<svg class="loupe-icon destination-loupe-icon" ___
const destinationSvg = document.createElement('svg');
destinationSvg.classList.add('loupe-icon');
destinationSvg.classList.add('destination-loupe-icon');
destinationSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
destinationSvg.setAttribute('fill', 'none');
destinationSvg.setAttribute('width', '16');
destinationSvg.setAttribute('height', '16');
destinationDiv.insertAdjacentElement('afterbegin', destinationSvg);
//___path
const pathToSvg = `<path d="M27.414 24.586l-5.077-5.077C23.386 17.928 24 16.035 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10c2.035 0 3.928-.614 5.509-1.663l5.077 5.077c.78.781 2.048.781 2.828 0 .781-.781.781-2.047 0-2.828zM7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"/>`;
destinationSvg.innerHTML = pathToSvg;
//___<input type="text" id="destination" class="destination-form input-form" placeholder="New York">___
const destinationInput = document.createElement('input');
destinationInput.classList.add('destination-form');
destinationInput.classList.add('input-form');
destinationInput.placeholder = 'New York';
destinationInput.id = 'destination';
destinationInput.type = 'text';
destinationSvg.after(destinationInput);
//___<label class="label label-1" for="destination">Your destination or hotel name</label>___
const destinationLabel = document.createElement('label');
destinationLabel.classList.add('label');
destinationLabel.classList.add('label-1');
destinationLabel.setAttribute('for', 'destination');
destinationLabel.innerText = 'Your destination or hotel name';
destinationInput.after(destinationLabel);

//___<div class="search-form-group dates col-3 col-md-6 col-sm-6">___
const datesDiv = document.createElement('div');
datesDiv.classList.add('dates');
datesDiv.classList.add('search-form-group');
datesDiv.classList.add('col-3');
datesDiv.classList.add('col-md-6');
datesDiv.classList.add('col-sm-6');
destinationDiv.after(datesDiv);
//___<input type="text" id="date1" class="date-form input-form" placeholder="Tue 15 Sept" onfocus="(this.type='date')">___
const datesInput1 = document.createElement('input');
datesInput1.classList.add('date-form');
datesInput1.classList.add('input-form');
datesInput1.type = 'text';
datesInput1.id = 'date1';
datesInput1.placeholder = 'Tue 15 Sept';
datesInput1.onfocus = '(this.type = "date")';
datesDiv.insertAdjacentElement('afterbegin', datesInput1);
//___<label class="label label-2" for="date1">Check-in</label>___
const datesLabel1 = document.createElement('label');
datesLabel1.classList.add('label');
datesLabel1.classList.add('label-2');
datesLabel1.setAttribute('for', 'date1');
datesLabel1.innerText = 'Check-in';
datesInput1.after(datesLabel1);
//___<input type="text" id="date2" class="date-form input-form" placeholder="Sat 19 Sept" onfocus="(this.type='date')">___
const datesInput2 = document.createElement('input');
datesInput2.classList.add('date-form');
datesInput2.classList.add('input-form');
datesInput2.type = 'text';
datesInput2.id = 'date2';
datesInput2.placeholder = 'Sat 19 Sept';
datesInput2.onfocus = '(this.type = "date")';
datesLabel1.after(datesInput2)
//___<label class="label label-3" for="date2">Check-out</label>___
const datesLabel2 = document.createElement('label');
datesLabel2.classList.add('label');
datesLabel2.classList.add('label-3');
datesLabel2.setAttribute('for', 'date2');
datesLabel2.innerText = 'Check-out';
datesInput2.after(datesLabel2);
//___<label class="label check-label-desktop" for="date1">Check-in — Check-out</label>___
const datesLabel3 = document.createElement('label');
datesLabel3.classList.add('label');
datesLabel3.classList.add('check-label-desktop');
datesLabel3.setAttribute('for', 'date1');
datesLabel3.innerText = 'Check-in — Check-out';
datesLabel2.after(datesLabel3);

//____________________________________Persons________________________________________
//___<div class="search-form-group persons col-3 col-md-6 col-sm-6">___
const personsDiv = document.createElement('div');
personsDiv.classList.add('persons')
personsDiv.classList.add('search-form-group');
personsDiv.classList.add('col-3');
personsDiv.classList.add('col-md-6');
personsDiv.classList.add('col-sm-6');
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

//___<div class="submit col-2 col-md-12 col-sm-6">___
const submitDiv = document.createElement('div');
submitDiv.classList.add('submit')
submitDiv.classList.add('search-form-group');
submitDiv.classList.add('col-2');
submitDiv.classList.add('col-md-12');
submitDiv.classList.add('col-sm-6');
personsDiv.after(submitDiv);
//___<input type="submit" id="submit" class="submit-form input-form" value="Search">___
const inputSubmit = document.createElement('input');
inputSubmit.classList.add('submit-form');
inputSubmit.classList.add('input-form');
inputSubmit.type = 'submit';
inputSubmit.id = 'submit';
inputSubmit.value = 'Search';
submitDiv.appendChild(inputSubmit);
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


