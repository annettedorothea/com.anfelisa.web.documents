import AbstractInitialLoginCommand from "../../../gen/common/commands/AbstractInitialLoginCommand";

export default class InitialLoginCommand extends AbstractInitialLoginCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        if (error.code === 401) {
            this.commandData.error.errorKey = "loginFailed";
            this.commandData.outcome = this.unauthorized;
            resolve();
        } else {
            reject(error);
        }
    }
}

/*       S.D.G.       */
