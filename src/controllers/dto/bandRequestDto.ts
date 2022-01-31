import { Banda } from "../../models/Banda";
import { Lider } from "../../models/Lider";

export class BandRequestDto {
    
    public id: number;
    public name: string;
    public leader: Lider;

    constructor (bandId: number, bandName: string, bandLeader: Lider) { 
        this.id = bandId;
        this.name = bandName;
        this.leader = bandLeader;
    }

    public static bandToDto = (band: Banda) => new BandRequestDto(band.id, band.name, band.leader);

    public static bandsArrayToDto = (bands: Array<Banda>) => bands.map(band => this.bandToDto(band));
    
}


