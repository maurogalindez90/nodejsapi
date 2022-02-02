import { GET, POST, PUT, route } from "awilix-express";
import { Response, Request } from "express";
import { ApplicationException } from "../errors/applicationException";
import { Banda } from "../models/Banda";
import { BandService } from "../services/bandService";
import { BaseController } from "./baseController";
import { BandRequestDto } from "./dto/bandRequestDto";
import { BandResponseDto } from "./dto/bandResponseDto";

@route('/bands')
export class BandController extends BaseController {
    constructor (private readonly bandService: BandService) {
        super() 
    }

    @GET()
    public getBands = async (req: Request, res: Response) => {
        try {
            const bands = await this.bandService.getBands();
            this.sendSuccess(res, [BandResponseDto.bandsArrayToDto(bands[0]), bands[1]]);
        } catch (e) {
            this.errorHandler(e, res);
        }
    }

    @route('/:id')
    @GET()
    public getBandById = async (req: Request, res: Response) => {
        try {
            const bandId: number = parseInt(req.params.id);
            const band = await this.bandService.getBandById(bandId);
            this.sendSuccess(res, (BandResponseDto.bandToDto(band)));
        } catch (e) {
            this.errorHandler(e, res);
        }
        
    }

    @POST()
    public storeBand = async (req: Request, res: Response) => {
        try {
            const response = await this.bandService.storeBand(BandRequestDto.toBand(req.body));
            this.sendSuccess(res, BandResponseDto.bandToDto(response));
        } catch (e) {
            this.errorHandler(e, res);
        }
        
    }
}