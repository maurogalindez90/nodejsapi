import { Falopita1 } from "./falopita1";


jest.mock('./falopita2', () => {
    const sumita = jest.fn((x, y, z) => 5);

    return {
        Falopita2: jest.fn().mockImplementation(() => {
        return {
            sumitaMasPepe: sumita,
        };
      })
    };
});


class falopita2Mock {

}

describe ('GET - falopita', () => {
    /*test('Probando el metodo obtenerSumita', () => {
        const expected = 'Hola';
        const result = 'Hola';

        expect(result).toStrictEqual(expected);
    });
*/
    it('We can check if the consumer called the class constructor', () => {
        const falopita1 = new Falopita1();
        const resultSumita = falopita1.obtenerSumita();
        expect(resultSumita).toEqual(5)
        
  });
}) ;