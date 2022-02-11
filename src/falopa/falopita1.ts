import { Falopita2 } from "./falopita2";

export class Falopita1 {
    falopita2;

    constructor() {
        this.falopita2 = new Falopita2(1);
    }

    public obtenerSumita = () => {
        return this.falopita2.sumitaMasPepe(1,3);
    }

}