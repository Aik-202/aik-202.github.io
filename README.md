# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card name, card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](/screenshots/preview.png)

### Links

- Solution URL: [Add solution URL here](https://frontendmentor.io/solutions/css-grid-vanilla-javascript-local-storage-fGh0BpGaCl.com)
- Live Site URL: [Add live site URL here](https://aik-202.github.io/aik-interactive-card-details-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- CSS Grid
- CSS media queries
- Vanilla JavaScript
- Javascript Local Storage.
- Desktop-first workflow

### What I learned
- I've always built my webpages using CSS Flex-box, but i decided to give CSS grid a chance, so in this project i learnt how to use CSS grid, it was pretty strange at first, but i got use to it and was able to get comfortable with it. 
- I also learnt a few JavaScript regular expressions like /\d/,/[a-zA-z]/, /[0-9]/, which i used to test the type of value the user entered. 
- I also learnt some JavaScript events that I have not used before, like the onfocusout, onmouseout and oninput

```html
<div class="grouped">
          <div class="exp_dates">
            <label for="exp_date">Exp. Date (MM/YY)</label>
            <div>
              <div class="input_div2">
                <input type="text" placeholder="MM" id="exp_date" maxlength="2" onmouseout="check2()">
                <p id="error_message"></p>
              </div>
              <div class="input_div2">
                <input type="text" placeholder="YY" id="exp_date" maxlength="2">
                <p id="error_message"></p>
              </div>
            </div>
          </div>
          <div class="cvc">
            <label for="cvc"> CVC</label>
            <div class="input_div3">
              <input type="text" placeholder="e.g. 123" maxlength="3">
              <p id="error_message"></p>
            </div>
          </div>
        </div>
```
```css
.card_front {
    grid-row: 1/1;
    display: grid;
    grid-template-rows: auto auto;
    align-content: space-between;
    padding-top: 20px;
    padding-left: 28px;
    padding-right: 10px;
    background-image: url("./images/bg-card-front.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 90%;
    color: hsl(0, 0%, 100%);
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 30px;
}
```
```js
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
```

### Continued development

I really love to continue learning about JavaScript regular expressions and about other JavaScript events, and also use more of CSS grid and Javascript local storage.

### Useful resources

- [Example resource 1](https://www.w3schools.com) and (https://www.mdn.com) - Helped me learn about CSS grid. I really liked this pattern and will use it going forward. It also helped me understand some JavaScript events
- [Example resource 2](https://bobbyhadz.com/blog/javascript-check-if-string-contains-numbers) - This is an amazing article which helped me understand regular expressions in JavaScript. I'd recommend it to anyone, its very good in identifying type of values in a string .

## Author
- Github - [@Aik-202](https://github.com/Aik-202/interactive-card-detail-form.git)
- Frontend Mentor - [@Aik-202](https://www.frontendmentor.io/profile/Aik-202)
- Twitter - [@chiomaikogwe](https://www.twitter.com/chiomaikogwe)
