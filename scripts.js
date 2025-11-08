const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

    // Taxas de câmbio (R$ por unidade de moeda)
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 6.8;
    const bitcoinToday = 300000;

    // Formata o valor de entrada
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    // Conversões
    if (currencySelect.value == "usd") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);

    } else if (currencySelect.value == "eur") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

    } else if (currencySelect.value == "gbp") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);

    } else if (currencySelect.value == "btc") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday);
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "usd") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/Dolar.png";

    } else if (currencySelect.value == "eur") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/Euro.png";

    } else if (currencySelect.value == "gbp") {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImage.src = "./assets/Libra Esterlina.png";

    } else if (currencySelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/Bitcoin.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

// Inicializa
changeCurrency();
