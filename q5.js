function validar(){
    let login = document.getElementById("login")
    let senha = document.getElementById("senha")
    let confirma = document.getElementById("confirma")

    if (login.value === "" || senha.value === "" || confirma.value === ""){
        alert("Algum dos campos está vazio")
    }else if (senha.value !== confirma.value){
        alert("As senhas não conferem")
    }else if (senha.value.length <6 || senha.value.length >10){
        alert("A senha não tem entre 6 e 10 caracteres")
    }else{
        alert("Tudo OK")
    }
}