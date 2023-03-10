
// let title = document.getElementById("title");
// title.innerText = "This text has been changed dynamically!!!!!";
// title.innerHTML = "Example of <span> Span </span> being used!"

// let titleSelect = document.querySelector("#title");

// titleSelect.innerText = "This happens to be my title!";


// titleSelect.addEventListener("click", ()=> {
//     titleSelect.style.color = "red";
//     titleSelect.style.fontSize = "107px";
//     titleSelect.innerText = "I have been clicked!!!"
// })

// for(let i = 0; i < 11; i++) {
//     console.log(i);
// }

// let text = "";
// const movies = ["Django", "Eyes Wide Shut", "Hercules"];
// movies.forEach(myFunction);
// document.querySelector("#demo").innerHTML = text;
// function myFunction(item){
//     text+=item + "<br>";
// }



let button = document.querySelector("#determine-fortune");
let domicile = "";
let job = "";
let loc8ion = "";
let retirementYears = 0;
let retirementMoneyAmt = "";
let hairStyle = "";
button.addEventListener("click", ()=> {
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let age = document.querySelector("#age").value;
    let birthMonth = document.querySelector("#birth-month").value;
    let favoriteColor = document.querySelector("#color").value;
    let numSiblings = document.querySelector("#number-of-siblings").value;
    let fullNameLength = firstName.length + lastName.length;
    
    if (fullNameLength >= 0 &&fullNameLength <= 5 ) {
        domicile = "a shack ";
    }
    else if (fullNameLength >= 6 && fullNameLength <= 11 ) {
        domicile = "a room at an extended stay ";
    }
    else if (fullNameLength >= 12 && fullNameLength <= 14 ) {
        domicile = "a bungalow ";
    }
    else if (fullNameLength >= 15 && fullNameLength <= 17 ) {
        domicile = "a beach-side condo ";
    }
    else if (fullNameLength >= 18 && fullNameLength <= 20 ) {
        domicile = "a New England style colonial ";
    }
    else {
        domicile = "a mansion with full staff ";
    }

    if (age < 20) {
        job = "an indefinetly appointed revature apprentice, ";
    }
    else if (age >= 20 && age <= 23) {
        job = "a personal trainer to the silver sneakers, "
    }
    else if (age >= 24 && age <= 27) {
        job = "a McDonald's cook, even after winning the powerball, "
    }
    else if (age >= 28 && age <= 32) {
        job = "a fighter pilot, "
    }
    else if (age >= 33 && age <= 37) {
        job = "a day trader, "
    }
    else {
        job = "the pastor of a megachurch, "
    }

    if (birthMonth >= 1 && birthMonth <= 3) {
        loc8ion = "in Greenbow, Alabama, "
    }
    else if (birthMonth >= 4 && birthMonth <= 6) {
        loc8ion = "at Mos Eisley Space Port, "
    }
    else if (birthMonth >= 7 && birthMonth <= 9) {
        loc8ion = "in Rio de Janeiro, "
    }
    else {
        loc8ion = "on Olympus Mons, "
    }

    if (favoriteColor == "red") {
        retirementYears = 25;
    }
    else if (favoriteColor == "orange") {
        retirementYears = 2;
    }
    else if (favoriteColor == "yellow") {
        retirementYears = 7;
    }
    else if (favoriteColor == "green") {
        retirementYears = 23;
    }
    else if (favoriteColor == "blue") {
        retirementYears = 666;
    }
    else if (favoriteColor == "indigo") {
        retirementYears = 8675309;
    }
    else {
        retirementYears = 42;
    }

    if (numSiblings == 0) {
        retirementMoneyAmt = "$25 in the bank.";
    }
    else if (numSiblings == 1) {
        retirementMoneyAmt = "2 Imperial Credits at a bank in the outer rim.";
    }
    else if (numSiblings == 2) {
        retirementMoneyAmt = "7 bars of gold-pressed latinum held in a vault on a deep space station in the Gamma Quadrant.";
    }
    else if (numSiblings == 3) {
        retirementMoneyAmt = "a dog, a fish, and a fainting goat, available for pickup at a farm in rural Oklahoma.";
    }
    else if (numSiblings == 4) {
        retirementMoneyAmt = "$666, available in a safe in the 7th level of hades.";
    }
    else {
        retirementMoneyAmt = "One Million Dollars, annuitized over 30 years."
    }


    

    alert("My crystal ball tells me that " + firstName + " " + lastName + " will live in " + domicile + loc8ion + "working as " + job + "and retire in " + retirementYears + " years with " + retirementMoneyAmt);
})






