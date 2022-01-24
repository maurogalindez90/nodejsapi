import { GET, route } from "awilix-express";
import { Response, Request } from "express";
import { SecondTestService } from "../services/secondTest.service";

@route('/secondTest')
export class SecondTestController {
    constructor( private readonly secondTestService: SecondTestService) { }

    @GET()
    public getStupidText = async (req: Request, res: Response) => {
        const params = req.params.id
        console.log(params);
        res.send(
            await this.secondTestService.getStupidText());
    }
}