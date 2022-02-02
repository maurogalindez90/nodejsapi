import { BandRepository } from "../../persistence/bandRepository";
import { BandService } from "../bandService";
import { Banda } from "../../models/Banda";
import { ApplicationException } from "../../errors/applicationException";
import { ErrorMessages } from "../../errors/errorMessages";

export class BandServiceImpl implements BandService {
    constructor( private readonly bandRepository: BandRepository) {}
    
    public getBands = async () => {
        try {
            const bands = await this.bandRepository.getBands();
        } catch (e) {
            throw new ApplicationException();
        }
    }

    public getBandById = async (bandId: number) : Promise<Banda> => {
        try {
            const band = await this.bandRepository.getBandById(bandId);
            console.log(`la bandita es: `,band)
            return band;
        } catch (e) {
            throw new ApplicationException();
        }
    }

    public storeBand = async (band: Banda) => {
        try {
            if (band.password.toString().length >= 3) {
                return await this.bandRepository.storeBand(band);
            } else {
                throw new ApplicationException(ErrorMessages.PASSWORD_LENGTH_VALIDATION_ERROR);
            }
        } catch (e: any) {
            throw new ApplicationException(e.message);
        }
    }
}