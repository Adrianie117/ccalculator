let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Reemplaza la raíz cuadrada con Math.sqrt
        let expression = display.value.replace('√', 'Math.sqrt');
        let result = eval(expression);
        if (result === Infinity) {
            throw new Error("División por cero");
        }
        display.value = result;
    } catch (error) {
        alert("Entrada no válida");
        clearDisplay();
    }
}
