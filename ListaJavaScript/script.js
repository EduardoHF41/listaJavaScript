//atividade 1
function Numero1(){
    var numero1 = parseFloat(document.getElementById("PrimeiroNumero").value);
    var numero2 = parseFloat(document.getElementById("SegundoNumero").value);
    if(numero1 > numero2){
        alert('O maior numero é:' + numero1)
    }else if(numero2 > numero1){
        alert('O numero maior é:' + numero2)
    }else{
        alert('Os numero tem o mesmo valor')
    }
}

//atividade 2
function Nota(){
    var numero1 = parseFloat(document.getElementById("nota").value); 
    if(numero1 < 6){
        alert('Aluno Reprovado PRODRE');
    }else if(numero1 >= 6 && numero1 < 8){
        alert('Aprovado :)');
    }else{
        alert('Aluno Aprovado com louvor, GLORIA A DEUXXX!');
    }
}

//atividade 3
function vetor(){
    var soma = 0;
    var media = 0
    numeros = new Array(5);
    for (var i = 1; i < 6; i++){
        numeros[i] = parseFloat(document.getElementById("num"+i).value);
        if (isNaN(numeros[i])){
            alert("Preencha o vetor corretamente!");
            return
        }
        soma += numeros[i]
    }
    media = soma/5
    alert('A média entre os numeros do vetor é:' + media)
}


//atividade 4
function letras(){
    var letra = document.getElementById("Letra").value; 
    if(letra == 'a' || letra == 'A'){
        alert('A');
    }else if(letra == 'b' || letra == 'B'){
        alert('B');
    }else{
        alert('Outra letra');
    }
}

//atividade 5
function somaMatriz(){
    var matriz = new Array(3);

    for (var i = 0; i < 3; i++) {
        matriz[i] = new Array(3);
    }

    for (var i = 0; i<3; i++){
        for(var j = 0; j < 3; j++){
            var numero = "numero" + i + j;
            matriz[i][j] = parseFloat(document.getElementById(numero).value);
        }
    }

    var soma = 0;

    for (var i = 0; i<3; i++){
        for(var j =0; j<3; j++){
            if(isNaN(matriz[i][j])){
                alert("Preencha todos os campos da MATRIZ!");
                return;
            }
            soma += matriz[i][j];
        }
    }

    alert("A soma de todos os elementos da matriz é: " + soma);


}
//atividade 6
function fatorial() {
    var number = parseFloat(document.getElementById('number').value);
    var resultado = 1;
    for(i = number ; i > 0; i--){
        resultado = resultado * i;
    }
    alert('O fatorial do numero é:' + resultado);
  }

//atividade 7
function num8op1(){
    alert('Opção 1 escolhida')
}
function num8op2(){
    alert('Opção 2 escolhida')
}
function num8op3(){
    alert('Opção 3 escolhida')
}

//atividade 8
function vetor2(){
    vetornum = new Array(5);
    for (var i = 1; i < 6; i++){
        vetornum[i] = parseFloat(document.getElementById("numb"+i).value);
        if (isNaN(vetornum[i])){
            alert("Preencha o vetor corretamente!");
            return
        }
    }
    var maior = 0
    for(i = 1; i < 6; i++){
        if(maior < vetornum[i]){
            maior = vetornum[i];
        }
    }
    alert('o maior numero do vetor é:' + maior);
}
//atividade 9
function matriz2(){
    var matriz2 = new Array(3);

    for (var i = 0; i < 3; i++) {
        matriz2[i] = new Array(3);
    }

    for (var i = 0; i<3; i++){
        for(var j = 0; j < 3; j++){
            var numero = "num" + i + j;
            matriz2[i][j] = parseFloat(document.getElementById(numero).value);
        }
    }

    var soma = 0;

    for (var i = 0; i<3; i++){
        for(var j =0; j<3; j++){
            if(isNaN(matriz2[i][j])){
                alert("Preencha todos os campos da MATRIZ!");
                return;
            }
            soma += matriz2[i][j];
        }
    }
    var resultado = soma/9
    alert("a média dos elementos da matriz é: " + resultado);


}