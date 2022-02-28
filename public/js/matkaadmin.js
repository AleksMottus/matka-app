async function loeMatkad() {
    let response = await fetch('/api/matk')
    let matkad = await response.json()
    console.log(matkad)
    naitaMatkadeMenyyd(matkad)
}
function naitaMatkadeMenyyd(matkad){
    let vastus = ''
    for (let i in matkad){
        vastus += `
        <button class="btn btn-link" onclick="naitaOsalejaid(${matkad[i].id})">
            ${matkad[i].nimetus}
        </button>
        `
    }
    const menyyElement = document.getElementById("matkad-menyy")
    menyyElement.innerHTML = vastus
}

function naitaOsalejaid(matkaIndeks) {
    console.log("matk:" + matkaIndeks)
}

loeMatkad()
console.log("test1")