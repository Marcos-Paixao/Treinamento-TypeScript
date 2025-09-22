//Exemplos
let num: number = 42;
let big: bigint = 9007199254741991n;

console.log(num);
console.log(big);

//Operações com BigInt
let big1: bigint = 9007199254741991n;
let big2: bigint = 12345678901234567890n;

let sum: bigint = big1 + big2;
let difference: bigint = big2 - big1;
let product: bigint = big1 * big2;
let quotient: bigint = big2 / big1;

console.log("Soma:", sum);
console.log("Diferença:", difference);
console.log("Produto:", product);
console.log("Quociente:", quotient);

//Conversão entre number e BigInt
let num2: number = 100;
let bigFromNum: bigint = BigInt(num2);

let big3: bigint = 12345678901234567890n;
let numFromBig: number = Number(big3);

console.log("BigInt a partir de number:", bigFromNum);
console.log("number a partir de BigInt:", numFromBig);

//Comparação entre number e BigInt
let big4: bigint = 42n;
let num3: number = 42;

console.log("big4 === num3:", big4 === BigInt(num3)); // true
console.log("big4 == num3:", big4 == num3);           // true
console.log("big4 > num3:", big4 > BigInt(num3));     // false
console.log("big4 < num3:", big4 < BigInt(num3));     // false

//Limitações do BigInt
try {
    let invalidOperation = big1 + num; // Erro: Não é possível misturar BigInt e number diretamente
} catch (error) {
    console.error("Erro ao misturar BigInt e number:", error);
}

// Função para demonstrar uso de BigInt em cálculos
function calculateFactorial(n: bigint): bigint {
    if (n === 0n || n === 1n) {
        return 1n;
    }
    return n * calculateFactorial(n - 1n);
}

let factorialOf20: bigint = calculateFactorial(20n);
console.log("Fatorial de 20:", factorialOf20);