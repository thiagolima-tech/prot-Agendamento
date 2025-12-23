const btnAlert = document.querySelector(".btnAlert")

function fazerAlerta(numero){
    alert(numero)
}

btnAlert.addEventListener('click', () => {fazerAlerta(parseInt(Math.random()*100+1))})

const btnAviso = document.querySelector(".btnAviso")

function fazerAviso(){
    alert("Conflito de horário!");
    let resposta= prompt("Qual compromisso devo alterar?");
    alert(resposta);
}

btnAviso.addEventListener('click', () => {fazerAviso()})


const formAgendar= document.querySelector("#formAgendar")

formAgendar.addEventListener("submit", () =>{
    event.preventDefault() 
    const time= document.querySelector("#time").value
     const prioridade= document.querySelector("#prioridade").value
     console.log(time, prioridade)
})


