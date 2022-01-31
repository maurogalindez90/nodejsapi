export interface SqlClient {

    findAll() : any;
    findById(id: number) : any;
    storeBand(band: any) : any;
}