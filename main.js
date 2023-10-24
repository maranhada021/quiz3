function verificarRespostas() {
    var respostasCorretas = {
        pergunta1: "Groundwater",
        pergunta2: "Doing laundry",
        pergunta3: "Approximately 70%",
        pergunta4: "Water footprint",
        pergunta5: "Using a drip irrigation system",
        pergunta6: "2.5%",
        pergunta7: "Agricultural runoff",
        pergunta8: "8 glasses (approximately 2 liters)",
    };

    var pontuacao = 0;

    for (var pergunta in respostasCorretas) {
        var respostas = document.getElementsByName(pergunta);

        for (var i = 0; i < respostas.length; i++) {
            if (respostas[i].checked && respostas[i].value === respostasCorretas[pergunta]) {
                pontuacao++;
                break;
            }
        }
    }

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Pontuação: " + pontuacao + " de " + Object.keys(respostasCorretas).length;
}
