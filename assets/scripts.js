var resultado = document.getElementById("resultado");

resultado.style.display = "none";

// FUNÇÃO DE VERIFICAR O PALÍNDROMO
function verificar() {
    let phrase = document.getElementById("palindromo").value;

    let otherPhrase = phrase.split("").reverse().join("");

    if(phrase === "") {
        resultado.innerHTML = "⚠ Escreva algo!";
    } else if (phrase === otherPhrase) {
        resultado.innerHTML = "✅ É um palíndromo!";
    } else if (phrase != otherPhrase) {
        resultado.innerHTML = "❌ Não é um palíndromo.";
    }

    console.log(phrase);
    
    console.log(otherPhrase);

    resultado.style.display = "block";
}

// FUNÇÃO PARA LIMPAR O INPUT
function limpar() {
    let phrase = document.getElementById("palindromo").value = "";

    resultado.innerHTML = "";

    resultado.style.display = "none";
}