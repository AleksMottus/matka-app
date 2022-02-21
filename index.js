const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


const matk1 = {
  id: 0,
  nimetus: "Matk Gruusias",
  kirjeldus: "Svaneetia asub Gruusia äärealal, vastu Venemaa ja mässulise Abhaasia piire. Svaneetia on piiratud igast küljest kõrgete mäeahelikega, sh põhjast Kaukasuse peaahelikuga. Tänu soodsale looduslikule asukohale on piirkonnast kujunenud Gruusia mägiturismi peamine keskus, mis on mägimatkajate seas populaarne nii suvel kui talvel. Mestiast on saanud moodsa arhitektuuriga linnake, kus turismile suunatud teenused on laialdaselt saadavalt. Sellest hoolimata kohtad siinsetel tänavatel iga õhtu karjamaadelt koju naasvaid lehmi. Teised külad, kuhu reisi jooksul satume, on oluliselt algupärasemad. Elu kulgeb siin vanasoodu, nii nagu ta siin sajandeid toiminud on.",
  pildiUrl: "./assets/Matk-gruusia.jpg",
  osalejad: ['mati@matkaja.ee', 'kati@matkaja.ee', 'klaabu@suurmeri.ee']
}

const matk2 = {
  id: 1,
  nimetus: "Matk Alpides",
  kirjeldus: "Üldised plaanid: Umbes 5-6 päeva matkame Bergamo Alpide piirkonnas.Minek-tulek otselennuga (Tallinn-Milaano/Bergamo-Tallinn) ning kohapeal seikleme kohaliku transpordi ja/või rendimasinaga ja mägedes jalgsi matkates. Ilm Bergamo Alpides augusti teises poolesStatistika järgi jäävad päevased temperatuurid olenevalt kõrgusest, ilmaolust, otsesest päikesekiirgusest jms peamiselt vahemikku +17°C…+28°C ning öösiti +10°C…+17°C (ca 900m peal). Kõrgemal on jahedam. Sademeid ja/või äikest võib esineda keskmiselt umbes kuni 10 päeval terve augusti kuu kohta.",
  pildiUrl: "./assets/Matkapilt.jfif",
  osalejad: ['klaabu@suurmeri.ee']
}

const matkad = [
  matk1, 
  matk2,
  {
    id: 3,
    nimetus: "Suusamatk Soomes",
    kirjeldus: "Suusamatk Lapimaa tundra polaaröös virmaliste valgel eesmärgiga jõuda Soome kõrgeima mäe Halti tippu. Peale matka veedame kaks päeva suuskeskuses mäesuusa ja lumelaua sõitu nautides. Uut aastat tervitame Lapimaal. Päevateekonnad on mõõdukad ning ei eelda supervormi.",
    pildiUrl: "./assets/Lume-laua-matk.jpg",  
    osalejad: []  
  }
]


function naitaRegistreerimist(req, res) {
  const index = parseInt(req.params.matk)
  console.log("valitud matk" + index)
  console.log(matkad[index])
  res.render('pages/Registreerumine', {matk: matkad[index]})
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {matkad: matkad}))
  .get('/Kontakt', (req, res) => res.render('pages/Kontakt'))
  .get('/Registreerumine/:matk', naitaRegistreerimist)
  .get('/Uudised', (req, res) => res.render('pages/Uudised'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
