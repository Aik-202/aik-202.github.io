const inputFields = document.getElementsByTagName("input");
const errorMessage = document.querySelectorAll("#error_message");

for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("input", () => {
        inputFields[i].style.border = "1px solid hsl(278, 94%, 30%)";
        inputFields[i].style.outline = "1px solid hsl(278, 94%, 30%)";
        inputFields[i].style.textTransform = "none";
        errorMessage[i].style.display = "none";
        if (!inputFields[i].value) {
            inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
            inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
            errorMessage[i].style.display = "block";
            errorMessage[i].innerHTML = "Can't be blank";
        } else if (inputFields[i].value) {
            if (i === 0) {
                inputFields[i].style.textTransform = "capitalize";
                if (/\d/.test(inputFields[i].value)) {
                    inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                    inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                    errorMessage[i].style.display = "block";
                    errorMessage[i].innerHTML = "Wrong format, letters only";
                }
            } 
            // if (i === 1 || i === 2 || i === 3 || i === 4) {
            //     if (/\d/.test(inputFields[i].value)) {
            //         inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
            //         inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
            //         errorMessage[i].style.display = "block";
            //         errorMessage[i].innerHTML = "Wrong format, numbers only";
            //     }
            // }
        }
    });
}
