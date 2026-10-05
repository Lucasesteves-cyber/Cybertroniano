/**
 * Função chamada ao clicar no botão CODIFICAR
 */
function handleTranslate() {
    // 1. Obter o texto de entrada do utilizador
    const inputElement = document.getElementById('inputText');
    const outputElement = document.getElementById('outputText');
    const textToTranslate = inputElement.value.trim();

    // Validar se o campo não está vazio
    if (!textToTranslate) {
        outputElement.value = '[ERRO // NENHUM DADO DETETADO PARA PROCESSAR]';
        return;
    }

    // 2. Obter a facção selecionada (autobot ou decepticon)
    const selectedFaction = document.querySelector('input[name="faction"]:checked').value;

    // 3. Executar a função de codificação definida em cipher.js
    const result = encodeToCybertronian(textToTranslate, selectedFaction);

    // 4. Exibir o resultado no campo de saída
    outputElement.value = result;
}