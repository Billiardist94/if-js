const homesGuestUl = document.querySelector('.homes-list')

const parseJSON = function () {
    JSON.parse(sessionStorage.homesList).forEach((element) => {
        homesGuestUl.innerHTML += `
        <li class="homes-list-item col-3 col-md-6 col-sm-3">
        <div class="homes-list-card">
            <div class="homes-list-images">
                <img src=${element.imageUrl} alt=${element.name} class="homes-link-image">
            </div>
            <div class="homes-list-content">
                <div class="homes-list-heading">
                    <span class="homes-list-title">${element.name}</span>
                    <span class="homes-list-subtitle">${element.city}, ${element.country}</span>
                </div>
            </div>
        </div>
    </li>
  `;
    })
}

async function getContent(url) {
    const response = await fetch(url);
    const json = await response.json();
    const sesStorage = sessionStorage;
    sesStorage.homesList = JSON.stringify(json)
    parseJSON()
}

if (sessionStorage.getItem('homesList') !== null) {
    parseJSON()
} else {
    getContent('https://fe-student-api.herokuapp.com/api/hotels/popular')
}