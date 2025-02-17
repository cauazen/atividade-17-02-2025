
let saldo = 1000; 
let sair = false;

function exibirMenu() {
  console.log('Menu:');
  console.log('1. Ver saldo');
  console.log('2. Sacar');
  console.log('3. Depositar');
  console.log('4. Sair');
}

function sacar(valor) {
  if (valor <= saldo) {
    saldo -= valor;
    console.log(`Saque de R$${valor} realizado. Novo saldo: R$${saldo}`);
  } else {
    console.log('Saldo insuficiente!');
  }
}

function depositar(valor) {
  saldo += valor;
  console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${saldo}`);
}

// Menu interativo
do {
  exibirMenu();
  const opcao = parseInt(prompt('Escolha uma opção:'));

  switch(opcao) {
    case 1:
      console.log(`Seu saldo atual é R$${saldo}`);
      break;
    case 2:
      const saque = parseFloat(prompt('Quanto deseja sacar?'));
      sacar(saque);
      break;
    case 3:
      const deposito = parseFloat(prompt('Quanto deseja depositar?'));
      depositar(deposito);
      break;
    case 4:
      sair = true;
      console.log('Saindo...');
      break;
    default:
      console.log('Opção inválida!');
  }
} while (!sair);



// Tabuada
const numero = parseInt(prompt('Digite o número para gerar a tabuada:'));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}


// Soma das Notas 
const aluno = [
  { aluno: 'joao', nota: 10 },
  { aluno: 'maria', nota: 6 },
  { aluno: 'mateus', nota: 8 },
  { aluno: 'diego', nota: 7 }
];

let soma = 0;

alunos.forEach((aluno) => {
  soma += aluno[nota];
});

console.log(`A soma das notas de todos os alunos é: ${soma}`);

// Contar quantas vezes cada string aparece no array
const alunos = ['jorge', 'ramon', 'jorge', 'joão', 'ramon', 'jorge'];
const contagem = {};

for(let  aluno of alunos){
  if (contagem[aluno]){
    contagem[aluno] += 1 }
    else{
      contagem[aluno] = 1
    }
  }
 for(let chave in contagem){
  console.log(`o aluno ${chave} foi repetido ${contagem[chave]} vezes`)
 }

