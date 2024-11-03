# Counter App with Closure

A simple counter application demonstrating JavaScript closure and scope concepts. The app allows users to increment, decrement, and reset a counter value while maintaining private state through closure.

## Live Demo

[View Live App](https://counter-app-closure-site.netlify.app/)

## Features

- Increment and decrement counter value
- Reset counter to zero
- Value validation (range: -100 to 100)
- Private state management using closure
- Clean and responsive UI

## Code Explanation

The core functionality is built using JavaScript closure:

```javascript
const counter = (function() {
    // Private variable - only accessible within this scope
    let count = 0;
    
    // Public interface
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
```

### Key Concepts Demonstrated

1. **Closure**: Maintains private state (`count`) between function calls
2. **IIFE** (Immediately Invoked Function Expression): Creates private scope
3. **Private Variables**: `count` is not accessible from outside
4. **Public Methods**: Only exposed through returned object

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Learning Resources

For more information about closures in JavaScript:
- [MDN Web Docs - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript.info - Closure](https://javascript.info/closure)

## License

MIT License