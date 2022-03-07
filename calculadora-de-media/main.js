function calculate() {
    let firstGrade = Number(document.getElementById('first-grade').value)
    let secondGrade = Number(document.getElementById('second-grade').value)
    let thirdGrade = Number(document.getElementById('third-grade').value)
    let fourthGrade = Number(document.getElementById('fourth-grade').value)

    let result = document.querySelector('.page-result')

    let avarage = ((firstGrade + secondGrade + thirdGrade + fourthGrade) / 4).toFixed(1)

    let isApproved = avarage >= 6 ? 'aprovado!' : 'reprovado.'

    result.innerHTML = `Sua média é: ${avarage}. Você está ${isApproved}`
}