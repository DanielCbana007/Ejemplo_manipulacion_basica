const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const imput1 = document.querySelector('#calculo1');
const imput2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const resutado = document.querySelector('#resultado');

// btnCalcular.addEventListener('click', btnoneclik);
form.addEventListener('submit', sumar)

function sumar(event) {
    // console.log(event);
    event.preventDefault();
    const operacion = parseInt(imput1.value) + parseInt(imput2.value);
    resutado.innerText = `el resultado es: ${operacion}`;
}
