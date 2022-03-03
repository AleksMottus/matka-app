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
        <button class="btn btn-link d-flex" onclick="naitaOsalejaid(${matkad[i].id})">
           <h4> ${matkad[i].nimetus} </h4>
        </button>
        `
    }
    const menyyElement = document.getElementById("matkad-menyy")
    menyyElement.innerHTML = vastus
}

async function naitaOsalejaid(matkaIndeks) {
    console.log("matk:" + matkaIndeks)
    let response = await fetch ('/api/matkaja/' + matkaIndeks)
    const osalejad = await response.json()
    console.log(osalejad)
    
    let matk = matkad[matkaIndeks]
    let info = ''
    info += `
    <div>
       <h3> ${matk.nimetus} </h3>
    </div>
    <div>
        ${matk.kirjeldus}
    </div>
    <div class="row">
        <div class="col-4"><strong>NIMI</strong></div>
        <div class="col-4"><strong>E-mail</strong></div>
        <div class="col-4"><strong>Teated</strong></div>
    </div>
    `
    for (let i in osalejad) {
        info += `
        <div class="row">
            <div class="col-4">${osalejad[i].nimi}</div>
            <div class="col-4">${osalejad[i].email}</div>
            <div class="col-4">${osalejad[i].teade}</div>
        </div>
        `
    }
    const infoElement = document.getElementById("matkad-andmed")
    infoElement.innerHTML = info

}




loeMatkad()




