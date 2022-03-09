let secretNumber = parseInt(Math.random() * 11)
let triesLeft = 3

let guess = document.getElementById('input-value').focus()
let result = document.querySelector('#result-value')
let tries = document.querySelector('#tries-value')
let guessButton = document.getElementById('guess-button')
let restartButton = document.getElementById('restart-button')

console.log('Secret Number: ' + secretNumber)

function toGuess() {

    guess = parseInt(document.getElementById('input-value').value)

    restartButton.classList.add('disable-button')
    tries.innerHTML = `Tentativas restantes: ${--triesLeft}`

    let isCorrect = guess === secretNumber ? true : false
    let hasTries = triesLeft > 0 ? true : false
    let isValid = guess >= 0 && guess <= 10 ? true : false 

    if (isValid) {

        if (isCorrect) {

            result.innerHTML = `Você acertou! Era ${secretNumber} mesmo.`

            guessButton.classList.add('disable-button')
            restartButton.classList.remove('disable-button')
    
        } else {
    
            result.innerHTML = `Não é ${guess}... `
            result.innerHTML += guess > secretNumber ? 'Tente um número menor.' : 'Tente um número maior.'

            document.getElementById('input-value').value = ''
            guess = document.getElementById('input-value').focus()
    
            if (!hasTries) {
                result.innerHTML = `Suas tentativas acabaram... O número era ${secretNumber}.`

                guessButton.classList.add('disable-button')
                restartButton.classList.remove('disable-button')
            }
    
        }

    } else {

        result.innerHTML = 'Opa! Tenta um número de 0 a 10.'
        tries.innerHTML = `Tentativas restantes: ${++triesLeft}`

        document.getElementById('input-value').value = ''
        guess = document.getElementById('input-value').focus()

    }

}


function restart() {

    secretNumber = parseInt(Math.random() * 11)
    triesLeft = 3
    
    tries.innerHTML = `Tentativas restantes: 3`
    result.innerHTML = ''

    document.getElementById('input-value').value = ''
    document.getElementById('input-value').focus()

    restartButton.classList.add('disable-button')
    guessButton.classList.remove('disable-button')

    console.log('Secret Number: ' + secretNumber)

}

/* OBS: Muito código repetido que precisa ser melhorado... */