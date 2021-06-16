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

async function getContent(url) {
    const response = await fetch(url);
    const json = await response.json();
    let homesListCardsHTML = json.map(card => {
        return generateCard(card.name, card.city, card.country, card.imageUrl)
    }).join('')
    ul.innerHTML = homesListCardsHTML;
}
getContent('https://fe-student-api.herokuapp.com/api/hotels/popular')