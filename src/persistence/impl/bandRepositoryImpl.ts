import { Banda } from '../../domain/Banda';
import { BandRepository } from '../bandRepository';
import { SqlClient } from '../client/sqlClient';

export class BandRepositoryImpl implements BandRepository {

    constructor (private readonly sqlClientBanda: SqlClient, private readonly sqlClientLider: SqlClient) {}

    public getBands = async () => {
        const bands = await this.sqlClientBanda.findAll();
        console.log(JSON.stringify(bands));
        return bands;
    }

    public getBandById = async (bandId: number) => {
        return await this.sqlClientBanda.findById(bandId);
    }

    public updateBand = async (bandId: number, band: Banda) => {
        return await this.sqlClientBanda.updateEntity(bandId, band);
    }
    

    public storeBand = async (band: Banda) => {
        return await this.sqlClientBanda.storeEntity(band);
    }

    public deleteBand = async (bandId: number) => {
        return await this.sqlClientBanda.deleteEntity(bandId);
    }
}