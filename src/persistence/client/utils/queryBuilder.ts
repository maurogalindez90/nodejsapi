export class QueryBuilder {

    constructor() {}

    public static extractParameters = (parameters: any) => {
        
        // return this.utilizeParameters()
    }

    public static utilizeParameters = (entity: string, query: any, parameters?: any) => {
        if (parameters) this.extractParameters(parameters);

        switch (entity) {
            case 'Banda': 
            query = query.leftJoinAndSelect('Banda.leader', 'leader')
            break;
        }

        console.log('FALAFEL SUIZO');
        return query;
    }
}