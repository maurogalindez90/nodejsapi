export class Falopita2 {
    pepe: number;

    constructor(pepe: number) {
        this.pepe = pepe;
    }
    public sumitaMasPepe = (num1: number, num2: number) => {
        return num1 + num2 + this.pepe;
    }
}