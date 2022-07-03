import validator from './validator.js';

let resultado = document.getElementById("resultado");
let cardNumber = document.getElementById("cardNumber");
let buy = document.getElementById("buy");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let validar = document.getElementById("confirm-purchase");
validar.addEventListener('click', (e) => {
    e.preventDefault();
console.log(validator.isValid(cardNumber.value)); 
//*resultado.innerText=validator.isValid(cardNumber.value)
if(validator.isValid(cardNumber.value)){
    resultado.innerHTML="Tu tarjeta es valida";
} else {
    resultado.innerHTML=`Tu tarjeta es inválida ${validator.maskify(cardNumber.value)}`;
}

});
buy.addEventListener("click", function(){
    card1.style.display = "none";
    card2.style.display = "block";
});
    


