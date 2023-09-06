//create a function that generates a board
//[function has to assign each cell with ID, player
//picks the ID and thats the choice]
//make function that determines winner
//[make a key based on cell ID for a winner]
//[probably an if statement]

const player1Name = document.querySelector('#player1')
const player2Name = document.querySelector('#player2')
const getPlayerNames = document.querySelector('#names')
const resetButton = document.querySelector('#reset')

player1 = {playerName: player1Name.value,
    playerMark: 'X'
}

player2 = {playerName: player2Name.value,
    playerMark: 'O'
}

getPlayerNames.addEventListener('click', () => {player1Name})

referee = {
    playerBank1: [],
    playerBank2: [''],
    win123 : ['plot1','plot2','plot3'],
    win456 : ['plot4','plot5','plot6'],
    win789 : ['plot7','plot8','plot9'],
    //collumns
    win147 : ['plot1','plot4','plot7'],
    win258 : ['plot2','plot5','plot8'],
    win369 : ['plot3','plot6','plot9'],
    //rows
    win753 : ['plot7','plot5','plot3'],
    win159 : ['plot1','plot5','plot9']
}

let gameBoardGen = () => {
    //generates gameboard
    const htmlDisplay = document.querySelector('#htmlDisplay')
    for (let i = 1; i <= 9; i++) {
    const cell = document.createElement('div')
    cell.setAttribute('id', `plot${i}`)
    cell.classList.add('cell')
    cell.textContent = `${i}`
    htmlDisplay.appendChild(cell)


    cell.addEventListener('click', (e) => {
        if(referee.playerBank1.includes(e.target.id))
        {return console.log('ALREADY PICKED')} else if 
        (referee.playerBank2.includes(e.target.id))
        {return console.log('ALREADY PICKED')}

        if (referee.playerBank1.length < referee.playerBank2.length)
        {e.target.textContent = player1.playerMark;
            referee.playerBank1.push(e.target.id)}
        else if
        (referee.playerBank2.length <= referee.playerBank1.length)
        {e.target.textContent = player2.playerMark
            referee.playerBank2.push(e.target.id)}
    
        // referee.playerBank1.push(e.target.id)
        console.log(player1.playerName + ' ' + 'picked' + ' ' + referee.playerBank1)
        console.log(player2.playerName + ' ' + 'picked' + ' ' + referee.playerBank2)

        // let checkWin123 = referee.win123.every(i => referee.playerBank2.includes(i), console.log(`${player2.playerName} wins`)||
        // referee.win123.every(i => referee.playerBank1.includes(i)))
        // console.log(checkWin123)
        
        if (referee.win123.every(i => referee.playerBank2.includes(i))) {console.log(`${player2.playerName} wins`)}
        else if (referee.win123.every(i => referee.playerBank1.includes(i))) {console.log(`${player1.playerName} wins`)}

        if (referee.win456.every(i => referee.playerBank2.includes(i))) {console.log(`${player2.playerName} wins`)}
        else if (referee.win456.every(i => referee.playerBank1.includes(i))) {console.log(`${player1.playerName} wins`)}

        if (referee.win789.every(i => referee.playerBank2.includes(i))) {console.log(`${player2.playerName} wins`)}
        else if (referee.win789.every(i => referee.playerBank1.includes(i))) {console.log(`${player1.playerName} wins`)}

        if (referee.win147.every(i => referee.playerBank2.includes(i))) {console.log(`${player2.playerName} wins`)}
        else if (referee.win147.every(i => referee.playerBank1.includes(i))) {console.log(`${player1.playerName} wins`)}

        if (referee.win258.every(i => referee.playerBank2.includes(i))) {console.log(`${player2.playerName} wins`)}
        else if (referee.win258.every(i => referee.playerBank1.includes(i))) {console.log(`${player1.playerName} wins`)}

        if (referee.win369.every(i => referee.playerBank2.includes(i))) {console.log(`${player2.playerName} wins`)}
        else if (referee.win369.every(i => referee.playerBank1.includes(i))) {console.log(`${player1.playerName} wins`)}

        if (referee.win753.every(i => referee.playerBank2.includes(i))) {console.log(`${player2.playerName} wins`)}
        else if (referee.win753.every(i => referee.playerBank1.includes(i))) {console.log(`${player1.playerName} wins`)}

        if (referee.win159.every(i => referee.playerBank2.includes(i))) {console.log(`${player2.playerName} wins`)}
        else if (referee.win159.every(i => referee.playerBank1.includes(i))) {console.log(`${player1.playerName} wins`)}

        // //rows
        // const win123 = ['plot1','plot2','plot3']
        // const win456 = ['plot4','plot5','plot6']
        // const win789 = ['plot7','plot8','plot9']
        // //columns
        // const win147 = ['plot1','plot4','plot7']
        // const win258 = ['plot2','plot5','plot8']
        // const win369 = ['plot3','plot6','plot9']
        // //rows
        // const win753 = ['plot7','plot5','plot3']
        // const win159 = ['plot1','plot5','plot9']
        
        // //rows
        // let checkWin123 = win123.every(i => referee.playerBank1.includes(i))
        // console.log(checkWin123)
        // let checkWin456 = win456.every(i => referee.playerBank1.includes(i))
        // console.log(checkWin456)
        // let checkWin789 = win789.every(i => referee.playerBank1.includes(i))
        // console.log(checkWin789)
        // //columns
        // let checkWin147 = win147.every(i => referee.playerBank1.includes(i))
        // console.log(checkWin147)
        // let checkWin258 = win258.every(i => referee.playerBank1.includes(i))
        // console.log(checkWin258)
        // let checkWin369 = win369.every(i => referee.playerBank1.includes(i))
        // console.log(checkWin369)
        // //diagonal
        // let checkWin753 = win753.every(i => referee.playerBank1.includes(i))
        // console.log(checkWin753)
        // let checkWin159 = win159.every(i => referee.playerBank1.includes(i))
        // console.log(checkWin159)
    })
    }
}

getPlayerNames.addEventListener('click', () => {player1.playerName = player1Name.value, player2.playerName = player2Name.value, gameBoardGen()})

const reset = () => {
referee.playerBank1 = []
referee.playerBank2 = ['']
while (htmlDisplay.hasChildNodes) {
htmlDisplay.removeChild(htmlDisplay.firstChild)}
}

resetButton.addEventListener('click', () => {reset()})

//tried to find an algorithm for game win by adding cell values, didnt work
//15
//6
//25
//12