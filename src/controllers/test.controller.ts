import { GET, route } from 'awilix-express'
import { Request, Response } from 'express';
import { TestService } from '../services/test.service';

@route('/')
export class TestController {
    constructor( private readonly testService: TestService) { }
    @GET()
    public index = (req: Request, res: Response): void => {
        res.send('Mamma mia');
    }

    @route('test')
    @GET()
    public test = (req: Request, res: Response): void => {
        res.send(
            this.testService.get()
        );
    }
}