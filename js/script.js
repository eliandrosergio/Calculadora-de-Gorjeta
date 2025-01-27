
function calcularGorjeta(event) {
    event.preventDefault();

    const valor = document.getElementById('valor').value;
    const qualidade = document.getElementById('qualidade').value;
    const numClientes = document.getElementById('numClientes').value;
    const gorjeta = document.getElementById('gorjeta');

    console.log(valor);

    if (valor == '' || valor <= 0 || numClientes < 1) {
        gorjeta.innerHTML = `Por favor, preencha correctamente os campos acima!`;
    } else {
        let total = (valor * qualidade / numClientes);
        total = total.toFixed(2).replace('.', ',');

        gorjeta.innerHTML = `<span>${total}Kz</span>`;
    }
}

document.querySelector('form').addEventListener('submit', calcularGorjeta);
