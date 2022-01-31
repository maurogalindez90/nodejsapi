import { GET, POST, PUT, route } from "awilix-express";
import { Response, Request } from "express";
import { Banda } from "../models/Banda";
import { BandService } from "../services/bandService";
import { BandRequestDto } from "./dto/bandRequestDto";
import { BandResponseDto } from "./dto/bandResponseDto";

@route('/bands')
export class BandController {
    constructor (private readonly bandService: BandService) { }

    @GET()
    public getBands = async (req: Request, res: Response) => {
        const bands = await this.bandService.getBands();
        res.send([BandRequestDto.bandsArrayToDto(bands[0]), bands[1]]);
    }

    @route('/:id')
    @GET()
    public getBandById = async (req: Request, res: Response) => {
        const bandId: number = parseInt(req.params.id);
        const band = await this.bandService.getBandById(bandId);
        res.send(BandRequestDto.bandToDto(band));
    }

    @POST()
    public storeBand = async (req: Request, res: Response) => {
        //const band = new BandResponseDto(req.body);
        const band = new Banda();
        band.name = req.body.bandName;
        band.password = req.body.password;
        console.log(band);
        res.send(
            await this.bandService.storeBand(band)
        );
    }
}