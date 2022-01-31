import { Banda } from "../models/Banda";

export interface BandService {

    getBands() : any;
    getBandById(bandId: number) : Banda;
    storeBand(band: any) : any;
}