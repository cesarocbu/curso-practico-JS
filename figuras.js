//código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es de: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
} 
// console.log("El area del cuadrado es de: " + areaCuadrado + " cm2");
console.groupEnd();

//código del triangulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del Triángulo miden " 
//     + ladoTriangulo1 
//     + "cm, "
//     + ladoTriangulo2 
//     + "cm, y la base mide "
//     + baseTriangulo
//     + "cm."
//     );


// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


function alturaTriangulo(primerLado, segundoLado, baseIso){
    if(primerLado === segundoLado && primerLado != baseIso){
    
    const cuatro = 4;
    const valor1 = Number(primerLado) * Number(segundoLado);
    const valor2 = Number(baseIso) * Number(baseIso);
    const valor3 = Number(valor2) / Number(cuatro);
    const valor4 = Number(valor1) - Number(valor3);
    return Math.sqrt(valor4);
        
    }else{
        alert("No es un triángulo isosceles.")
    }

}


// console.log("El area del triangulo es de: " + areaTriangulo + " cm2");

console.groupEnd();


//Circulo
console.group("Circulo");
// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es de: " + radioCirculo + " cm");
// Diametro

function diametroCirculo(radio){
    return radio * 2;
}
// pi
const PI = Math.PI;
// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();



//Empieza interaccion con HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro de tu cuadrado es: " + perimetro.toFixed(2));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area de tu cuadrado es: " + area.toFixed(2));
}

//Triangulo
function calcularPerimetroTriangulo(){
    const ladouno = document.getElementById("lado1");
    const lado1T = parseInt(ladouno.value);

    const ladodos = document.getElementById("lado2");
    const lado2T = parseInt(ladodos.value);

    const baseTri = document.getElementById("base");
    const baseT = parseInt(baseTri.value);

    const perimetro = perimetroTriangulo(lado1T, lado2T, baseT);
    alert("El perimetro de tu triangulo es de: " + perimetro.toFixed(2));
}




function calcularAreaTriangulo(){
    const baseTri = document.getElementById("base");
    const baseT = parseInt(baseTri.value);

    const alturaT = document.getElementById("altura");
    const altura = parseInt(alturaT.value);

    const area = areaTriangulo(baseT, altura);
    alert("El area de tu triangulo es de: " + area.toFixed(2));
}

function calcularAlturaTriangulo(){
    const ladouno = document.getElementById("lado1");
    const lado1T = parseInt(ladouno.value);

    const ladodos = document.getElementById("lado2");
    const lado2T = parseInt(ladodos.value);

    const baseTri = document.getElementById("base");
    const baseT = parseInt(baseTri.value);

    const altura = alturaTriangulo(lado1T, lado2T, baseT);
    alert("La altura de tu triángulo isosceles es de: " + altura.toFixed(2));
}


//Circulo

function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("inputCirculo");
    const radioC = parseInt(radioCirculo.value);

    const perimetro = perimetroCirculo(radioC);
    alert("El perimetro de tu Circulo es de: " + perimetro.toFixed(2));

}


function calcularAreaCirculo (){
    const radioCirculo = document.getElementById("inputCirculo");
    const radioC = parseInt(radioCirculo.value);

    const area = areaCirculo(radioC);
    alert("El area de tu Circulo es de: " + area.toFixed(2));
}





