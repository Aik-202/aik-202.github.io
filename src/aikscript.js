const inputFields = document.getElementsByTagName("input");
const errorMessage = document.querySelectorAll(".error_message");
const button = document.getElementById("but");

var cardName
var cardNumber
var month
var year
var cvc

//local storage object for users data
const userInfo = {
    cardName,
    cardNumber,
    month,
    year,
    cvc
}

// tests for input field
for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("input", () => {
        inputFields[i].style.border = "1px solid hsl(278, 94%, 30%)";
        inputFields[i].style.outline = "1px solid hsl(278, 94%, 30%)";
        inputFields[i].style.textTransform = "none";
        errorMessage[i].style.display = "none";
        button.style.marginTop = "15px";
        if (!inputFields[i].value) { // input field must not be blank 
            inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
            inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
            errorMessage[i].style.display = "block";
            errorMessage[i].innerHTML = "Can't be blank";
            button.style.marginTop = "22px";
        } else if (inputFields[i].value) {
            if (i === 0) {
                inputFields[i].style.textTransform = "capitalize";
                userInfo.cardName = inputFields[i].value; //stores value for local storage
                if (/\d/.test(inputFields[i].value) || /[`!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?~]/.test(inputFields[i].value)) { //card name value must be letters only 
                    inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                    inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                    errorMessage[i].style.display = "block";
                    errorMessage[i].innerHTML = "Wrong format, letters only";
                }
            }
            if (i === 1 || i === 2 || i === 3 || i === 4) {
                //card number, cvc, expiry dates value must be numbers only, no special characters
                if (/[a-zA-z]/.test(inputFields[i].value) || /[`!@#$%^&*()_+\-=\[\]{};':•°£¢€¥©®™✓¶∆"\\|,.<>\/?~]/.test(inputFields[i].value)) {
                    inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                    inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                    errorMessage[i].style.display = "block";
                    errorMessage[i].innerHTML = "Wrong format, numbers only";
                    button.style.marginTop = "22px";
                }
                if (i === 1) {
                    userInfo.cardNumber = inputFields[i].value; //stores value for local storage
                    // for card number, after 4 digits, give space automatically
                    if (inputFields[i].value.length === 4 || inputFields[i].value.length === 9 || inputFields[i].value.length === 14) {
                        inputFields[i].value = inputFields[i].value + " ";
                    }
                } else if (i === 2) {
                    userInfo.month = inputFields[i].value //stores value for local storage
                    //for month field, must not be 0 or greater than 12
                    if (inputFields[i].value > 12 || inputFields[i].value < 1) {
                        inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                        inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                        errorMessage[i].style.display = "block";
                        errorMessage[i].innerHTML = "Incorrect Month";
                        button.style.marginTop = "22px";
                    }    
                } else if (i === 3) {
                    //stores value for local storage
                    userInfo.year = inputFields[i].value;
                    //for year field, must be 2 numbers
                    if (inputFields[i].value.length < 2) {
                        inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                        inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                        errorMessage[i].style.display = "block";
                        errorMessage[i].innerHTML = "Incorrect Year";
                        button.style.marginTop = "22px";
                    }
                } else if (i === 4) {
                    userInfo.cvc = inputFields[i].value; //stores value for local storage
                    //for cvc field, must be 3 numbers
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
        localStorage.setItem('userData', JSON.stringify(userInfo)); //store input field values in local storage object
    });
}

//on mouse out, for card number field, must be 19 numbers
const check1 = () => {
    if (inputFields[1].value.length < 19) {
        inputFields[1].style.border = "1px solid  hsl(0, 100%, 66%)";
        inputFields[1].style.outline = "1px solid  hsl(0, 100%, 66%)";
        errorMessage[1].style.display = "block";
        errorMessage[1].innerHTML = "Incorrect Card Number";
    }
    if (findNumberOfDigits(inputFields[1].value) !== 16) {
        inputFields[1].style.border = "1px solid  hsl(0, 100%, 66%)";
        inputFields[1].style.outline = "1px solid  hsl(0, 100%, 66%)";
        errorMessage[1].style.display = "block";
        errorMessage[1].innerHTML = "Incorrect Card Number";
    }
}

//on mouse out, for month field 
const check2 = () => {
    if (inputFields[2].value.length === 1) {
        inputFields[2].value = `0${inputFields[2].value}`; //adds 0 to front of number if theres only one number
        userInfo.month = inputFields[2].value;
        localStorage.setItem('userData', JSON.stringify(userInfo)); //store input field values in local storage object
    } 
}

// form validation on click confirm
const submit = () => {
    const test1 = [false, false, false, false]; //test for blank input fields
    const test2 = [false, false, false, false]; //test for error in input fields
    for (let i = 0; i < inputFields.length; i++) {
        if (!inputFields[i].value) {
            inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
            inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
            errorMessage[i].style.display = "block";
            errorMessage[i].innerHTML = "Can't be blank";
            test1[i] = true; // if blank test for that input field is true
        } else {
            test1[i] = false;
        }
    }
    for (let i = 0; i < inputFields.length; i++) {
        if (errorMessage[i].style.display === "block") {
            test2[i] = true; // if there is an error
        } else {
            test2[i] = false;
        }
    }
    // if there is no blank input field
    if (!test1.includes(true) && !test2.includes(true)) {
        //clear form
        for (let i = 0; i < inputFields.length; i++) {
            inputFields[i].value = "";
            if (i == 0) {
                inputFields[i].placeholder = "e.g. Jane Appleseed"
            } else if (i == 2) {
                inputFields[i].placeholder = "e.g. 1234 5678 9123 0000"
            } else if (i == 2) {
                inputFields[i].placeholder = "MM"
            } else if (i == 3) {
                inputFields[i].placeholder = "YY"
            } else if (i == 4) {
                inputFields[i].placeholder = "e.g. 123"
            }
        }
        window.location.href = "completed.html"
    }
}

function findNumberOfDigits(str){
    let count = 0;
    for(let char of str){
        if(char >= "0" && char <= "9"){
            count++
        }
    }
    return count;
}

