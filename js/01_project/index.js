const btn = document.getElementById("genpass");
const newpass = document.getElementById("newpass");
const slider = document.getElementById("range");
const rangeVal = document.getElementById("rangevalue");

const upperCase = document.getElementById("capLet");
const lowerCase = document.getElementById("smaLet");
const numberBox = document.getElementById("number");
const symbolBox = document.getElementById("symbol");
const copybtn = document.getElementById("copybtn")

slider.addEventListener('input', (e) => {
    rangeVal.innerText = e.target.value;
});

btn.addEventListener('click', () => {
    let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*~_+}{()';
    let finalStr = '';

    if (upperCase.checked) finalStr += capitalLetters;
    if (lowerCase.checked) finalStr += smallLetters;
    if (numberBox.checked) finalStr += numbers;
    if (symbolBox.checked) finalStr += symbols;

    if (finalStr === '') {
        newpass.innerText = 'Please select at least one option!';
        return;
    }

    let generatedPass = '';
    for (let i = 0; i < slider.value; i++) {
        let randomIndex = Math.floor(Math.random() * finalStr.length);
        generatedPass += finalStr.charAt(randomIndex);
    }

    newpass.innerText = generatedPass;

    copybtn.addEventListener('click', () => {
        window.navigator.clipboard.writeText(generatedPass)
    })


});