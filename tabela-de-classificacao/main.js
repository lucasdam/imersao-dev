let rafa = { name: 'Rafa', wins: 2, ties: 1, losses: 1, scores: 0 }
let paulo = { name: 'Paulo', wins: 1, ties: 1, losses: 2, scores: 0 }
let gui = { name: 'Gui', wins: 1, ties: 1, losses: 2, scores: 0 }

function calculateScores(player) {
    let scores = (player.wins * 3) + player.ties
    return scores
}

rafa.scores = calculateScores(rafa)
paulo.scores = calculateScores(paulo)
gui.scores = calculateScores(gui)

let players = [rafa, paulo, gui]

function showPlayersAtViewPort(players) {
    let element = ''

    for (let i = 0; i < players.length; i++) {
        element += `
        <tr>
            <td>${players[i].name}</td>
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

    let playersTable = document.getElementById('players-table')
    playersTable.innerHTML = element
}

showPlayersAtViewPort(players)

function addWin(i) {
    let player = players[i]
    player.wins++
    player.scores = calculateScores(player)
    showPlayersAtViewPort(players)
}

function addTie(i) {
    let player = players[i]
    player.ties++
    player.scores = calculateScores(player)
    showPlayersAtViewPort(players)
}

function addLoss(i) {
    let player = players[i]
    player.losses++
    showPlayersAtViewPort(players)
}



/* DESAFIOS
1. [ ] Quando houver um empate, ajustar como empate para todos os jogadores
2. [ ] Adicionar a imagem de cada jogador
3. [ ] Criar um botão para zerar todos os pontos
4. [ ] Criar um botão e inputs para adicionar novos jogadores */