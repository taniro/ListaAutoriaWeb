function alteraTexto(a){
    let paragrafo = document.getElementById("cor")
    let body = document.getElementById("root")
    paragrafo.innerText = a

    switch(a){
        case "Vermelho":
            //paragrafo.setAttribute("style", "color:red")
            body.setAttribute("style", "background-color:red;")
            break
        case "Azul":
            paragrafo.setAttribute("style", "color:blue")
            break
        case "Amarelo":
            paragrafo.setAttribute("style", "color:yellow")
            break
        case "Verde":
            paragrafo.setAttribute("style", "color:green")
            break
        default:
            paragrafo.setAttribute("style", "")
            console.log("Cor não suportada")
            break
    }
}