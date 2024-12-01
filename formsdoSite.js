function validarForms(event) {
    event.preventDefault();
}
var nome = document.getElementById("nome").Value;
var email = document.getElementById("email").Value;
var feedback = document.getElementById("feedback").Value;

if (nome === "") {
    alert("O campo 'Nome' devera ser preenchido.");
    return false;
}

var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!regexEmail.test(email)) {
    alert("O emal inserido esta invalido, por favor insira um que seja valido.");
    return false;
}

if (feedback === "") {
    alert("O campo 'Feedback' devera ser preenchido.");
    return false;
}

alert("Feedback foi enviado, obrigado.");
document.getElementById("FormFeedback").submit();
