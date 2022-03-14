const Player = class {
    constructor(playerName, wins, ties,losses, scores) {
        this.playerName = playerName
        this.wins = wins
        this.ties = ties
        this.losses = losses
        this.scores = scores
    }
}

let players = []

function addPlayer() {
    const newPlayer = document.getElementById('input-player').value
    const player = new Player(newPlayer, 0, 0, 0, 0)
    document.getElementById('input-player').value = ''
    players.push(player)
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
            </tr>
        `
    }

    playersTable.innerHTML = element
}

function addWin(i) {
    const player = players[i]
    player.wins++
    players[i].scores = calculateScores(player)
    showPlayers(players)
}

function addTie(i) {
    const player = players[i]
    player.ties++
    players[i].scores = calculateScores(player)
    showPlayers(players)
}

function addLoss(i) {
    const player = players[i]
    player.losses++
    showPlayers(players)
}

/* DESAFIOS
1. [ ] Quando houver um empate, ajustar como empate para todos os jogadores
2. [ ] Adicionar a imagem de cada jogador
3. [ ] Criar um botão para zerar todos os pontos
4. [X] Criar um botão e inputs para adicionar novos jogadores 
5. [ ] Armazenar os dados no localStorage */