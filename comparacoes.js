console.log("--- Igualdade ---");
// Igualdade solta (==) - converte tipos antes de comparar
console.log(`10 == '10': ${10 == '10'}`, "// Compara valores após conversão (string '10' vira número)");
// Igualdade estrita (===) - compara valores e tipos
console.log(`10 === '10': ${10 === '10'}`, "// Tipos diferentes (number !== string)");
console.log("\n--- Desigualdade ---");
// Desigualdade solta (!=) - converte tipos antes de comparar
console.log(`5 != '5': ${5 != '5'}`, "// Valores são iguais após conversão");
// Desigualdade estrita (!==) - compara valores e tipos
console.log(`5 !== '5': ${5 !== '5'}`, "// Tipos diferentes (number !== string)");
console.log("\n--- Comparações Numéricas ---");
// Maior que
console.log(`10 > 5: ${10 > 5}`, "// 10 é maior que 5");
// Menor que
console.log(`10 < 5: ${10 < 5}`, "// 10 não é menor que 5");
// Maior ou igual
console.log(`10 >= 10: ${10 >= 10}`, "// 10 é igual a 10");
// Menor ou igual
console.log(`5 <= 4: ${5 <= 4}`, "// 5 não é menor nem igual a 4");
