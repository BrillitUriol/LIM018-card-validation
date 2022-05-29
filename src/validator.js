const validator = {
  isValid:function(creditCardNumber){

    
    if (/[^0-9]+/.test(creditCardNumber))
    {
      //console.log("Solo ingrese digitos numericos");
      return false;
    } 
  
    // The Luhn Algorithm. It's so pretty.
    var nCheck = 0, nDigit = 0, bEven = false,
      value = creditCardNumber.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n);
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9; // nDigit = nDigit - 9;
        }

        nCheck += nDigit; // nCheck = ncheck + nDigit;
        bEven = !bEven;
    }

    if((nCheck % 10) == 0)
    {
      //console.log("Numero de Tarjeta válido");
      return true;
    }

    //console.log("Numero de Tarjeta inválido");
    return false;
  },
  maskify:function(creditCardNumber){
    return creditCardNumber.replace(/.(?=.{4})/g, "#");
},
}
export default validator;
