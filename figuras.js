// calculo de cuadrado 
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("lados del cuadrado miden "+ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimertro del cuadrado es   "+perimetroCuadrado+" cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("el Area del cuadrado es   "+areaCuadrada + "cm °");
console.groupEnd();

//codigo triangulo
console.group("triangulos");
const ladotriangulo1 =6;
const ladoTriangulo2 =6;
const ladoTriangulo3 = 4;
const alturaTriangola = 5.5;
console.log("los lados de los triangulos miden "+ladotriangulo1+"cm, "+ladoTriangulo2+"cm, "+ladoTriangulo3+"cm");
const perimetroTriangulo= ladotriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log("el perimetro de la el trinagulo es "+ perimetroTriangulo);
const areaTriandulo =(ladoTriangulo3 * alturaTriangola /2);
console.log("el area del triangulo es "+areaTriandulo);
console.groupEnd();

console.group("circulo");
const pi = 2.1416;
const PI = Math.PI;
console.log("el pi "+PI);
const radioCirculo = 4;
const diametroCirculo = (radioCirculo *2);
const perimetroCirculo = (diametroCirculo * PI);
const areacirculo =(radioCirculo * radioCirculo) * PI;

console.log("el radi del criculo es  "+areaTriandulo);
console.log("el diametro del circulo "+ diametroCirculo);
console.log("el perimetro de circulo "+perimetroCirculo);
console.log("el area de circulo es  "+areacirculo);
console.log("el pi "+PI);



console.groupEnd;
