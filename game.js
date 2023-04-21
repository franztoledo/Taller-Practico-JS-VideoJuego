const canvas = document.querySelector('#game__layout')
const game = canvas.getContext('2d')
let canvasSize;
let elementSize;

window.addEventListener('load',setCanvasSize)
window.addEventListener('resize',setCanvasSize)

function setCanvasSize() {
    if(window.innerHeight > window.innerWidth){
        canvasSize =window.innerWidth *0.8
    }else{
        canvasSize =window.innerHeight*0.7
    }
    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

    elementSize= (canvasSize/12)-1

    startGame()
}


function startGame() { 
    game.font= elementSize +'px Verdana'
    const map = maps[2]
    const mapRows= map.trim().split('\n')
    const mapColumns= mapRows.map(row=> row.trim().split(''))
    console.log(mapColumns)
    for (let i= 0; i < 12; i++) {
        for (let z = 1; z <= 12; z++) {
            game.fillText(emojis[mapColumns[z-1][i]], elementSize*i, elementSize*z)   
        }
    }
    // game.fillRect(0,0,100,100)
    // game.clearRect(0,0,100,50);
    // game.font = '25px Verdana'
    // game.fillStyle = 'Blue';
    // game.textAlign = 'center';
    // game.fillText('Franz', 25, 25);
}