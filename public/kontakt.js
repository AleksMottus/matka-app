

function prindiInfo(){
    let nimeTekst = document.getElementById("Nimi").value
    let emailTekst = document.getElementById("Email").value
    let teadeTekst = document.getElementById("Teade").value
    console.log(nimeTekst)
    console.log(emailTekst)
    console.log(teadeTekst)
    let sisendid = document.querySelectorAll("input");
    sisendid.forEach((input) => (input.value = ""));
}