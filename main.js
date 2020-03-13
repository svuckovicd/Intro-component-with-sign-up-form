//load page

function init() {
    removeInputs()
    let btn = document.getElementById('btn');
    btn.addEventListener('click', validInputs);
}
//   remove input 


function removeInputs() {
    let inputs = document.querySelectorAll('.inp-group input');
    for (let input of inputs) {
        input.value = '';
    }
}


//button validation

function validInputs(event) {
    let inputs = document.querySelectorAll('.inp-group input');
    let email = document.querySelector('.inp-group input[type="email"]');

    event.preventDefault();
    for (let input of inputs) {
        let placeHolder = input.getAttribute('placeholder');
        let span = input.parentElement.querySelector('span');

        //validation for all inputs

        if (input.value.trim() == '') {
            span.innerHTML = `${placeHolder} cannot be empty`;
        } else {
            span.innerHTML = '';
            input.style.borderColor = 'green'
            emailValidation(email)

        }
    }
}

//email validation        

function emailValidation(email) {
    let span = email.parentElement.querySelector('span')
    let mailValue = email.value;
    let mail = ['yahoo', 'gmail']
    console.log(mailValue)
    if (mailValue.toLowerCase().indexOf('@') == -1) {
        span.innerHTML = 'must include "@"'
        return;
    }
    if (!mailValue.toLowerCase().includes('gmail') && !mailValue.toLowerCase().includes('yahoo')) {
        span.innerHTML = 'only supports "GMAIL or YAHOO"'
        return
    }
    email.style.borderColor = 'green'

}


window.addEventListener('load', init);
