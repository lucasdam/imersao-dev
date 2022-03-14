export default class Player {

    constructor(playerName, wins, ties,losses, scores) {
        this.playerName = playerName
        this.wins = wins
        this.ties = ties
        this.losses = losses
        this.scores = scores
    }

    get playerName() {
        return this.playerName
    }

    set(playerName) {
        this.playerName = playerName
    }

    get wins() {
        return this.wins
    }

    set(wins) {
        this.wins = wins
    }

    get ties() {
        return this.ties
    }

    set(playerName) {
        this.ties = ties
    }

    get losses() {
        return this.losses
    }

    set(losses) {
        this.losses = losses
    }

    get scores() {
        return this.scores
    }

    set(scores) {
        this.scores = scores
    }

}