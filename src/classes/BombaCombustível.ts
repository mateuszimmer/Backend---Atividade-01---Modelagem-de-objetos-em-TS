export class BombaCombustivel {
    tipo: string;
    valorLitro: number;
    qtdComb: number;
    faturamento: number = 0;

    constructor(tipoCombustivel: string, valorPorLitro: number, quantidadeCombustivel: number){
        this.tipo = tipoCombustivel,
        this.valorLitro = valorPorLitro,
        this.qtdComb = quantidadeCombustivel
    }

    abastecerPorValor (valor: number) {
        const qtdAbastecida = valor / this.valorLitro;
        if(qtdAbastecida > this.qtdComb) return console.log('Não há combustível suficiente para abastecer.');
        this.qtdComb -= qtdAbastecida;
        console.log(`Foi abastecido o valor de $${valor}. A quantidade de combustível abastecida foi ${qtdAbastecida} litros.`);
    }
    
    abastecerPorLitro (litros: number) {
        if(litros > this.qtdComb) return console.log('Não há combustível suficiente para abastecer.');
        const valorAbastecido = litros * this.valorLitro;
        this.qtdComb -= litros;
        console.log(`A quantidade de combustível abastecida foi ${litros} litros. Foi abastecido o valor de $${valorAbastecido}. `);
    }

    alteraValor(novoValor: number) {
        console.log(`Valor por litro alterado de $${this.valorLitro} para $${novoValor}`);
        this.valorLitro = novoValor;
    }

    alteraCombustivel(novoCombustivel: string) {
        console.log(`Combustível alterado de ${this.tipo} para ${novoCombustivel}`);
        this.tipo = novoCombustivel;
    }

    alteraQuantidadeCombustivel (novaQuantidade: number) {
        console.log(`Quantidade de combustível alterada de ${this.qtdComb} para ${novaQuantidade}`);
        this.qtdComb = novaQuantidade;
    }

}