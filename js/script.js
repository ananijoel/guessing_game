const buttons = document.querySelectorAll('.button')
const textZone = document.querySelector('#textzone')
const compteur = document.querySelector('.compteur')
const bar = document.querySelector('.bar')
const subbar = document.querySelector('.subbar')

const maximum = 101
const nombreAleatoire = Math.floor(Math.random() * maximum);
const inputArea = document.querySelector('input')
console.log(nombreAleatoire)
let i = 0
textZone.innerText = `Essayez de deviner le nombre mystere entre 0 et ${maximum-1} avec le moins  de tentatives possibles `
inputArea.value = ''
function isRight(number) {
    if (number === nombreAleatoire) {
        document.getElementById('Container').className = "winner_mainContainer"
        document.querySelector('.winner_mainContainer').innerText= `Vous avez gagné en ${++i} tentative${i<=1? "": "s"} Felicitations`
    } else {
        compteur.innerText = `${++i} tentative${i<=1? "": "s"}`
        textZone.className = "textZone_wrong"
        if(number < nombreAleatoire){

            textZone.innerText = `Le nombre mystere est plus grand que ${number} `
            subbar.style.width = `${number<=100? number: 100}%`
            bar.style.backgroundColor = "#03674f"
            subbar.style.backgroundColor = "#f66969"

        }
        else {
            subbar.style.width = `${number<=100? number: 100}%`
            bar.style.backgroundColor = "#f66969"
            subbar.style.backgroundColor = "#03674f"
            textZone.innerText = `Le nombre mystere est plus petit que ${number}`
        }


    }

}

for (let button of buttons) {

    button.addEventListener('click', (e) =>{
        let data = e.target.innerText;
        switch (data){
            case "Delete":
                if(inputArea.value){
                    inputArea.value = inputArea.value.slice(0,-1)
                    console.log(data);
                }
                break;
            case "Enter":
                if(inputArea.value === ""){
                    textZone.className = "textZone_wrong"
                    textZone.innerText = "Saisie vide ! Proposition invalide"
                } else if(!parseInt(inputArea.value)) {
                    textZone.className = "textZone_wrong"
                    textZone.innerText = "Vous avez saisie des lettres ! Proposition invalide"
                }
                else {
                    isRight(parseInt(inputArea.value))
                }
                inputArea.value =""
                break;
            default :
                inputArea.value += data
        }



    })
}

