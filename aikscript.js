const container1 = document.getElementById("container");
const container2 = document.getElementById("container2");

const inputFields = document.getElementsByTagName("input");
const errorMessage = document.querySelectorAll("#error_message");
const button = document.getElementById("but");

const cardName = document.getElementById("card_nam");
const cardNum = document.getElementById("card_num");
const date = document.getElementById("date");
const cvc = document.getElementById("cvc_num");

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
                if (/\d/.test(inputFields[i].value)) {
                    console.log(/\d/.test(inputFields[i].value))
                    inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                    inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                    errorMessage[i].style.display = "block";
                    errorMessage[i].innerHTML = "Wrong format, letters only";
                }
            }
            if (i === 1 || i === 2 || i === 3 || i === 4) {
                if (/[a-zA-z]/.test(inputFields[i].value)) {
                    inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                    inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                    errorMessage[i].style.display = "block";
                    errorMessage[i].innerHTML = "Wrong format, numbers only";
                    button.style.marginTop = "22px";
                }
                if (i === 1) {
                    if (inputFields[i].value.length === 4 || inputFields[i].value.length === 9 || inputFields[i].value.length === 14) {
                        inputFields[i].value = inputFields[i].value + " ";
                    }
                } else if (i === 2) {
                    if (inputFields[i].value > 12 || inputFields[i].value < 1) {
                        inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                        inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                        errorMessage[i].style.display = "block";
                        errorMessage[i].innerHTML = "Incorrect Month";
                        button.style.marginTop = "22px";
                    }
                } else if (i === 3) {
                    if (inputFields[i].value.length < 2) {
                        inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                        inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                        errorMessage[i].style.display = "block";
                        errorMessage[i].innerHTML = "Incorrect Year";
                        button.style.marginTop = "22px";
                    }
                } else if (i === 4) {
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
    });
}

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
    }
}

const submit = () => {
    for (let i = 0; i < inputFields.length; i++) {
        if (!inputFields[i].value) {
            inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
            inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
            errorMessage[i].style.display = "block";
            errorMessage[i].innerHTML = "Can't be blank";
        } else {
            container1.style.display = "none";
            container2.style.display = "grid";
            cardName.innerHTML = inputFields[0].value;
            cardNum.innerHTML = inputFields[1].value;
            date.innerHTML = `${inputFields[2].value}/${inputFields[3].value}`;
            cvc.innerHTML = inputFields[4].value;
        }
    }
}