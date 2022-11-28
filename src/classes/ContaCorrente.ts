export class ContaCorrente {
    numero: number;
    correntista: string;
    saldo: number;

    constructor(numeroDaConta: number, proprietario: string, saldoInicial: number) {
        this.numero = numeroDaConta,
        this.correntista = proprietario,
        this.saldo = saldoInicial
    }

    alterarNome(novoNome: string) {
        this.correntista = novoNome;
    }

    deposito(valorDeposito: number) {
        this.saldo += valorDeposito;
        console.log(`Valor depositado. Seu novo saldo é de ${this.saldo}`);
    }

    saque(valorSaque: number) {
        this.saldo -= valorSaque;
        console.log(`Valor sacado. Agora, saldo é de ${this.saldo}`);
    }

}