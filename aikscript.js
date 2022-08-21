const inputFields = document.getElementsByTagName("input");
const errorMessage = document.querySelectorAll("#error_message");
const button = document.getElementById("but");

var cardName
var cardNumber
var month
var date
var cvc

const userInfo = {
    cardName,
    cardNumber,
    date,
    cvc
}

for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("input", () => {
        inputFields[i].style.border = "1px solid hsl(278, 94%, 30%)";
        inputFields[i].style.outline = "1px solid hsl(278, 94%, 30%)";
        inputFields[i].style.textTransform = "none";
        errorMessage[i].style.display = "none";
        button.style.marginTop = "15px";
        if (!inputFields[i].value) {
            inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
            inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
            errorMessage[i].style.display = "block";
            errorMessage[i].innerHTML = "Can't be blank";
            button.style.marginTop = "22px";
        } else if (inputFields[i].value) {
            if (i === 0) {
                inputFields[i].style.textTransform = "capitalize";
                userInfo.cardName = inputFields[i].value;
                if (/\d/.test(inputFields[i].value)) {
                    console.log(/\d/.test(inputFields[i].value))
                    inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                    inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                    errorMessage[i].style.display = "block";
                    errorMessage[i].innerHTML = "Wrong format, letters only";   
                } 
            }
            if (i === 1 || i === 2 || i === 3 || i === 4) {
                if (/[a-zA-z]/.test(inputFields[i].value) || /[`!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?~]/.test(inputFields[i].value)) {
                    inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                    inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                    errorMessage[i].style.display = "block";
                    errorMessage[i].innerHTML = "Wrong format, numbers only";
                    button.style.marginTop = "22px";
                }
                if (i === 1) {
                    userInfo.cardNumber = inputFields[i].value;
                    if (inputFields[i].value.length === 4 || inputFields[i].value.length === 9 || inputFields[i].value.length === 14) {
                        inputFields[i].value = inputFields[i].value + " ";   
                    } 
                } else if (i === 2) {
                    month = inputFields[i].value
                    if (inputFields[i].value > 12 || inputFields[i].value < 1) {
                        inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                        inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                        errorMessage[i].style.display = "block";
                        errorMessage[i].innerHTML = "Incorrect Month";
                        button.style.marginTop = "22px";
                    } 
                        
                } else if (i === 3) {
                    const year = inputFields[i].value;
                    userInfo.date = `${month}/${year}`;
                    if (inputFields[i].value.length < 2) {
                        inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                        inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                        errorMessage[i].style.display = "block";
                        errorMessage[i].innerHTML = "Incorrect Year";
                        button.style.marginTop = "22px";
                    } 
                } else if (i === 4) {
                    userInfo.cvc= inputFields[i].value;
                    if (inputFields[i].value.length < 3) {
                        inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                        inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                        errorMessage[i].style.display = "block";
                        errorMessage[i].innerHTML = "Incorrect CVC";
                        button.style.marginTop = "22px";
                    } 
                }
            }
        }
        localStorage.setItem('userData', JSON.stringify(userInfo));
    });
}

// console.log(userInfo)
// // localStorage.setItem('userData', JSON.stringify(userInfo));

const check1 = () => {
    if (inputFields[1].value.length < 19) {
        inputFields[1].style.border = "1px solid  hsl(0, 100%, 66%)";
        inputFields[1].style.outline = "1px solid  hsl(0, 100%, 66%)";
        errorMessage[1].style.display = "block";
        errorMessage[1].innerHTML = "Incorrect Card Number";
    }
}

const check2 = () => {
    if (inputFields[2].value.length === 1) {
        inputFields[2].value = `0${inputFields[2].value}`;
        month = inputFields[2].value
    }
}

const submit = () => {
    const test = [false, false, false, false];
    for (let i = 0; i < inputFields.length; i++) {
        if (!inputFields[i].value) {
            inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
            inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
            errorMessage[i].style.display = "block";
            errorMessage[i].innerHTML = "Can't be blank";
            test[i] = true;
        } else {
            test[i] = false;
        }
    }
    if (!test.includes(true)) {
        for (let i = 0; i < inputFields.length; i++) {
            inputFields[i].value = "";
            if(i == 0){
                inputFields[i].placeholder = "e.g. Jane Appleseed"
            } else if(i == 2){
                inputFields[i].placeholder = "e.g. 1234 5678 9123 0000"
            } else if(i == 2){
                inputFields[i].placeholder = "MM"
            } else if(i == 3){
                inputFields[i].placeholder = "YY"
            } else if(i == 4){
                inputFields[i].placeholder = "e.g. 123"
            }
        }
        button.setAttribute("href","completed.html");
    }
}