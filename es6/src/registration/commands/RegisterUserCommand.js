import AbstractRegisterUserCommand from "../../../gen/registration/commands/AbstractRegisterUserCommand";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        this.commandData.hash = "#";
        this.commandData.messageKey = "confirmEmail";
        resolve();
    }

    handleError(resolve, reject) {
        this.addErrorOutcome();
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
