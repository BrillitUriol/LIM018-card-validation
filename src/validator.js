const validator = {
  isValid:function(creditCardNumber){
if( creditCardNumber == ""){
  throw new Error("no puede estar vacio")
}
    let array= creditCardNumber.split("");
   let numReverse=array.reverse();
   let arrayNumber=numReverse.map(Number);
   let numero=0;
   let suma=0;
   let esPar=false;
   for(let i=0;i<arrayNumber.length;i++){
    numero = arrayNumber[i]
    if(esPar){
     numero=parseInt(numero * 2)

    
    }
    if(numero >= 10)
     {numero= numero-9;

    }
    suma=suma + numero;
    //console.log(suma)
    numero = 0;
    esPar=!esPar;
  }
   
    return  (suma % 10 === 0);
  },


    
  maskify:function(creditCardNumber){
    return creditCardNumber.split('').map((valor, idx) => idx < creditCardNumber.length -4 ? "#" : valor).join('');
  }
}
export default validator;
