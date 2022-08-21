let stat = "no";

let userData = JSON.parse(localStorage.getItem("userData"));

const name2 = document.getElementById("card_nam")
const num = document.getElementById("card_num");
const date2 = document.getElementById("date");
const cvc2 = document.getElementById("cvc_num");
name2.innerHTML = userData.cardName;
num.innerHTML = userData.cardNumber;
date2.innerHTML = userData.date;
cvc2.innerHTML = userData.cvc;
