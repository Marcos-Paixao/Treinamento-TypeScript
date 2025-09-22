"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exemplos
let num = 42;
let big = 9007199254741991n;
console.log(num);
console.log(big);
//Operações com BigInt
let big1 = 9007199254741991n;
let big2 = 12345678901234567890n;
let sum = big1 + big2;
let difference = big2 - big1;
let product = big1 * big2;
let quotient = big2 / big1;
console.log("Soma:", sum);
console.log("Diferença:", difference);
console.log("Produto:", product);
console.log("Quociente:", quotient);
//Conversão entre number e BigInt
let num2 = 100;
let bigFromNum = BigInt(num2);
let big3 = 12345678901234567890n;
let numFromBig = Number(big3);
console.log("BigInt a partir de number:", bigFromNum);
console.log("number a partir de BigInt:", numFromBig);
//Comparação entre number e BigInt
let big4 = 42n;
let num3 = 42;
console.log("big4 === num3:", big4 === BigInt(num3)); // true
console.log("big4 == num3:", big4 == num3); // true
console.log("big4 > num3:", big4 > BigInt(num3)); // false
console.log("big4 < num3:", big4 < BigInt(num3)); // false
//Limitações do BigInt
try {
    let invalidOperation = big1 + num; // Erro: Não é possível misturar BigInt e number diretamente
}
catch (error) {
    console.error("Erro ao misturar BigInt e number:", error);
}
// Função para demonstrar uso de BigInt em cálculos
function calculateFactorial(n) {
    if (n === 0n || n === 1n) {
        return 1n;
    }
    return n * calculateFactorial(n - 1n);
}
let factorialOf20 = calculateFactorial(20n);
console.log("Fatorial de 20:", factorialOf20);
//# sourceMappingURL=numberBigint.js.map