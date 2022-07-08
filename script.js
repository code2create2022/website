'use strict';

const inputValue = document.querySelector('.answer');
const dataValidation = document.querySelector('.verify');

document.addEventListener('keypress', function(e)    {
    if(e.code === "Enter")  {
        if(inputValue.value == 4)   {
            dataValidation.innerHTML = "Wrong";
            dataValidation.style.color = "red";
        }
        else    {
            dataValidation.innerHTML = "Correct!";
            dataValidation.style.color = "greenyellow";
        }
    }
    }
)