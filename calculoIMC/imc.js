
// guardando o valor do peso e da altura


var peso1 = parseFloat(prompt("Digite o seu peso:"));
var altA = parseFloat(prompt("Digite o valor da sua altura:"));



// calculo imc 


var calculoImc = peso1 / (altA * altA)



// impressão dos resultados e categorias

//18.50 – 24.99: Peso Normal.
//25.00 – 29.99: Pré-Obesidade.
//30.00 – 34.99: Obesidade Grau I.
//35.00 – 39.99: Obesidade Grau II.
//≥40.00: Obesidade Grau III.



if (calculoImc >= 18.50){
    console.log("VOCÊ ESTÁ NORMAL");
}

else if (calculoImc >= 24.9 && calculoImc <= 29.9){
    console.log("PRÉ-OBESIDADE");
}

else if (calculoImc >= 30 && calculoImc <= 34.9){
    console.log("OBESIDADE GRAU I");   
}

else if (calculoImc >= 35 && calculoImc <= 39.9){
    console.log("OBESIDADE GRAU II");
}

else if (calculoImc >= 40) {
     console.log("VOCÊ ESTA IGUAL A THAIS CARLA");
}

else {
    console.log("VOCÊ NÃO TEM PESO");
}












