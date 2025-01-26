let sortedNumbers = []
let limitNumber = 50
let secretNumber = randomNumberGenerator();
let tentatives = 1;


function showTextScreen(tag, text) {
    
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2})
}

function showMesageOnScreen() {
    showTextScreen('h1', 'Jogo do número secreto');
    showTextScreen('p', 'Escolha um número entre 1 e 10');
}

showMesageOnScreen();

function guessVerify() {
    let guess = document.querySelector('input').value;
    
    if (guess == secretNumber) {
        showTextScreen('h1', 'Acertou!!');
        let guessWord = tentatives > 1 ? 'tentativas' : 'tentativa';
        let tentativesMesage = `Você descobriu o número secreto com ${tentatives} ${guessWord}.`;
        showTextScreen('p', tentativesMesage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (guess > secretNumber){
            showTextScreen('h1', 'Tente novamente!');
            showTextScreen('p', 'O número secreto é menor.');
        }else{
            showTextScreen('h1', 'Tente novamente!');
            showTextScreen('p', 'O número secreto é maior.');
        }
        tentatives++;
        campCleaner();
    }
}

function randomNumberGenerator() {
    let choosedNumber = parseInt(Math.random() * limitNumber + 1);
    let elementsInTheList = sortedNumbers.length;

if (elementsInTheList == 10){
    sortedNumbers = []
}

    if (sortedNumbers.includes(choosedNumber)) {
        return randomNumberGenerator();
    }else {
        sortedNumbers.push(choosedNumber)
        return choosedNumber;
    }
}



function campCleaner() {
    chute = document.querySelector('input');
    chute.value = '';
}

function restartGame() {
    secretNumber = randomNumberGenerator();
    campCleaner();
    tentatives = 1;
    showMesageOnScreen();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}