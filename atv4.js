function calcularMontante() {
    C = document.getElementById('ncapital').value;
    i = document.getElementById('ntaxa').value * 0.01;
    t = document.getElementById('ntempo').value;

    M = C * ((1+i) ** t);
    resposta = M.toFixed(2);
    document.getElementById("resp").innerHTML = "R$: " + resposta;
    document.getElementById("resp").style.display = "block";
}

function modoClaroEscuro(){
    
}