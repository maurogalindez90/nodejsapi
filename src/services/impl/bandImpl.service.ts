import { BandRepository } from "../../persistence/bandRepository";
import { BandService } from "../bandService";
import { Banda } from "../../models/Banda";
export class BandImplService implements BandService {
    constructor( private readonly bandRepository: BandRepository) {}
    
    public getBands = async () => {
        return await this.bandRepository.getBands();
    }

    public getBandById = async (bandId: number) : Banda => {
        return await this.bandRepository.getBandById(bandId);
    }

    public storeBand = async (band: any) => {
        return await this.bandRepository.storeBand(band);
    }
}