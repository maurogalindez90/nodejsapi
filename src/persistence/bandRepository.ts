import { Banda } from "../models/Banda";

export interface BandRepository {
    getBands() : any;
    getBandById(bandId: number) : Promise<Banda>;
    storeBand(band: Banda) : any;
}