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

const inputErrorName = document.getElementById('input-error-name');
const inputErrorNumber = document.getElementById('input-error-number');
const inputErrorDate = document.getElementById('input-error-date');
const inputErrorCvv = document.getElementById('input-error-cvv');


function showError(inputElement, errorElement, message) {
    errorElement.style.display = 'block';
    errorElement.innerText = message;
    inputElement.style.borderColor = 'hsl(0, 100%, 66%)';
}

function clearError(inputElement, errorElement) {
    errorElement.style.display = 'none';
    inputElement.style.borderColor = 'var(--primary-linear)';
}

cardName.addEventListener('input', function (event) {
    cardNameResult.innerText = event.target.value || 'Jane Appleseed';

    if (cardName.value === '') {
        showError(cardName, inputErrorName, 'Cannot be empty');
    } else {
        clearError(cardName, inputErrorName);
    }
});

cardNumber.addEventListener('input', function (event) {
    const formattedValue = formatCardNumber(event.target.value);
    cardNumber.value = formattedValue;
    cardNumberResult.innerText = formattedValue || '0000 0000 0000 0000';

    if (formattedValue.replace(/\s/g, '').length < 16) {
        showError(cardNumber, inputErrorNumber, 'Please enter a valid card number');
    } else {
        clearError(cardNumber, inputErrorNumber);
    }

    if (cardNumber.value === '') {
        showError(cardNumber, inputErrorNumber, 'Cannot be empty');
    }
});

cardMonth.addEventListener('input', function (event) {
    cardMonth.value = cardMonth.value.slice(0, 2);
    cardMonthResult.innerText = event.target.value || '00';

    if (cardMonth.value === '' || isNaN(cardMonth.value)) {
        showError(cardMonth, inputErrorDate, 'Cannot be empty');
    } else if (cardMonth.value < 1 || cardMonth.value > 12) {
        showError(cardMonth, inputErrorDate, 'Please enter a valid month');
    } else {
        clearError(cardMonth, inputErrorDate);
    }
});

cardYear.addEventListener('input', function (event) {
    cardYear.value = cardYear.value.slice(0, 2);
    cardYearResult.innerText = event.target.value || '00';

    if (cardYear.value === '' || isNaN(cardYear.value)) {
        showError(cardYear, inputErrorDate, 'Cannot be empty');
    } else if (cardYear.value < 21) {
        showError(cardYear, inputErrorDate, 'Please enter a valid year');
    } else {
        clearError(cardYear, inputErrorDate);
    }
});

cardCvv.addEventListener('input', function (event) {
    cardCvv.value = cardCvv.value.slice(0, 3);
    cardCvvResult.innerText = event.target.value || '000';

    if (cardCvv.value === '' || isNaN(cardCvv.value)) {
        showError(cardCvv, inputErrorCvv, 'Cannot be empty');
    } else if (cardCvv.value.length < 3) {
        showError(cardCvv, inputErrorCvv, 'Please enter a valid CVV');
    } else {
        clearError(cardCvv, inputErrorCvv);
    }
});


// Add space after every 4 digits
function formatCardNumber(value) {
    return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}