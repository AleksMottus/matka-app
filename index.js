const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const uudised= [ 
  {
  id: 0,
  pealkiri: "Nädalavahetusel toimub kümneid matku Eesti põlisloodusesse",
  kokkuvõte: "Järgmisel nädalal tähistatakse rahvusvahelist põlislooduse nädalat, millega kogu maailmas teadvustatakse puutumatu looduse kaitsmise olulisust - Eestis korraldatakse loodusturismi ühingu eestvedamisel sel puhul kümneid põnevaid loodusretki radadele, kuhu iga päev ei satu.",
  uudisetekst: "Kohalike giidide juhtimisel saab matkata soodes, rabades ja metsades, sõita jõgedel, külastada saari ja tutvuda mererannikuga. Matkad toimuvad üle Eesti kõigis meie rahvusparkides ning paljudel looduskaitsealadel. Eesti põlisemateks loodusmaastikeks on sood, mille kujunemine algas kohe pärast jääaja lõppu. Sood ja rabad on koduks Eesti looduse sümbolliikidele nagu hundid, ilvesed, karud ja kotkad. Nemad oskavad eriti lugu pidada privaatsusest, mida soomaastik pakub. ",
  uudispilt: "/assets/Uudispilt1.jpg",
  suureuudisepilt:"/assets/Suureuudisepilt1.jpg",
  suureuudisetekst: "Kel huvi huntide vastu, sel tasuks minna matkale Laukesoosse, kus huntide eluolust räägitakse. Erineva pikkusega rabamatkadele oodatakse huvilisi Raplamaa soodesse Palasil, Jalasel, Linnurabas, Loosalus, Luitemaale, samuti Emajõe-Suursoos, Meenikunnos, Nigulas, Ohepalus,  Soomaa rahvuspargis ja Nätsi-Võlla rabas. Merd ja rannikut saab uurida hülgevaatlusretkel Malusi saarestikus, jalgsimatkal Vormsi  saarel, Osmussaarel, Saaremaal Harilaiul või Odalätsis, Lahemaal Pedassaare poolsaarel ja Juminda poolsaarel. Eesti käänulised jõed erinevad vägagi sellest, mida võib näha Lääne-Euroopas, kus jõed on kaevatud kanaliteks ja kammitsetud paisudega. Eesti jõed voolavad enamuses oma looduslikes sängides ning on elupaigaks paljudele liikidele. Keda tõmbab rohkem vee poole, saab matkata jalgsi Valgejõe ürgorus või avastada jõgesid kanuudel Emajõe-Suursoos, Soomaal ja mitmel pool mujal üle Eesti. Põlismetsadesse viivad retked Lahemaa rahvuspargis, Karula rahvuspargis ja Toolse maastikukaitsealal. Põlislooduse nädala lõpetavad matkad Hiiumaa liivikutel ja luidetel ning teemaõhtu «Põnev Põder» Matsalu rahvuspargis. Kõikidele üritustele on vajalik eelregistreerimine.",
  },
  {
  id: 1,
  pealkiri: "Kuidas me matkakaaslast päästsime ja kivide salakavaluse paljastasime",
  kokkuvõte: "Kas Alpides kivilaviinil ronimine ja järsaku kohal kõõlumine on äge või õudne? Miks kivisid ei tasu usaldada? Loe ise, saad teada.",
  uudisetekst: "Kivilaviin oli tee ära viinud ja julgestustrossid puruks tõmmanud. Istusime kaminakuumas mägimajakeses ja kuulasime hollandlasest matkaselli seiklusi. «Nojah, sa pead seal ikka ronima,» teatas ta kukalt sügades, palavast toast hoolimata suusamüts ikka veel peas. Paduvihm läks akna taga üle lumetormiks. Matkavend rääkis valju häälega, justkui pajataks uhket sõjalugu. «Ronima pead – ikka käte ja jalgadega. See on kohutavalt järsk. Kogu aeg! Ja seal üleval on kohutav tuul. Brr... Ma ütleks, et see on tehtav, aga vaevalt ma seda uuesti teeksin.» Mina kuulasin ja tundsin, kuidas ninaots koos entusiasmikraadidega tasapisi langeb. Aga matkakaaslasele kõrval mõjusid ritta sätitud ohud nagu visatud kindad. Hei-hoo, tema läks hasardist põlema ja tahtis seda kõike omal nahal kogeda veel rohkem kui enne!",
  uudispilt: "/assets/Uudispilt2.jpg",
  suureuudisepilt:"/assets/Suureuudisepilt2.jpg",
  suureuudisetekst: "Kui hull see olla saab? Kuulanud ära kommentaarid otse rajalt, valdasid meid vastakad tunded. «Äkki see ikka ei ole läbitav...» «Aga äkki on?» Seiklusjanu jäi loomulikult peale. Rajaraamat ütles ka, et ees ootab teekonna kõige raskem ja ohtlikum lõik. Aga kui hull see ikka saab olla? Viimatine päev oli kulgenud paksus paduvihmas, kõik võrratud vaated uduvatiga kaetud ja ainsaks vaatamisväärsuseks teele paarituma tulnud salamandrid. Ligased, tumedad ja graatsilised elukad  nägime kokku kolmekümmet! Samal ajal oli talla all pidevalt põrgulibe pori ja vett valati nagu ämbrist vihmarõivastele. Aga see on matkal täiesti normaalne. Mägedes lihtsalt saab kõiki aastaaegu koos ja talvest suvekuumusse võib tõusta-laskuda vaid mõne tunniga. Ja olgugi et õhtul paistis, et lumetorm ei lahku siit Bonn-Matreieri hüti ümbert iial, tervitas meid uuel hommikul imeline klaar päikesetõus. Jalgade all oli aga jää  kõik, mis öösel alla sadas, oli kividele kunstipärasteks kristallideks külmunud. Teekond Badeneri poole algas sellegipoolest reipal sammul. Midagi kraesse ei saja, seegi juba põhjus rõõmustada. Kivikülvid vaheldumisi lumeväljadega, millel kirendas värske jääkoorik, viltused päikesekiired kogu seda sinimustvalget silmailu kuldamas. Aga need väljad olid libedad. Kui sageli saab üle järsu kalde all lumevälja kõndida ka lihtsalt saabastega samme lumme pekstes, siis sel korral oli see jää tugevam. Lihtsalt samm ei pidanud.",
  },
  {
  id: 2,
  pealkiri: "RMK metsamajad ja külastuskeskused on külalistele peatselt avatud",
  kokkuvõte: "Suvekuudel populaarsed Riigimetsa Majandamise Keskuse külastuskeskused ja metsamajad avatakse peagi.",
  uudisetekst: "RMK külastuskorraldusosakonna juhataja Marge Rammo sõnul on eriolukorra väljakuulutamise hetkest kõik RMK külastuskeskused ja metsamajad külalistele suletud olnud. Seoses eriolukorra lõpuga avatakse Rammo sõnul 18. mail kõik RMK külastuskeskused. Suvekuudel puhkajate seas populaarsed metsamajad jäävad suletuks 1. juunini. Looduses seiklejatel soovitatakse oma retk põhjalikult läbi mõelda ja rahvarohkeid kohti vältida.",
  uudispilt: "/assets/Uudispilt3.jpg",
  suureuudisepilt:"/assets/Suureuudisepilt3.jpg",
  suureuudisetekst: "Mis vahe on külastuskeskusel ja loodusmajal? Külastuskeskus on aastaringselt avatud RMK puhkeala keskus, kus toimub loodushariduslik tegevus erinevatele sihtrühmadele – programmid, üritused, teavitamistöö. Külastuskeskuses on teabepunkt, ekspositsioon, teabekogu ning kontoriruumid töötajatele. Külastuskeskus on aastaringselt avatud. Loodusmaja, kus toimub samuti loodushariduslik tegevus, on aga avatud vaid programmide ja ürituste toimumise ajal. Mis vahe on metsamajal ja metsaonnil? Nii metsamajad kui metsaonnid on lihtsa konstruktsiooniga, reeglina ühe ruumi ja spartaliku sisustusega ööbimiskohad looduses liikujale. Metsamaja eristab metsaonnist privaatsus, mida pakub metsamaja kasutamise eest makstav võtmeraha. Metsaonn ei pruugi tagada kasutajale omaette olekut, sest ruumi tuleb teha kõigile, kes soovivad metsaonni kasutada. Seetõttu puudub metsaonnil ka kasutusmaks ehk võtmeraha. Metsamaja saab ja tuleb kasutamiseks ette broneerida, metsaonni puhul seda võimalust pole.",
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
    id: 2,
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

let matkajad = []

function naitaUudist(req, res) {
  const index = parseInt(req.params.uudis)
  console.log("valitud uudis " + index)
  console.log(uudised[index])
  res.render('pages/Uudised-sub', {uudis: uudised[index]})
}
function naitaRegistreerimist(req, res) {
  const index = parseInt(req.params.matk)
  console.log("valitud matk " + index)
  console.log(matkad[index])
  res.render('pages/Registreerumine', {matk: matkad[index]})
}

function registreeriOsaleja(req, res) {
  console.log("Serverisse saadeti parameetrid:")
  console.log(req.query)

  if (!req.query.nimi) {
    return res.end("Matkaja nimi peab olemas olema")
  }

  if (!req.query.matkaId) {
    return res.end("Matka identifikaator puudub")
  }

  const matk = matkad[req.query.matkaId]

  if (!matk) {
    return res.send("Matka indeks on vale")
  }

  const uusMatakaja = {
    nimi : req.query.nimi,
    email : req.query.email,
    teade : req.query.Teade,
    id : req.query.matkaId,
    matkNimetus: matk.nimetus,
  }

  matkajad.push(uusMatakaja)
  matk.osalejad.push(uusMatakaja.email)

  console.log("kõik matkajad:")
  console.log(matkajad)
  res.render("pages/reg-kinnitus", {matk:matk})
}

function tagastaMatkad(req, res){
  res.send(matkad)
}
function tagastaOsalejad(req, res){
  let matkaIndeks = req.params.matk
  let vastusMassiiv = []
  for (i in matkajad) {
    const osaleja = matkajad[i]
    if (osaleja.id == matkaIndeks){
      vastusMassiiv.push(osaleja)
    }
  }
  res.send(vastusMassiiv)
}

//let response = await fetch('/api/matkaja/' + matkaIndeks)
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {matkad: matkad}))
  .get('/Uudised', (req, res) => res.render('pages/Uudised', {uudised}))
  .get('/Uudised-sub/:uudis',naitaUudist)
  .get('/Kontakt', (req, res) => res.render('pages/Kontakt'))
  .get('/Registreerumine/:matk', naitaRegistreerimist)
  .get('/kinnitus',registreeriOsaleja)
  .get('/api/matk', tagastaMatkad)
  .get('/api/matkaja/:matk', tagastaOsalejad)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
