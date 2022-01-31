import { Repository } from "../../../connection/connection";
import { SqlClient } from "../sqlClient";
import { QueryBuilder } from "../utils/queryBuilder";

export class SqlClientImpl implements SqlClient {
    private entity: string;

    constructor (entity: string) { this.entity = entity }


    public findAll = async () => {
        const connection = await Repository.getConnection();
        const entityRepository = connection.getRepository(this.entity);
        let query = entityRepository.createQueryBuilder(this.entity);
        query = QueryBuilder.utilizeParameters(this.entity, query);
        // query = query.leftJoinAndSelect('Banda.leader', 'leader')

        const response = query.getManyAndCount();
        return response;
    }

    public findById = async (id: number) => {
        const connection = await Repository.getConnection();
        const entityRepository = connection.getRepository(this.entity);
        let query = entityRepository.createQueryBuilder(this.entity);
        query = query.where('Banda.id = :id', {id: id});
        query = query.leftJoinAndSelect('Banda.leader', 'leader');
        return await query.getOne();
    }

    public storeBand = async (band: any) => {
        const connection = await Repository.getConnection();
        const entityRepository = connection.getRepository(this.entity);
        return 'pepe';
    }
}