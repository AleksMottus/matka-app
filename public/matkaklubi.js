let uudised= [ 
    {
    id: 0,
    pealkiri: "Esimene uudis",
    kokkuvõte: "kokkuvõte esimesest uudisest",
    uudisetekst: "pikk tekst esimese uudise kohta",
    uudispilt: "./assets/jpg element.jpg",
    },
    {
    id: 1,
    pealkiri: "Teine uudis",
    kokkuvõte: "kokkuvõte teisest uudisest",
    uudisetekst: "pikk tekst teise uudise kohta",
    uudispilt: "./assets/jpg element.jpg",
    },
    {
    id: 2,
    pealkiri: "Kolmas uudis",
    kokkuvõte: "kokkuvõte kolmandast uudisest",
    uudisetekst: "pikk tekst kolmanda uudise kohta",
    uudispilt: "./assets/jpg element.jpg",
    },
]
function looUudis(uudis) {
    return `
    <div class="col-3 card">
        <img class="card-img-top" src="${uudis.uudispilt}"
        <div class="card-body">
        <div class="card-title">${uudis.pealkiri}
        <div class="card-text">
        <p>
             ${uudis.kokkuvõte}<br>
            
        </p>
            <div>
            ${uudis.uudisetekst}
            </div>
            </div>
        </div>
    </div>
    `
}
function naitaUudist() {
    let valjundElement = document.getElementById("valjund")
    let valjundHTML = ''
    valjundHTML += '<div class="row naitauudist">'
    for (let i = 0; i < uudised.length; i++) {
        valjundHTML+= looUudis(uudised[i])
    }
    valjundHTML += '</div>'
    valjundElement.innerHTML = valjundHTML
}

naitaUudist()