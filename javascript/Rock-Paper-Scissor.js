let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };
    updateScoreElem();

// if (!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }

let isAutoPlaying = false;
let intervalId;

document.querySelector('.auto-play').addEventListener('click', () => {
    autoPlay();
});

function autoPlay(){
    if(!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

document.querySelector('.btn').addEventListener('click', () => {
        playGame('Rock');
        playGame('paper');
        playGame('Scissor');
} );

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        playGame('Rock');
    }else if(event.key === 'p'){
        playGame('Paper');
    }else if(event.key === 's'){
        playGame('Scissor');
    }
});

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';
    
    if (playerMove == 'Scissor'){
        if (computerMove === 'Scissor'){
            result = 'Tie';
        } else if (computerMove === 'Rock'){
            result = 'You Lose';
        } else if (computerMove == 'Paper'){
            result = 'You Win';
        }

    } else if(playerMove == 'Rock'){
        if (computerMove === 'Rock'){
            result = 'Tie';
        } else if (computerMove === 'Paper'){
            result = 'You Lose';
        } else if (computerMove == 'Scissor'){
            result = 'You Win';
        }

    } else if(playerMove == 'Paper'){
        if (computerMove === 'Paper'){
            result = 'Tie';
        } else if (computerMove === 'Rock'){
            result = 'You Win';
        } else if (computerMove == 'Scissor'){
            result = 'You Lose';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElem();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = 
        `You 
        <img src="images/${playerMove}.png" class="icon">    
        <img src="images/${computerMove}.png" class="icon">
        Computer 
        `;
}

document.querySelector('.reset').addEventListener('click', () => {
    score.wins = 0;  
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElem();
});

function updateScoreElem() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
    const randomPick = Math.random();
    
    let computerMove = '';
    
    if (randomPick >= 0 && randomPick < 1 / 3) {
        computerMove = 'Rock';
    }else if (randomPick >= 1 / 3 && randomPick < 2 / 3) {
        computerMove = 'Paper';
    }else if (randomPick >= 2 / 3 && randomPick < 1){
        computerMove = 'Scissor';
    }
    
    return computerMove;
}