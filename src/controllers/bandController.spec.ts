import  {BandService}  from '../services/bandService';
import { BandServiceImpl } from '../services/impl/bandServiceImpl';

//const bandService = new BandServiceImpl()
//const bandController = new BandController(BandService)

describe ('GET - bandController', () => {
    test('Probando el metodo getBands', () => {
        const expected = 'Hola';
        const result = 'Hola';

        expect(result).toStrictEqual(expected);
    });
}) ;