import { Repository } from "../../../connection/connection";
import { Banda } from "../../../models/Banda";
import { SqlClient } from "../sqlClient";
import { QueryBuilder } from "../utils/queryBuilder";

export class SqlClientImpl implements SqlClient {
    private entity: string;

    constructor (entity: string) { this.entity = entity }


    public findAll = async () => {
        const connection = await Repository.getConnection();
        const entityRepository = connection.getRepository(this.entity);
        let query = entityRepository.createQueryBuilder(this.entity);
        query = QueryBuilder.buildQuery(this.entity, query);
        return await query.getManyAndCount();
    }

    public findById = async (id: number) => {
        const connection = await Repository.getConnection();
        const entityRepository = connection.getRepository(this.entity);
        let query = entityRepository.createQueryBuilder(this.entity);
        query = QueryBuilder.buildQuery(this.entity, query, {id});
        const response = await query.getOneOrFail();
        console.log(`la respuesta a la ejecucion de la query es: `,response);
        return response;
    }

    public storeBand = async (band: Banda) => {
        const connection = await Repository.getConnection();
        const entityRepository = connection.getRepository(this.entity);
        return await entityRepository.save(band);
    }
}