function tokenize(s) {
    // --- Parse a calculation string into an array of numbers and operators
    const r = [];
    let token = '';
    for (const character of s) {
        if ('^*/+-'.includes(character)) {
            if (token === '' && character === '-') {
                token = '-';
            } else {
                r.push(parseFloat(token), character);
                token = '';
            }
        } else {
            token += character;
        }
    }
    if (token !== '') {
        r.push(parseFloat(token));
    }
    return r;
}

function calculate(tokens) {
    // --- Perform a calculation expressed as an array of operators and numbers
    const operatorPrecedence = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}];
    let operator;
    for (const operators of operatorPrecedence) {
        const newTokens = [];
        for (const token of tokens) {
            if (token in operators) {
                operator = operators[token];
            } else if (operator) {
                newTokens[newTokens.length - 1] = 
                    operator(newTokens[newTokens.length - 1], token);
                operator = null;
            } else {
                newTokens.push(token);
            }
        }
        tokens = newTokens;
    }
    if (tokens.length > 1) {
        console.log('Error: unable to resolve calculation');
        return tokens;
    } else {
        return tokens[0];
    }
}
const userInput =  document.getElementById('userInput');
userInput.focus();
userInput.addEventListener('input', function() {
    document.getElementById('result').innerHTML = "The answer is " + calculate(tokenize(userInput.value));
});