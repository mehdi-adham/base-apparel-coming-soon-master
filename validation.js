/*
Solution 1. 
JavaScript Form Validation
https://www.w3schools.com/js/js_validation.asp 
*/
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

/*
Email regular expression function:
https://tutorial.eyehunts.com/js/email-regex-javascript-validation-example-code/
*/
function ValidateEmail(inputText)
{
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailformat.test(inputText)/*inputText.value.match(mailformat)*/)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function require(inputText){
  if(inputText=="")
    {
        return true;
    }
    else
    {
        return false;
    }
}