import { ErrorMessages } from "./errorMessages";

export class ApplicationException extends Error {

    constructor (message: string = ErrorMessages.UNEXPECTED_ERROR) {
        super();
        this.message = message;
    }

}