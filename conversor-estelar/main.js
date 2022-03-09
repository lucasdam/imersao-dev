function calculate() {

    const speedOfLight = 300000 //km
    const secondsPerYear = 31536000 //sec
    const lightYear = speedOfLight * secondsPerYear

    let kmInput = document.getElementById('input-value').value
    let result = document.getElementById('calculated-value')

    result.innerHTML = `${kmInput / lightYear} anos luz`

}