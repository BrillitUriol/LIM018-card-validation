import validator from './validator.js';

 //var elemento = document.querySelector("#micampoid");
 //var elementoclass = document.querySelector(".micampoid");

document.addEventListener('DOMContentLoaded', () => {

    var cardNumberField = document.getElementById("cardNumber"),
    btnForm = document.getElementById("confirm-purchase"),
    btnBuy = document.querySelector("#buy"),
    screen1 = document.querySelector("#screen1"),
    screen2 = document.querySelector("#screen2");
    
    btnForm.addEventListener("click", (e) => {
        e.preventDefault();
       
        cardNumberField.classList.remove("credit-card-error");
        if(!validator.isValid(cardNumberField.value))
        {
            cardNumberField.classList.add("credit-card-error");
        }
    });
    btnBuy.addEventListener("click", (e) => {
        e.preventDefault();

        screen2.classList.remove("ocultar");
        screen1.classList.add("ocultar");

    });
    cardNumberField.addEventListener("keyup", (e) => {
        e.preventDefault();          
        cardNumberField.value = validator.maskify(cardNumberField.value);        
    });

})

