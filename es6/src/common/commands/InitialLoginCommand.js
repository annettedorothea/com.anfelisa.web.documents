import AbstractInitialLoginCommand from "../../../gen/common/commands/AbstractInitialLoginCommand";

export default class InitialLoginCommand extends AbstractInitialLoginCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        resolve();
    }

    handleError(resolve, reject) {
        if (this.commandData.error.code === 401) {
            this.commandData.error.errorKey = "loginFailed";
            this.addUnauthorizedOutcome();
            resolve();
        } else {
            reject(this.commandData.error);
        }
    }
}

/*       S.D.G.       */
