'use strict';

const inputValue = document.querySelector('.answer');
const dataValidation = document.querySelector('.verify');

inputValue.addEventListener('blur', function(e)    {
    if(inputValue.value == 4)   {
        dataValidation.innerHTML = "Wrong ❌";
        dataValidation.style.color = "red";
    }
    else    {
        dataValidation.innerHTML = "Correct! ✔️";
        dataValidation.style.color = "greenyellow";
    }
    }
)