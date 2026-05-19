function verificarLogin() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    
    if (login === "admin" && senha === "123456") {
        alert("acesso liberado!");
        window.location.href="produtos.html";
    } else {
        alert("acesso negado!")
    }

    login = document.getElementById("login").value = "";
    senha = document.getElementById("senha").value = "";





}
