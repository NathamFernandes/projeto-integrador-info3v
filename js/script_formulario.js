function Enviar() {
    var nome = window.document.getElementById("nomeid")
    var nome_convertido = String(nome.value)

    if (nome_convertido != "") {
        window.alert("Agradecemos pelo feedback, " + nome_convertido + ". Iremos utiliza-lo para melhorar nosso site :)")
    }
}  