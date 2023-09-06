document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertToFButton = document.getElementById('convertToF');
    const convertToCButton = document.getElementById('convertToC');

    convertToFButton.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            alert('Please enter a valid Celsius temperature.');
        }
    });

    convertToCButton.addEventListener('click', function () {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            celsiusInput.value = celsius.toFixed(2);
        } else {
            alert('Please enter a valid Fahrenheit temperature.');
        }
    });
});
