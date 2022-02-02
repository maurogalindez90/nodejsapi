import { Response } from "express";
import { ApplicationException } from "../errors/applicationException";
import { ErrorMessages } from "../errors/errorMessages";

export abstract class BaseController {

    private unauthorized: string = "Unauthorized";
    private forbidden: string = "Forbidden";
    private badRequest: string = "Bad Request";
    private notFound: string = "Not found";
    private internalError: string = "Internal Server Error";

    errorHandler = (err: any, res: Response) => {
        if (err instanceof ApplicationException) {
            switch (err.message) {
                case ErrorMessages.UNEXPECTED_ERROR:
                    this.sendInternalError(res, err.message, '500')
                    break;
                    
                case ErrorMessages.PASSWORD_LENGTH_VALIDATION_ERROR: 
                    this.sendInvalidReq(res, err.message, '400');
                    break;

                case ErrorMessages.NOT_FOUND:
                    this.sendNotFoundReq(res, err.message, '404');
                    break;
            }
            res.status(400);
            res.send(err);
        }
    }

    public sendCreate = (res: any, data?: any) => {
        res.status(201);
        res.send(data);
    }

    public sendEmpty = (res: any) => {
        res.status(204);
        res.send();
    }

    public sendSuccess = (res: any, data: any) => {
        res.status(200);
        res.send(data);
    }

    public sendInvalidToken = (res: any, message: string, code: string): void => {
        let response: any = {};
        response.type = this.unauthorized;
        response.message = message;
        response.code = code;
        res.status(401);
        res.send(response);
    }

    public sendForbidden = (res: any, message: string, code: string): void => {
        let response: any = {};
        response.type = this.forbidden;
        response.message = message;
        response.code = code;
        res.status(403);
        res.send(response);
    }

    public sendInvalidReq = (res: any, message: string, code: string): void => {
        let response: any = {};
        response.type = this.badRequest;
        response.message = message;
        response.code = code;
        res.status(400);
        res.send(response);
    }

    public sendNotFoundReq = (res: any, message: string, code: string): void => {
        let response: any = {};
        response.type = this.notFound;
        response.message = message;
        response.code = code;
        res.status(404);
        res.send(response);
    }

    public sendInternalError = (res: any, message: string, code: string): void => {
        let response: any = {};
        response.type = this.internalError;
        response.message = message;
        response.code = code;
        res.status(500);
        res.send(response);
    }

    public sendPermissionDenied = (res: any, message: string, code: string): void => {
        let response: any = {};
        response.type = this.internalError;
        response.message = message;
        response.code = code;
        res.status(401);
        res.send(response);
    }
}