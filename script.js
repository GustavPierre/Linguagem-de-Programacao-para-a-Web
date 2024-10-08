function calculadora(a, b, operacao) {
    switch (operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            if (b !== 0) {
                return a / b;
            } else {
                return "Erro: Divisão por zero";
            }
        default:
            return "Operação inválida";
    }
}

// Exemplo de uso:
console.log(calculadora(10, 5, 'soma'));           // 15
console.log(calculadora(10, 5, 'subtracao'));      // 5
console.log(calculadora(10, 5, 'multiplicacao'));  // 50
console.log(calculadora(10, 5, 'divisao'));        // 2
console.log(calculadora(10, 5, 'modulo'));         // Operação inválida
console.log(calculadora(10, 0, 'divisao'));        // Erro: Divisão por zero