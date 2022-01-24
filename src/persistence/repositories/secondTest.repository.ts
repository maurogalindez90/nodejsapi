import { Repository } from '../../connection/connection';
import { Banda } from '../../model/Banda';

export class SecondTestRepository {

    public findAll = async () => {
        const connection = await Repository.getConnection();
        const bandaRepository = connection.getRepository('Banda');
        const response = await bandaRepository.find();
        return response;
    }
}