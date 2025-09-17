//Basic Types
let nome: string = "Marcos";
let idade: number = 30;
let isAdmin: boolean = true;

console.log(nome);
console.log(idade);
console.log(isAdmin);

//Array
let animais: string[] = ["Cachorro", "Gato", "Pássaro"];
console.log(animais);

//Objeto
let carro: {
    nome: string;
    ano: number;
    preco: number    
};

carro = {
    nome: "Gol",
    ano: 2020,
    preco: 40000
};

console.log(carro);

//Função
function soma(num1: number, num2: number) {
    return num1 + num2;
}

console.log(soma(2, 3));