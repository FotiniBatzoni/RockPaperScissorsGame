const secretValue = document.getElementById('secretValue');
const resultEl = document.getElementById('result');
const form = document.getElementById('form');
console.log(form);
const yScoreEl = document.getElementById('yScore');
const pScoreEl = document.getElementById('pScore');

let userScore = 0;
let pcScore = 0;

const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    let pcChoice;

    if (randomNum === 0) {
        pcChoice = 'rock';
        secretValue.innerHTML = `${pcChoice}`;
        return pcChoice;
    } else if (randomNum === 1) {
        pcChoice = 'paper';
        secretValue.innerHTML = `${pcChoice}`;
        return pcChoice;
    } else {
        pcChoice = 'scissors';
        secretValue.innerHTML = `${pcChoice}`;
        return pcChoice;
    }

    // secretValue.innerHTML = `${randomNum}`;
    // switch (randomNum) {
    //     case 0:
    //         return 'rock';
    //     case 1:
    //         return 'paper';
    //     case 2:
    //         return 'scissors';
    // }
    // console.log(randomNum);

};


const result = (userChoice, computerChoice) => {
    console.log(userChoice, computerChoice);
    if (userChoice === computerChoice) {
        resultEl.innerHTML = 'The game is a tie!';
        console.log('The game is a tie!');
        return 'The game is a tie!';

    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            resultEl.innerHTML = 'Computer wins :(';
            pcScore++;
            pScoreEl.innerHTML = `${pcScore}`;
            return 'computer wins';

        } else if (computerChoice === 'rock') {
            resultEl.innerHTML = 'You win :) !!!';
            userScore++;
            yScoreEl.innerHTML = `${userScore}`;
            return 'you win';
        }
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            
            resultEl.innerHTML = 'Computer wins :(';
            pcScore++;
            console.log(pcScore);
            pScoreEl.innerHTML = `${pcScore}`;
            return 'computer wins';

        } else if (computerChoice === 'scissors') {
            resultEl.innerHTML = 'You win :) !!!';
            userScore++;
            yScoreEl.innerHTML = `${userScore}`;
            return 'you win';

        }
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            resultEl.innerHTML = 'Computer wins :(';
            pcScore++;
            console.log(pcScore);
            pScoreEl.innerHTML = `${pcScore}`;
            return 'computer wins';

        } else if (computerChoice === 'paper') {
            resultEl.innerHTML = 'You win :) !!!';
            userScore++;
            yScoreEl.innerHTML = `${userScore}`;
            return 'you win';

        }
    }
};


form.addEventListener('click', checked);


function checked(event) {
    //  event.log(event.target);
    console.log(event.target.value);
    console.log(event.target.checked);

    const userChoice = event.target.value;
    const computerChoice = getComputerChoice();
    result(userChoice, computerChoice);
}


const againBtn = document.getElementById('again');
let input = document.querySelector('.input');

againBtn.addEventListener('click', function () {
    secretValue.innerHTML = '?';
    resultEl.innerHTML = '';
    input.classList.remove('checked');  //???

});