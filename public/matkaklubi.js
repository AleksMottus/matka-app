let uudised= [ 
    {
    id: 0,
    pealkiri: "Nädalavahetusel toimub kümneid matku Eesti põlisloodusesse",
    kokkuvõte: "Järgmisel nädalal tähistatakse rahvusvahelist põlislooduse nädalat, millega kogu maailmas teadvustatakse puutumatu looduse kaitsmise olulisust - Eestis korraldatakse loodusturismi ühingu eestvedamisel sel puhul kümneid põnevaid loodusretki radadele, kuhu iga päev ei satu.",
    uudisetekst: "Kohalike giidide juhtimisel saab matkata soodes, rabades ja metsades, sõita jõgedel, külastada saari ja tutvuda mererannikuga. Matkad toimuvad üle Eesti kõigis meie rahvusparkides ning paljudel looduskaitsealadel. Eesti põlisemateks loodusmaastikeks on sood, mille kujunemine algas kohe pärast jääaja lõppu. Sood ja rabad on koduks Eesti looduse sümbolliikidele nagu hundid, ilvesed, karud ja kotkad. Nemad oskavad eriti lugu pidada privaatsusest, mida soomaastik pakub. ",
    uudispilt: "./assets/Uudispilt1.jpg",
    },
    {
    id: 1,
    pealkiri: "Kuidas me matkakaaslast päästsime ja kivide salakavaluse paljastasime",
    kokkuvõte: "Kas Alpides kivilaviinil ronimine ja järsaku kohal kõõlumine on äge või õudne? Miks kivisid ei tasu usaldada? Loe ise, saad teada.",
    uudisetekst: "Kivilaviin oli tee ära viinud ja julgestustrossid puruks tõmmanud. Istusime kaminakuumas mägimajakeses ja kuulasime hollandlasest matkaselli seiklusi. «Nojah, sa pead seal ikka ronima,» teatas ta kukalt sügades, palavast toast hoolimata suusamüts ikka veel peas. Paduvihm läks akna taga üle lumetormiks. Matkavend rääkis valju häälega, justkui pajataks uhket sõjalugu. «Ronima pead – ikka käte ja jalgadega. See on kohutavalt järsk. Kogu aeg! Ja seal üleval on kohutav tuul. Brr... Ma ütleks, et see on tehtav, aga vaevalt ma seda uuesti teeksin.» Mina kuulasin ja tundsin, kuidas ninaots koos entusiasmikraadidega tasapisi langeb. Aga matkakaaslasele kõrval mõjusid ritta sätitud ohud nagu visatud kindad. Hei-hoo, tema läks hasardist põlema ja tahtis seda kõike omal nahal kogeda veel rohkem kui enne!",
    uudispilt: "./assets/Uudispilt2.jpg",
    },
    {
    id: 2,
    pealkiri: "RMK metsamajad ja külastuskeskused on külalistele peatselt avatud",
    kokkuvõte: "Suvekuudel populaarsed Riigimetsa Majandamise Keskuse külastuskeskused ja metsamajad avatakse peagi.",
    uudisetekst: "RMK külastuskorraldusosakonna juhataja Marge Rammo sõnul on eriolukorra väljakuulutamise hetkest kõik RMK külastuskeskused ja metsamajad külalistele suletud olnud. Seoses eriolukorra lõpuga avatakse Rammo sõnul 18. mail kõik RMK külastuskeskused. Suvekuudel puhkajate seas populaarsed metsamajad jäävad suletuks 1. juunini. Looduses seiklejatel soovitatakse oma retk põhjalikult läbi mõelda ja rahvarohkeid kohti vältida.",
    uudispilt: "./assets/Uudispilt3.jpg",
    },
   
]
function looUudis(uudis) {
    return `
    <div class="col-lg-6 col-md-12 card  mt-2 pt-1 uudisblokk">
        <img class="card-img-top uudisepildid" src="${uudis.uudispilt}"
        <div class="card-body">
        <div class="card-title"><h2>${uudis.pealkiri}</h2>
        <div class="card-text">
        <p>
            <h5> ${uudis.kokkuvõte} </h5><br>
            
        </p>
            <div> 
            <h5> ${uudis.uudisetekst} </h5>
            </div>
            </div>
        </div>
    <div><button type="button" class="btn btn-primary mb-3">Vaata lähemalt</button></div>
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