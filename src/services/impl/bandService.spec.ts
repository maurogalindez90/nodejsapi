import { BandServiceImpl } from "./bandServiceImpl";
import { mocked } from 'ts-jest/utils';
import { BandRepositoryImpl } from "../../persistence/impl/bandRepositoryImpl";
const bandServiceMock = jest.mock('./bandServiceImpl');
console.log(bandServiceMock);

const getBandsRepositoryMock = () => {
    return [{"name":"Sui fafafa","password":null,"id":1,"leader":{"id":1,"name":"Carlos Garcia","nickname":"Charly"}},
    {"name":"Spinetta Jade","password":420,"id":2,"leader":{"id":2,"name":"Luis Alberto Spinetta","nickname":"El flaco"}},
    {"name":"Gorillaz33","password":null,"id":3,"leader":null},{"name":"Socios del desierto","password":123,"id":10,"leader":null},
    {"name":"La maquina de hacer pajaros","password":123,"id":11,"leader":null},{"name":"Almafuerte","password":123444,"id":12,"leader":null},
    {"name":"Hermetica","password":12422,"id":13,"leader":null}]
}

//const bandService = new BandServiceImpl(bandServiceMock)

jest.mock('../../persistence/impl/bandRepositoryImpl', () => {
    return {
        BandRepositoryImpl: jest.fn().mockImplementation(() => {
        return {
            getBands: () => getBandsRepositoryMock(),
        };
      })
    };
});
/* 
describe('SoundPlayerConsumer', () => {
    const MockedBandServiceImpl = mocked(BandServiceImpl, true);
  
    beforeEach(() => {
     // Clears the record of calls to the mock constructor function and its methods
     MockedBandServiceImpl.mockClear();
  
    });
  
    it('We can check if the consumer called the class constructor', () => {
      const soundPlayerConsumer = new SoundPlayerConsumer();
      expect(MockedSoundPlayer).toHaveBeenCalledTimes(1);
    });
  
  }*/
