export class Carro {
    private consumo: number;
    private tanque: number = 0;

    constructor(kmPorLitro: number) {
        this.consumo = kmPorLitro;
    }

    andar(distancia: number) {
        const distanciaPossivel = this.tanque * this.consumo
        const consumido = distancia / this.consumo
        this.tanque -= consumido
        if (distancia > distanciaPossivel) {
            console.log(`Não foi possível andar os ${distancia} km. O veículo ficou sem combustível quando atingiu ${distanciaPossivel} km.`)
            this.tanque = 0
        } else {
            console.log(`Percorrida distância de ${distancia} km. Foram consumidos ${consumido} litros.`)
        }
    }

    obterGasolina() {
        
        console.log(`Há ${this.tanque} litro${this.tanque === 1 ? '' : 's'} no tanque.`)
    }

    adicionarGasolina(litrosAdicionados: number) {
        this.tanque += litrosAdicionados;
        console.log(`Foram adicionados ${litrosAdicionados} litros ao veículo.`)
    }
}