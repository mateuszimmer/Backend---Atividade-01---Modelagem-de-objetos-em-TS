export class Calculadora {
    private historico: string[] = [];
    private valor: number;

    constructor(valorInicial: number) {
        this.valor = valorInicial;
        this.historico.push(`Valor inicial: ${this.valor}`);
        console.log(`Valor atual: ${this.valor}`);
    }

    somar(valor: number) {
        this.valor += valor;
        this.historico.push(`+(${valor})`)
        console.log(`Valor atual: ${this.valor}`);
    }

    multiplicar(valor: number) {
        this.valor *= valor;
        this.historico.push(`*(${valor})`)
        console.log(`Valor atual: ${this.valor}`);
    }

    subtrair(valor: number) {
        this.valor -= valor;
        this.historico.push(`-(${valor})`)
        console.log(`Valor atual: ${this.valor}`);
    }

    dividir(valor: number) {
        this.valor /= valor;
        this.historico.push(`/(${valor})`)
        console.log(`Valor atual: ${this.valor}`);
    }

    mostrarHistorico() {
        console.log('');
        console.log('Histórico calculado:');
        console.log(this.historico);
    }

}