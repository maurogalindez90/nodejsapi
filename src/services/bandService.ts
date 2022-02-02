import { Banda } from "../models/Banda";

export interface BandService {

    getBands() : any;
    getBandById(bandId: number) : Promise<Banda>;
    storeBand(band: any) : any;
}