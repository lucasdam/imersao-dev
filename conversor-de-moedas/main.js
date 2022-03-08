let currency = {
    dolar: 0,
    euro: 0,
    bitcoin: 0,
    iene: 0
}

async function getConvertedValue() {

    let inputValue = document.getElementById('input-value').value
    let currencySelected = document.getElementById('currency-list').value
    let result = document.querySelector('#converted-value')

    if (inputValue === '') {
        alert('Informa um valor que eu converto para você! :D')
    } else {
        await getCurrentExchange()
        inputValue = parseFloat(inputValue)

        if (currencySelected === 'dolar') {
            let dolar = parseFloat(inputValue * currency.dolar).toFixed(2)
            result.innerHTML = `R$${dolar}`
        } else if (currencySelected === 'euro') {
            let euro = parseFloat(inputValue * currency.euro).toFixed(2)
            result.innerHTML = `R$${euro}`
        } else if (currencySelected === 'bitcoin') {
            let bitcoin = parseFloat(inputValue * currency.bitcoin).toFixed(2)
            result.innerHTML = `R$${bitcoin}`
        } else if (currencySelected === 'iene') {
            let iene = parseFloat(inputValue * currency.iene).toFixed(2)
            result.innerHTML = `R$${iene}`
        }
    }

}

async function getCurrentExchange() {

    await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-BRL')
        .then(response => response.json())
        .then(data => {
            currency.dolar = data.USDBRL.ask
            currency.euro = data.EURBRL.ask
            currency.bitcoin = data.BTCBRL.ask
            currency.iene = data.JPYBRL.ask
        })

}