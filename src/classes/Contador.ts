export class Contador {
    numeroDoContador: number;

    constructor(){
        this.numeroDoContador = 0;
    }

    zerarContador() {
        this.numeroDoContador = 0;
    }

    incrementarContador() {
        this.numeroDoContador += 1;
    }

    revelaContador() {
        console.log(this.numeroDoContador);
    }

}