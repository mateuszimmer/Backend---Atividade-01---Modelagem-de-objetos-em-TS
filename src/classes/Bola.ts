export class Bola {
    private cor: string;
    private circunferencia: number;
    private material: string;

    constructor (propCor: string, propCircunferencia: number, propMaterial: string) {
        this.cor = propCor,
        this.circunferencia = propCircunferencia,
        this.material = propMaterial
    }

    mostrarCor() {
        console.log(`A cor da bola é ${this.cor}.`);
    }

    trocarCor(novaCor: string) {
        this.cor = novaCor;
    }

}