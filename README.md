# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](images/screenshot.jpg)


### Links

- Solution URL: [https://github.com/mehdi-adham/base-apparel-coming-soon-master](https://github.com/mehdi-adham/base-apparel-coming-soon-master)
- Live Site URL: [https://mehdi-adham.github.io/base-apparel-coming-soon-master/](https://mehdi-adham.github.io/base-apparel-coming-soon-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow


### What I learned

Use linear-gradient adn write js code for form validate  


linear-gradient

```css
  background-image: url(images/bg-pattern-desktop.svg),
    linear-gradient(
      135deg,
      hsl(0, 0%, 100%),
      hsl(0, 100%, 98%),
      hsl(0, 80%, 86%)
    );
```

form validate with **onsubmit** in form element
JavaScript Form Validation


```html
<form name="emailform" action="#" onsubmit="return validateForm();" class="flex relative">
```


```js
function validateForm() {
  let result = true;
  const email_regex_error = "Please provide a valid email";
  const empty_error = "Please enter a email!";

  let email_el = document.forms["emailform"]["email"];
  /*let error_icon_el = document.forms["emailform"]["error-icon"];
  let error_txt_el = document.forms["emailform"]["error-txt"];*/
  let error_icon_el = document.getElementById("error-icon");
  let error_txt_el = document.getElementById("error-txt");

  error_txt_el.innerText = "";
  if (require(email_el.value)) {
    error_txt_el.innerText += empty_error;
    email_el.classList.add( "error-border");
    result = false;
  }
  if (!ValidateEmail(email_el.value)) {
    email_el.classList.add("error-border");
    error_txt_el.innerText +=
      (result == false ? "\n" : "") + email_regex_error;
    result = false;
  }

  if(!result){
    error_icon_el.classList.remove("hidden");
    error_icon_el.classList.add("view");
    error_txt_el.classList.remove("hidden");
    error_txt_el.classList.add("view");
  }
  return result;
}

}
```

Email regular expression function:

```js
function ValidateEmail(inputText)
{
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailformat.test(inputText))
    {
        return true;
    }
    else
    {
        return false;
    }
}
}
```

### Useful resources

- Email regular expression function:
[https://tutorial.eyehunts.com/js/email-regex-javascript-validation-example-code/](https://tutorial.eyehunts.com/js/email-regex-javascript-validation-example-code/)

- JavaScript Form Validation
[https://www.w3schools.com/js/js_validation.asp](https://www.w3schools.com/js/js_validation.asp)

- linear-gradient
  [https://www.w3schools.com/csSref/func_linear-gradient.asp](https://www.w3schools.com/csSref/func_linear-gradient.asp)

