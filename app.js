//Get The Two Inputs From The HTML File
const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');
const results = document.getElementById('results');

//Add Event Listener To Calc Button
calc.addEventListener('click', function () {
    //Change Input Value From String To Number
    const valOne = parseInt(ip1.value);
    const valTwo = parseInt(ip2.value);
    //Add The Values Together And Insert To HTML
    results.innerHTML = valOne + valTwo;
});

//Clear Input and Display area 
clr.addEventListener('click', function () {
    results.innerHTML = '';
    ip1.value = '';
    ip2.value = '';
});
//Create A Function that generates a random number between 0 and 1000

function myRandomNumber() {
    return Math.floor(Math.random() * 1000)
}
rand.addEventListener('click', function () {
    ip1.value = myRandomNumber();
    ip2.value = myRandomNumber();
});