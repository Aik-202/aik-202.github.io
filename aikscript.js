const inputFields = document.getElementsByTagName("input");

for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("input", () => {
        inputFields[i].style.border = "1px solid hsl(278, 94%, 30%)";
        inputFields[i].style.outline = "1px solid hsl(278, 94%, 30%)";
        if(!inputFields[i].value){
            inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
            inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
            const textElement = document.createElement("p");
            const text = document.createTextNode("Can't be blank");
            textElement.appendChild(text);
            textElement.id = "error_message";
            inputFields[i].parentElement.appendChild(textElement);
            inputFields[i].addEventListener("input", () => {
                textElement.style.display = "none";
                inputFields[i].style.border = "1px solid hsl(278, 94%, 30%)";
                inputFields[i].style.outline = "1px solid hsl(278, 94%, 30%)";
                if(!inputFields[i].value){
                    inputFields[i].style.border = "1px solid  hsl(0, 100%, 66%)";
                    inputFields[i].style.outline = "1px solid  hsl(0, 100%, 66%)";
                }
            });       
        }
    });
}
