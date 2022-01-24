import { SecondTestRepository } from "../persistence/repositories/secondTest.repository";

export class SecondTestService {
    constructor( private readonly secondTestRepository: SecondTestRepository) {}
    public getStupidText = async () => {
        return await this.secondTestRepository.findAll();
    }
}