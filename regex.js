function validarString() {
    var inputElement = document.getElementById("inputString");
    var resultadoElement = document.getElementById("resultado");
  
    var mensagem = inputElement.value;
    var expressaoRegular = /[Tt]/g;
    var resultado = mensagem.replace(expressaoRegular, "7");
  
    resultadoElement.innerText = resultado;
  }
