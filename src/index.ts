import { Contador } from "./classes/Contador";
import { Bola } from "./classes/Bola";
import { ContaCorrente } from './classes/ContaCorrente';
import { Calculadora } from './classes/Calculadora';
import { BombaCombustivel } from './classes/BombaCombustível'
import { Carro } from './classes/Carro'

console.clear();

const meuContador = new Contador;

meuContador.revelaContador();
meuContador.incrementarContador();
meuContador.incrementarContador();
meuContador.incrementarContador();
meuContador.revelaContador();
meuContador.zerarContador();
meuContador.revelaContador();


console.log('//====================================================')
console.log('')


const bolaDoKiko = new Bola('branca', 12, 'borracha');
bolaDoKiko.mostrarCor();
bolaDoKiko.trocarCor('azul');
bolaDoKiko.mostrarCor();


console.log('//====================================================')
console.log('')


const minhaConta = new ContaCorrente(10, 'Odete', 1000)

minhaConta.deposito(200)
minhaConta.saque(1100)
minhaConta.alterarNome('Janice')

console.log(minhaConta)


console.log('//====================================================')
console.log('')


const minhaCalculadora = new Calculadora(5)

minhaCalculadora.somar(3);
minhaCalculadora.multiplicar(2);
minhaCalculadora.subtrair(4);
minhaCalculadora.dividir(3)
minhaCalculadora.mostrarHistorico();


console.log('//====================================================')
console.log('')


const petrobras = new BombaCombustivel('Gasolina', 5, 100);

petrobras.abastecerPorLitro(20);
petrobras.abastecerPorValor(45);
petrobras.alteraCombustivel('Diesel');
petrobras.alteraQuantidadeCombustivel(500);
petrobras.alteraValor(3)


console.log('//====================================================')
console.log('')


const uno = new Carro(10)

uno.obterGasolina();
uno.adicionarGasolina(10);
uno.andar(70);
uno.obterGasolina();
uno.andar(50);