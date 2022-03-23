//código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es de: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es de: " + areaCuadrado + " cm2");
console.groupEnd();

//código del triangulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del Triángulo miden " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, y la base mide "
    + baseTriangulo
    + "cm."
    );


const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de: " + perimetroTriangulo+ " cm");


const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + " cm2");

console.groupEnd();


//Circulo
console.group("Circulo");
// Radio
const radioCirculo = 4;
console.log("El radio del circulo es de: " + radioCirculo + " cm");
// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de: " + diametroCirculo + " cm");
// pi
const PI = Math.PI;
// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("Su circunferencia es de: " + perimetroCirculo + " cm");
// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("Su area es de: " + areaCirculo + " cm2");

console.groupEnd();
