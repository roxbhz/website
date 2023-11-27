function abrir() {
    URL = "../os.html";
    window.open(URL, 'janela', 'width=660, height=510, top=100, left=699, scrollbars=yes, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
}

function searchos() {
    var inputElement = document.getElementById("os-number");
    var valorInput = inputElement.value;
    var caracteres = valorInput.length;

    if (caracteres > 7) {
        console.log("Quantidade de caracteres maior que 8.");
        // Código se a condição for verdadeira
    } else {
        alert("A quantidade de caracteres deve ser maior que 8.");
        // Código se a condição for falsa
    }
}