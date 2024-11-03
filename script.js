// Counter closure using IIFE (Immediately Invoked Function Expression)
const counter = (function() {
    // Private variable (function scope)
    let count = 0;

    const displayElement = document.getElementById('counter');

    // Private function to update UI
    function updateDisplay() {
        //Preserves the count variable between function calls
        displayElement.textContent = count;
    }

    // Private function for validation to ensure count stays within bounds (-100 to 100)
    function validateCount(newCount) {
        return Math.max(-100, Math.min(100, newCount));
    }

    // Return object
    return {
        increment() {
            count = validateCount(count + 1);
            updateDisplay();
        },

        decrement() {
            count = validateCount(count - 1);
            updateDisplay();
        },

        reset() {
            count = 0;
            updateDisplay();
        }
    };
})();
// Event listeners
document.getElementById('increment').addEventListener('click', () => {
    counter.increment();
});

document.getElementById('decrement').addEventListener('click', () => {
    counter.decrement();
});

document.getElementById('reset').addEventListener('click', () => {
    counter.reset();
});