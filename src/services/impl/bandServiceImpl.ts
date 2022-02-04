import { BandRepository } from "../../persistence/bandRepository";
import { BandService } from "../bandService";
import { Banda } from "../../models/Banda";
import { NotFoundEntityError } from "../../errors/notFoundEntityError";
import { ErrorMessages } from "../../errors/errorMessages";
import { ValidationError } from "../../errors/validationError";

export class BandServiceImpl implements BandService {

    constructor( private readonly bandRepository: BandRepository) {}
    
    public getBands = async () => {
        try {
            const bands = await this.bandRepository.getBands();
        } catch (e) {
            throw new Error();
        }
    }

    public getBandById = async (bandId: number) : Promise<Banda> => {
        try {
            const band = await this.bandRepository.getBandById(bandId);
            if (!band) {
                throw new NotFoundEntityError(bandId, 'banda');
            } else {
                return band;
            }
            
        } catch (e) {
            throw e;
        }
    }

    public storeBand = async (band: Banda) => {
        try { 
            if (!band.password) {
                throw new ValidationError(ErrorMessages.PASSWORD_MISSING_VALIDATION_ERROR);
            } else if (band.password.toString().length <= 3) {
                throw new ValidationError(ErrorMessages.PASSWORD_LENGTH_VALIDATION_ERROR);
            } else {
                return await this.bandRepository.storeBand(band);
            }
        } catch (e: any) {
            throw e;
        }
    }
}