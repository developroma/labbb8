let elemComputer = document.querySelector('.cscore');
let elemUser = document.querySelector('.uscore');
let userNameBlock = document.querySelector('.username');
let button = document.querySelector('button');
let userName = prompt("Введіть ім'я");
let forScoresC = document.querySelector('.scores__comp')
let forScoresU = document.querySelector('.scores__user')

userNameBlock.innerHTML += userName;

let allScoreComputer = 0
let allScoreUser = 0
button.addEventListener('click', game)


function game() {
    let scoreComputer = Math.round(Math.random()*10)
    let scoreUser = Math.round(Math.random()*10)
    
    if (scoreComputer > scoreUser) {
        allScoreComputer++;
    } else if (scoreComputer < scoreUser) {
        allScoreUser++;
    }
    forScoresC.innerHTML = scoreComputer
    forScoresU.innerHTML = scoreUser
    elemComputer.innerHTML = allScoreUser
    elemUser.innerHTML = allScoreComputer
    console.log(allScoreComputer, allScoreUser)
    if (allScoreUser === 3 || allScoreComputer === 3) {
        if (allScoreUser > allScoreComputer) {
            alert("Ви перемогли!")
        } else if (allScoreComputer > allScoreUser) {
            alert("Ви програли :(")
        }
        
        button.removeEventListener("click", game);
        
    }
}



