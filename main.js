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

//___<section class="homes-guests-loves">___
const homesGuestsLovesSection = document.createElement('section');
homesGuestsLovesSection.classList.add('homes-guests-loves');
const body = document.body;
body.appendChild(homesGuestsLovesSection);

//___<div class="container">___
const divContainer = document.createElement('div');
divContainer.classList.add('container');
homesGuestsLovesSection.appendChild(divContainer);

//___<div class="homes-block-header">___
const divHeader = document.createElement('div');
divHeader.classList.add('homes-block-header');
divContainer.appendChild(divHeader);
//___<h3 class="h3-text">Homes guests loves___
const h3 = document.createElement('h3');
h3.classList.add('h3-text');
h3.innerText = 'Homes guests loves';
divHeader.insertAdjacentElement('afterbegin', h3);

//___<div class="homes-block-cards">___
const divCards = document.createElement('div');
divCards.classList.add('homes-block-cards');
divHeader.insertAdjacentElement('afterend', divCards)

//___<ul class="homes-list">___
const ul = document.createElement('ul')
ul.classList.add("homes-list");
divCards.appendChild(ul)

//___<div class="homes-list-card">___
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
const homesListCardsHTML = data.map(card => {
    return generateCard(card.name, card.city, card.country, card.imageUrl)
}).join('')
ul.innerHTML = homesListCardsHTML;
console.log(ul)