// step-1 add click handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: Get The Email address inside the email address field
    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email')
    const email = emailField.value;
   // step-3 get the password
    // 3.a set id on the html element
    // 3.c get the  element
    // 3.b get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // Danger: DoNOT VERIFY email and password to client Side
    // step-4 verify email and password
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'Bank.html';
    }
    else{
        alert('Tui Password Vule Gesos.Toke Ami Teijjo sontan Korlam');
    }

})