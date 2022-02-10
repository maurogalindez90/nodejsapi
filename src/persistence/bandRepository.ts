import { Banda } from "../domain/Banda";

export interface BandRepository {
    getBands() : Promise<Banda[]>;
    getBandById(bandId: number) : Promise<Banda>;
    updateBand(bandId: number, band: Banda) : Promise<boolean>;
    storeBand(band: Banda) : Promise<Banda>;
    deleteBand(bandId: number) : Promise<boolean>;
}