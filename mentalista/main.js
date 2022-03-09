let secretNumber = parseInt(Math.random() * 11)
let triesLeft = 3

console.log('Secret Number: ' + secretNumber)

function toGuess() {

    let guess = parseInt(document.querySelector('#input-value').value)
    let result = document.querySelector('#result-value')
    let tries = document.querySelector('#tries-value')

    tries.innerHTML = `Número de tentativas: ${--triesLeft}`

    let isCorrect = guess === secretNumber ? true : false
    let hasTries = triesLeft > 0 ? true : false
    let isValid = guess >= 0 && guess <= 10 ? true : false 

    if (isValid) {

        if (isCorrect) {

            result.innerHTML = `Você acertou! Era ${secretNumber}`
    
        } else {
    
            result.innerHTML = `Não é ${guess}... `
            result.innerHTML += guess > secretNumber ? 'Tente um número menor' : 'Tente um número maior'
    
            if (!hasTries) {
                result.innerHTML = `Suas tentativas acabaram... O número era ${secretNumber}`
            }
    
        }

    } else {

        result.innerHTML = 'Opa! Tenta um número de 0 a 10.'

    }

}