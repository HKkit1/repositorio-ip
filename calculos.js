let a = 10, b = 3;

console.log("--- Operadores Aritméticos Básicos ---");
console.log(`a = ${a}, b = ${b}\n`);

// Adição: Soma dois valores numéricos
console.log(`a + b = ${a + b}`, "// 10 + 3 = 13 (adição)");

// Subtração: Subtrai o segundo valor do primeiro
console.log(`a - b = ${a - b}`, "// 10 - 3 = 7 (subtração)");

// Multiplicação: Multiplica dois valores
console.log(`a * b = ${a * b}`, "// 10 * 3 = 30 (multiplicação)");

// Divisão: Divide o primeiro valor pelo segundo (resultado decimal)
console.log(`a / b = ${a / b}`, "// 10 / 3 ≈ 3.333 (divisão)");

// Módulo: Retorna o resto da divisão
console.log(`a % b = ${a % b}`, "// 10 ÷ 3 = 3 com resto 1 (módulo)");

// Exponenciação: Eleva a base (a) ao expoente (b)
console.log(`a ** b = ${a ** b}`, "// 10³ = 1000 (exponenciação)");

console.log("\n--- Operadores de Incremento/Decremento ---");
console.log(`Valores iniciais: a = ${a}, b = ${b}\n`);

// Pós-incremento: Retorna o valor original, depois incrementa
console.log(`a++ = ${a++}`, `// Retorna ${a-1}, depois a vira ${a} (pós-incremento)`);

// Pré-incremento: Incrementa primeiro, depois retorna o novo valor
console.log(`++a = ${++a}`, `// Incrementa para ${a}, retorna ${a} (pré-incremento)`);

// Pós-decremento: Retorna o valor original, depois decrementa
console.log(`b-- = ${b--}`, `// Retorna ${b+1}, depois b vira ${b} (pós-decremento)`);

// Pré-decremento: Decrementa primeiro, depois retorna o novo valor
console.log(`--b = ${--b}`, `// Decrementa para ${b}, retorna ${b} (pré-decremento)`);

console.log("\n--- Valores Finais ---");
console.log(`a = ${a}, b = ${b}`);
