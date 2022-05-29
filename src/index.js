import validator from './validator.js';


document.addEventListener('DOMContentLoaded', () => {

    var cardNumberField = document.getElementById("cardNumber"),
    btnForm = document.getElementById("confirm-purchase");
    
    btnForm.addEventListener("click", (e) => {
        e.preventDefault();
       
        cardNumberField.classList.remove("credit-card-error");
        if(!validator.isValid(cardNumberField.value))
        {
            cardNumberField.classList.add("credit-card-error");
        }
    });
    cardNumberField.addEventListener("keyup", (e) => {
        e.preventDefault();          
        cardNumberField.value = validator.maskify(cardNumberField.value);        
    });

})

