// app.js
document.getElementById('buscar').addEventListener('click', () => {
    const medicamento = document.getElementById('medicamento').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');

    // Limpa o resultado anterior
    resultadoDiv.innerHTML = '';

    // Busca o medicamento na lista
    const resultado = medicamentos.find(med => med.nome.toLowerCase() === medicamento);

    // Exibe o resultado
    if (resultado) {
        resultadoDiv.innerHTML = `<strong>${resultado.nome}</strong>: ${resultado.posologia}`;
    } else {
        resultadoDiv.innerHTML = 'Nenhum medicamento encontrado.';
    }
});

