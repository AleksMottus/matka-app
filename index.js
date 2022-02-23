const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
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

const matk1 = {
  id: 0,
  nimetus: "Matk Gruusias",
  kirjeldus: "Svaneetia asub Gruusia äärealal, vastu Venemaa ja mässulise Abhaasia piire. Svaneetia on piiratud igast küljest kõrgete mäeahelikega, sh põhjast Kaukasuse peaahelikuga. Tänu soodsale looduslikule asukohale on piirkonnast kujunenud Gruusia mägiturismi peamine keskus, mis on mägimatkajate seas populaarne nii suvel kui talvel. Mestiast on saanud moodsa arhitektuuriga linnake, kus turismile suunatud teenused on laialdaselt saadavalt. Sellest hoolimata kohtad siinsetel tänavatel iga õhtu karjamaadelt koju naasvaid lehmi. Teised külad, kuhu reisi jooksul satume, on oluliselt algupärasemad. Elu kulgeb siin vanasoodu, nii nagu ta siin sajandeid toiminud on.",
  pildiUrl: "/assets/Matk-gruusia.jpg",
  osalejad: ['mati@matkaja.ee', 'kati@matkaja.ee', 'klaabu@suurmeri.ee']
}

const matk2 = {
  id: 1,
  nimetus: "Matk Alpides",
  kirjeldus: "Üldised plaanid: Umbes 5-6 päeva matkame Bergamo Alpide piirkonnas.Minek-tulek otselennuga (Tallinn-Milaano/Bergamo-Tallinn) ning kohapeal seikleme kohaliku transpordi ja/või rendimasinaga ja mägedes jalgsi matkates. Ilm Bergamo Alpides augusti teises poolesStatistika järgi jäävad päevased temperatuurid olenevalt kõrgusest, ilmaolust, otsesest päikesekiirgusest jms peamiselt vahemikku +17°C…+28°C ning öösiti +10°C…+17°C (ca 900m peal). Kõrgemal on jahedam. Sademeid ja/või äikest võib esineda keskmiselt umbes kuni 10 päeval terve augusti kuu kohta.",
  pildiUrl: "/assets/Matkapilt.jfif",
  osalejad: ['alpi@matkaja.ee']
}
const matk3 ={
    id: 3,
    nimetus: "Suusamatk Soomes",
    kirjeldus: "Suusamatk Lapimaa tundra polaaröös virmaliste valgel eesmärgiga jõuda Soome kõrgeima mäe Halti tippu. Peale matka veedame kaks päeva suuskeskuses mäesuusa ja lumelaua sõitu nautides. Uut aastat tervitame Lapimaal. Päevateekonnad on mõõdukad ning ei eelda supervormi.",
    pildiUrl: "/assets/Lume-laua-matk.jpg",  
    osalejad: []  
}
const matkad = [
  matk1, 
  matk2,
  matk3,
]


function naitaRegistreerimist(req, res) {
  const index = parseInt(req.params.matk)
  console.log("valitud matk " + index)
  console.log(matkad[index])
  res.render('pages/Registreerumine', {matk: matkad[index]})
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {matkad: matkad}))
  .get('/Uudised', (req, res) => res.render('pages/Uudised', {uudised}))
  .get('/Kontakt', (req, res) => res.render('pages/Kontakt'))
  .get('/Registreerumine/:matk', naitaRegistreerimist)
  .get('/Uudised', (req, res) => res.render('pages/Uudised'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
