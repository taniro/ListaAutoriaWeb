function imprimeTabela(){
    let numero = document.getElementById("numero").value

    let root = document.getElementById("root")
    let tabelaVelha = document.getElementById("tabela")
    
    root.removeChild(tabelaVelha)

    let tabela = document.createElement("table")
    tabela.setAttribute("id", "tabela")
    tabela.setAttribute("style", "border: 1px solid red;")

    root.appendChild(tabela)

    for (let i = 0; i <= 10; i++){
        let tr = document.createElement("tr")
        let td = document.createElement("td")

        //td.innerText = numero + " x " + i + " = " + numero * i
        td.innerText = `${numero} x ${i} = ${numero * i}`

        tr.appendChild(td)
        tabela.appendChild(tr)
    }
}