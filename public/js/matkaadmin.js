let matkad = []
async function loeMatkad() {
    let response = await fetch('/api/matk')
    matkad = await response.json()
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

async function naitaOsalejaid(matkaIndeks) {
    console.log("matk:" + matkaIndeks)
    let response = await fetch ('/api/matkaja/' + matkaIndeks)
    osalejad = await response.json()
    console.log(osalejad)
    naitaMatkadeAndmeid(osalejad)
    }

function naitaMatkadeAndmeid(osalejad){
    let info = ''
    for (let i in osalejad) {
        info += `
        <div class="row">
                <div class="col-4"> Nimi:${osalejad[i].nimi}</div>
                <div class="col-4">Email:${osalejad[i].email}</div>
                <div class="col-4">Teade:${osalejad[i].teade}</div>
        </div>
        `
    }
    const infoElement = document.getElementById("matkad-andmed")
    infoElement.innerHTML = info

}

loeMatkad()




