//____________________________________Persons________________________________________
//___<input type="text" id="persons">___
const inputDiv = document.querySelector('#persons')

//___<span>2</span>___
const adultsCount = document.querySelector('#adultsSpan')

//___<span>0</span>___
const childrenCount = document.querySelector('#childrenSpan')

//___<span>1</span>___
const roomsCount = document.querySelector('#roomsSpan')

//___<div class="block">___
const personsBlockDiv = document.querySelector('.block')
//____________________________________Adults__________________________________________
//___<input style="display: none" class="input" type="number" min="0" max="30" value="2">___
const personsItem1Input = document.querySelector('#inputAdults')

//___<button type="button" class="btn"><span>-</span></button>___
const personsItem1Btn1 = document.querySelector('#btnAdultMinus')

//___<button type="button" class="btn"><span>+</span></button>___
const personsItem1Btn2 = document.querySelector('#btnAdultPlus')

//____________________________________Children________________________________________
//___<input style="display: none" class="input" type="number" min="0" max="10" value="0">___
const personsItem2Input = document.querySelector('#inputChildren')

//___<button type="button" class="btn"><span>-</span></button>___
const personsItem2Btn1 = document.querySelector('#btnChildrenMinus')

//___<button type="button" class="btn"><span>+</span></button>___
const personsItem2Btn2 = document.querySelector('#btnChildrenPlus')

//____________________________________Rooms________________________________________
//___<input style="display: none" class="input" type="number" min="0" max="30" value="0">___
const personsItem3Input = document.querySelector('#inputRooms')

//___<button type="button" class="btn"><span>-</span></button>___
const personsItem3Btn1 = document.querySelector('#btnRoomsMinus')

//___<button type="button" class="btn"><span>+</span></button>___
const personsItem3Btn2 = document.querySelector('#btnRoomsPlus')

//____________________________________Child age________________________________________
//___<div class="child-age">___
const personsChild = document.querySelector('.child-age')

//___<div class="child-age-selection">___
const childAgeSelection = document.querySelector('.child-age-selection')

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
// let childrenInt = Number.parseInt(personsItem2Input.value);
let childrenNum = document.querySelector('#childrenNum').innerHTML
let childrenInt = Number.parseInt(childrenNum)
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
    console.log('childrenInt: ' + childrenInt)
    childrenNum = String(childrenInt)
    console.log('childrenNum: ' + childrenNum)
    document.querySelector('#childrenNum').innerHTML = childrenNum
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
    console.log('childrenInt: ' + childrenInt)
    childrenNum = String(childrenInt)
    console.log('childrenNum: ' + childrenNum)
    document.querySelector('#childrenNum').innerHTML = childrenNum

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
    childAgeSelection.insertAdjacentElement('beforeend', personsChildSelect)
    if (childrenInt > 9) {
        personsItem2Btn2.removeEventListener('click', addChildSelection)
    }
};
personsItem2Btn2.addEventListener('click', addChildSelection);

//___удаление фильтра выбоора возраста ребенка___
const removeChildSelection = function () {
    //___<select class="select-child-age">___
    let personsChildSelect = document.querySelectorAll('.select-child-age')
    let personsChildSelectAll = personsChildSelect.length - 1;
    if (personsChildSelect.length <= 0) return;
    return personsChildSelect[personsChildSelectAll].remove()

}
personsItem2Btn1.addEventListener('click', removeChildSelection);
