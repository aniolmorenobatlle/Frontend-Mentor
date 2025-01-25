const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year');
const cardCvv = document.getElementById('card-cvv');

const cardNameResult = document.getElementById('card-name-result');
const cardNumberResult = document.getElementById('card-number-result');
const cardMonthResult = document.getElementById('card-month-result');
const cardYearResult = document.getElementById('card-year-result');
const cardCvvResult = document.getElementById('card-cvv-result');


cardName.addEventListener('input', function(event) {
    cardNameResult.innerText = event.target.value;

    if (event.target.value === '') {
        cardNameResult.innerText = 'Jane Appleseed';
    }
});

cardNumber.addEventListener('input', function(event) {
    cardNumberResult.innerText = event.target.value;

    if (event.target.value === '') {
        cardNumberResult.innerText = '1234 5678 9123 0000';
    }
});

cardMonth.addEventListener('input', function(event) {
    cardMonthResult.innerText = event.target.value;

    if (event.target.value === '') {
        cardMonthResult.innerText = '00';
    }
});

cardYear.addEventListener('input', function(event) {
    cardYearResult.innerText = event.target.value;

    if (event.target.value === '') {
        cardYearResult.innerText = '00';
    }
});

cardCvv.addEventListener('input', function(event) {
    cardCvvResult.innerText = event.target.value;

    if (event.target.value === '') {
        cardCvvResult.innerText = '000';
    }
});

