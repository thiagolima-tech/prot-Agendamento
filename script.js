const btnAlert = document.querySelector(".btnAlert")

function fazerAlerta(numero){
    alert(numero)
}

btnAlert.addEventListener('click', () => {fazerAlerta(parseInt(Math.random()*100+1))})
