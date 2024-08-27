document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = inputText
        .replace(/e/g, '#')
        .replace(/i/g, '@')
        .replace(/a/g, 'z')
        .replace(/o/g, '%')
        .replace(/u/g, '&');
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = inputText
        .replace(/#/g, 'e')
        .replace(/@/g, 'i')
        .replace(/Z/g, 'a')
        .replace(/%/g, 'o')
        .replace(/&/g, 'u');
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    // prompt('Texto copiado para a área de transferência!');//
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
});
