import "./styles.css";

document.write("<h1>Medir el Imc</h1>");

function saltarLinea() {
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
}

function print(text) {
  document.write(text);
  saltarLinea();
  return;
}

function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

let nombre = prompt("Ingrese su Nombre");
let pesoInfo = prompt(nombre + " Ingrese su peso");
let alturaInfo = prompt(nombre + " Ingrese su altura");

let imcCalculado = calcularImc(pesoInfo, alturaInfo);

print(nombre + ", su imc es: " + imcCalculado);

if (imcCalculado < 18.5) {
  print("Usted posee insuficiencia ponderante");
}

if (imcCalculado >= 18.5) {
  if (imcCalculado < 25) {
    print("Usted posee un peso normal");
  }
}

if (imcCalculado >= 25) {
  if (imcCalculado < 30) {
    print("Usted posee sobrepeso");
  }
}

if (imcCalculado >= 30) {
  print("Usted posee obesidad");
}
