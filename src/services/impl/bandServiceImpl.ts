import { BandRepository } from "../../persistence/bandRepository";
import { BandService } from "../bandService";
import { Banda } from "../../domain/Banda";
import { NotFoundEntityError } from "../../errors/notFoundEntityError";
import { BandValidation } from "../validations/bandValidation";

export class BandServiceImpl implements BandService {

    constructor( private readonly bandRepository: BandRepository) {}
    
    public getBands = async () => {
        const bands = await this.bandRepository.getBands();
        return bands;
    }

    public getBandById = async (bandId: number) => {
        const band = await this.bandRepository.getBandById(bandId);
        if (!band) {
            throw new NotFoundEntityError(bandId, 'band');
        } else {
            return band;
        }
    }

    public updateBand = async (bandId: number, band: Banda) => {
        if (BandValidation.validateBandUpdate(band)) {
            const response = await this.bandRepository.updateBand(bandId, band);
            if (!response) throw new NotFoundEntityError(bandId, 'banda');
        }
    }

    
    public storeBand = async (band: Banda) => {
        if (BandValidation.validateBandStore(band)) {
            return await this.bandRepository.storeBand(band);
        }
    }

    public deleteBand = async (bandId: number) => {
        const response = await this.bandRepository.deleteBand(bandId);
        if (!response) throw new NotFoundEntityError(bandId, 'banda');
    }

}