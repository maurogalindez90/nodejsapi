export class BandResponseDto {
    
    public bandName: string;
    public password: number;
    public leader: any;

    constructor (band: any) { 
        this.bandName = band.bandName;
        this.password = band.password;
        if(band.leader) this.leader = band.leader;
    }

    
}


