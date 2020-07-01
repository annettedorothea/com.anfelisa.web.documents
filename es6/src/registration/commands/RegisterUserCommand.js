import AbstractRegisterUserCommand from "../../../gen/registration/commands/AbstractRegisterUserCommand";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        this.commandData.hash = "#";
        this.commandData.messageKey = "confirmEmail";
        resolve();
    }

    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
