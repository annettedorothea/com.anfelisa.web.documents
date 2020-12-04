import AbstractConfirmEmailCommand from "../../../gen/registration/commands/AbstractConfirmEmailCommand";

export default class ConfirmEmailCommand extends AbstractConfirmEmailCommand {

    validateCommandData() {
        return true;
    }
    handleResponse(resolve) {
        this.commandData.hash = "#";
        this.commandData.messageKey = "emailConfirmed";
        this.addOkOutcome();
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
