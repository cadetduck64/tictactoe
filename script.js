//create a function that generates a board
//[function has to assign each cell with ID, player
//picks the ID and thats the choice]
//make function that determines winner
//[make a key based on cell ID for a winner]
//[probably an if statement]

let gameBoardMap = []

player = {

}

let game = {
    gameBoardMap
}

let gameBoardGen = () => {
//generates gameboard
let htmlDisplay = document.querySelector('#htmlDisplay')
for (let i = 0; i <= 8; i++) {
let cell = document.createElement('div')
cell.setAttribute('id', `plot${i}`)
cell.classList.add('cell')
cell.textContent = `${i}`
htmlDisplay.appendChild(cell)
gameBoardMap.push(cell)
cell.addEventListener('click', (e) => {e.target.textContent = 'X',
console.log(e.target.id)})}
}

gameBoardGen()
console.log(game)



let Referee = {}