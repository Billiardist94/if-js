let url = new URL('https://fe-student-api.herokuapp.com/api/hotels/popular');
let promise = fetch(url);

promise.then(function (response) {
    return response.json();
})
    .then(function (json) {
        console.log(json)
        const homesGuestUl = document.querySelector('.homes-list')
        json.forEach((element) => {
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
    })