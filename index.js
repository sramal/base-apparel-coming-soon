/* 
    returns true or false if the email is valid.
*/
function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}


/*
    if the email is not valid then the error message
    and error icon are displayed.
*/
function validate() {
    const errorMessage = document.getElementsByClassName('error-message')[0];
    const errorIcon = document.getElementsByClassName('error-icon')[0];
    const emailInput = document.getElementsByClassName('input-field')[0];

    if (!validateEmail(emailInput.value)) {
        errorMessage.innerText = "Please provide a valid email"
        errorMessage.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
    }
}
    

/*
    when input gains focus then the error message and
    icon is hidden.
*/
function clearErrorMessage() {
    const errorMessage = document.getElementsByClassName('error-message')[0];
    const errorIcon = document.getElementsByClassName('error-icon')[0];

    errorMessage.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
}


/*
    below function will be called when user click the submit
    button
*/
function clickHandler(event) {
    const errorMessage = document.getElementsByClassName('error-message')[0];
    const errorIcon = document.getElementsByClassName('error-icon')[0];
    const emailInput = document.getElementsByClassName('input-field')[0];

    /* call validateEmail to validate the user input */
    if (!validateEmail(emailInput.value)) {
        /* error message and icon are made visible */
        errorMessage.innerText = "Please provide a valid email"
        errorMessage.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
    } else {
        /* everything is a okay. so I choose to clear the
           input field */
        emailInput.value = "";
    }
}