import AbstractInitialLoginCommand from "../../../gen/common/commands/AbstractInitialLoginCommand";

export default class InitialLoginCommand extends AbstractInitialLoginCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        if (this.commandData.error.code === 401) {
            this.commandData.error.errorKey = "loginFailed";
            this.commandData.outcome = this.unauthorized;
            resolve();
        } else {
            reject(this.commandData.error);
        }
    }
}

/*       S.D.G.       */
