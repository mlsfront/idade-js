document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const dataNascimento = new Date(document.getElementById('data').value);
    const dataAtual = new Date();

    let anos = dataAtual.getFullYear() - dataNascimento.getFullYear();
    let meses = dataAtual.getMonth() - dataNascimento.getMonth();
    let dias = dataAtual.getDate() - dataNascimento.getDate();

    // Ajuste de dias e meses
    if (dias < 0) {
        meses--;
        dias += new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h2>Idade: ${anos} anos, ${meses} meses e ${dias} dias.</h2>`;
});