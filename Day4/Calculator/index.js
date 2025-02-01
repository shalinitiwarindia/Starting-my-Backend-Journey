const crypto = require("crypto");

function calculate(args) {
    if (args.length < 2) {
        console.log("Usage: node index.js <operation> <numbers...>");
        return;
    }

    const operation = args[0].toLowerCase();
    const numbers = args.slice(1).map(Number);

    switch (operation) {
        case "add":
            console.log(numbers.reduce((acc, num) => acc + num, 0));
            break;
        case "sub":
            console.log(numbers.reduce((acc, num) => acc - num));
            break;
        case "mult":
            console.log(numbers.reduce((acc, num) => acc * num, 1));
            break;
        case "divide":
            if (numbers.includes(0)) {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log(numbers.reduce((acc, num) => acc / num));
            }
            break;
        case "sin":
            console.log(Math.sin(numbers[0] * (Math.PI / 180)));
            break;
        case "cos":
            console.log(Math.cos(numbers[0] * (Math.PI / 180)));
            break;
        case "tan":
            console.log(Math.tan(numbers[0] * (Math.PI / 180)));
            break;
        case "random":
            const length = numbers[0] || 4; // Default length: 4 bytes
            console.log(crypto.randomInt(0, Math.pow(10, length)));
            break;
        default:
            console.log("Error: Unsupported operation.");
    }
}


const args = process.argv.slice(2);
calculate(args);
