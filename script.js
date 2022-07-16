'use strict';

const inputValue = document.querySelector('.answer');
const dataValidation = document.querySelector('.verify');
const buttonAppear = document.querySelector('.gitbutton');
let correct = false;

inputValue.addEventListener('blur', function(e)    {
    if(inputValue.value == 4)   {
        dataValidation.innerHTML = "Wrong ❌";
        dataValidation.style.color = "red";
        correct = false;
    }
    else    {
        dataValidation.innerHTML = "Correct! ✔️ <br> look down <br> ⬇️";
        dataValidation.style.color = "greenyellow";
        correct = true;
    }

    if (correct == true) {
    buttonAppear.style.visibility = "visible";
    }
    else {
        buttonAppear.style.visibility = "hidden";
    }
    }
)


