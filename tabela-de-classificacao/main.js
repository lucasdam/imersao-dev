const Player = class {
    constructor(playerName, wins, ties,losses, scores) {
        this.playerName = playerName
        this.wins = wins
        this.ties = ties
        this.losses = losses
        this.scores = scores
    }
}

const localStoragePlayers = JSON.parse(localStorage.getItem('tabela'))
let players = localStorage.getItem('tabela') !== null ? localStoragePlayers : []

const updateLocalStorage = () => {
    localStorage.setItem('tabela', JSON.stringify(players))
}

showPlayers()

function addPlayer() {
    const newPlayer = document.getElementById('input-player').value
    const player = new Player(newPlayer, 0, 0, 0, 0)
    document.getElementById('input-player').value = ''
    players.push(player)
    updateLocalStorage()
    player.scores = calculateScores(player)
    showPlayers()
}

function calculateScores(player) {
    return player.wins * 3 + player.ties
}

function showPlayers() {
    const playersTable = document.getElementById('players-table')
    let element = ''

    for (let i = 0; i < players.length; i++) {
        element += `
            <tr>
                <td>${players[i].playerName}</td>
                <td>${players[i].wins}</td>
                <td>${players[i].ties}</td>
                <td>${players[i].losses}</td>
                <td>${players[i].scores}</td>
                <td><button onClick="addWin(${i})">Vitória</button></td>
                <td><button onClick="addTie(${i})">Empate</button></td>
                <td><button onClick="addLoss(${i})">Derrota</button></td>
                <td><button onClick="deletePlayer(${i})">X</button></td>
            </tr>
        `
    }

    playersTable.innerHTML = element
}

function addWin(i) {
    const player = players[i]
    player.wins++
    players[i].scores = calculateScores(player)
    updateLocalStorage()
    showPlayers(players)
}

function addTie(i) {
    const player = players[i]
    player.ties++
    players[i].scores = calculateScores(player)
    updateLocalStorage()
    showPlayers(players)
}

function addLoss(i) {
    const player = players[i]
    player.losses++
    updateLocalStorage()
    showPlayers(players)
}

function resetScore() {
    if (confirm('Deseja apagar a pontuação da tabela?')) {
        players.forEach(player => {
            player.wins = 0
            player.ties = 0
            player.losses = 0
            player.scores = 0
        })
        updateLocalStorage()
        showPlayers()
    }
}

function deletePlayer(i) {
    players.splice(i, 1)
    updateLocalStorage()
    showPlayers()
}

/* DESAFIOS
1. [ ] Quando houver um empate, ajustar como empate para todos os jogadores
2. [ ] Adicionar a imagem de cada jogador
3. [X] Criar um botão para zerar todos os pontos
4. [X] Criar um botão e inputs para adicionar novos jogadores 
5. [X] Armazenar os dados no localStorage 
6. [X] Remover jogador da tabela */