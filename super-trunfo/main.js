let card1 = {
    name: 'Bulbassaur',
    image: 'https://www.gamereactor.pt/media/02/_3690273.png',
    attributes: {
        attack: 7,
        defense: 8,
        intelligence: 6
    }
}

let card2 = {
    name: 'Darth Vader',
    image: 'https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201130114919.jpg',
    attributes: {
        attack: 9,
        defense: 5,
        intelligence: 8
    }
}

let card3 = {
    name: 'Shiryu de dragão',
    image: 'https://s.aficionados.com.br/imagens/artigo-shiryu-de-dragao_t.jpg',
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

    showCardPlayer()
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
        result.innerHTML = '<p class="final-result">Venceu!</p>'
    } else if (cardBotValue > cardPlayerValue) {
        result.innerHTML = '<p class="final-result">Perdeu!</p>'
    } else {
        result.innerHTML = '<p class="final-result">Emapou!</p>'
    }

    document.getElementById('btn-play').disabled = true

    showCardBot()
}

function showCardPlayer() {
    let renderCardPlayer = document.getElementById('card-player')
    renderCardPlayer.style.backgroundImage = `url(${cardPlayer.image})`
    let frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">'
    let tagHTML = '<div id="options" class="card-status">'

    let optionsText = ''
    for (let attribute in cardPlayer.attributes) {
        optionsText += `<input type="radio" name="attribute" value="${attribute}">
            ${attribute.charAt(0).toUpperCase() + attribute.slice(1)}: ${cardPlayer.attributes[attribute]} <br>`
    }

    let name = `<p class="card-subtitle">${cardPlayer.name}</p>`

    renderCardPlayer.innerHTML = frame + name + tagHTML + optionsText + "</div>"

}

function showCardBot() {
    let renderCardBot = document.getElementById('card-bot')
    renderCardBot.style.backgroundImage = `url(${cardBot.image})`
    let frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">'
    let tagHTML = '<div id="options" class="card-status">'

    let optionsText = ''
    for (let attribute in cardBot.attributes) {
        optionsText += `<p type="text" name="attribute" value="${attribute}">
            ${attribute.charAt(0).toUpperCase() + attribute.slice(1)}: ${cardBot.attributes[attribute]}</p>`
    }

    let name = `<p class="card-subtitle">${cardBot.name}</p>`

    renderCardBot.innerHTML = frame + name + tagHTML + optionsText + "</div>"
}

/* DESAFIOS:
1. [ ] Criar um baralho com mais cartas
2. [ ] Fazer com que o vencedor do duelo ganha a carta do oponente 
3. [ ] Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros */