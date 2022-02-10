import { Banda } from "../domain/Banda";

export interface BandService {

    getBands() : any;
    getBandById(bandId: number) : Promise<Banda>;
    updateBand(bandId: number, band: Banda) : void;
    storeBand(band: Banda) : any;
    deleteBand(bandId: number) : void;

}