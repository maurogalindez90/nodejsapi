import { Banda } from '../../models/Banda';
import { BandRepository } from '../bandRepository';
import { SqlClient } from '../client/sqlClient';

export class BandRepositoryImpl implements BandRepository {

    constructor (private readonly sqlClientBanda: SqlClient, private readonly sqlClientLider: SqlClient) {}

    public getBands = async () => {
        return await this.sqlClientBanda.findAll();
    }

    public getBandById = async (bandId: number) : Promise<Banda> => await this.sqlClientBanda.findById(bandId);
    

    public storeBand = async (band: Banda) => {
        return await this.sqlClientBanda.storeBand(band);
    }
}