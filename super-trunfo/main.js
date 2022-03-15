let card1 = {
    name: 'Bulbassaur',
    attributes: {
        attack: 7,
        defense: 8,
        intelligence: 6
    }
}

let card2 = {
    name: 'Darth Vader',
    attributes: {
        attack: 9,
        defense: 5,
        intelligence: 8
    }
}

let card3 = {
    name: 'Shiryu de dragão',
    attributes: {
        attack: 4,
        defense: 9,
        intelligence: 10
    }
}

let cards = [card1, card2, card3]
let cardBot
let cardPlayer

function sortCard() {
    let numberCardBot = parseInt(Math.random() * cards.length)
    cardBot = cards[numberCardBot]

    let numberCardPlayer = parseInt(Math.random() * cards.length)
    while (numberCardBot == numberCardPlayer) {
        numberCardPlayer = parseInt(Math.random() * cards.length)
    }
    cardPlayer = cards[numberCardPlayer]
    console.log(cardPlayer)

    document.getElementById('btn-sort').disabled = true
    document.getElementById('btn-play').disabled = false

    showOptions()
}

function showOptions() {
    let options = document.getElementById('options')
    let optionsText = ''

    for (let attribute in cardPlayer.attributes) {
        optionsText += `<input type="radio" name="attribute" value="${attribute}">
            ${attribute.charAt(0).toUpperCase() + attribute.slice(1)} `
    }

    options.innerHTML = optionsText
}

function getAttributeSelected() {
    let radioAttributes = document.getElementsByName('attribute')

    for (let i = 0; i < radioAttributes.length; i++) {
        if (radioAttributes[i].checked) {
            return radioAttributes[i].value
        }
    }
}

function play() {
    let attributeSelected = getAttributeSelected()
    let cardPlayerValue = cardPlayer.attributes[attributeSelected]
    let cardBotValue = cardBot.attributes[attributeSelected]
    let result = document.getElementById('result')

    if (cardPlayerValue > cardBotValue) {
        result.innerHTML = `Você venceu! Sua carta tinha valor ${cardPlayerValue} e a da máquina ${cardBotValue}.`
    } else if (cardBotValue > cardPlayerValue) {
        result.innerHTML = `Você perdeu... Sua carta tinha valor ${cardPlayerValue} e a da máquina ${cardBotValue}.`
    } else {
        result.innerHTML = `Empatou! Ambas as cartinhas tinham valor ${cardPlayerValue}`
    }
}