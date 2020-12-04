import AbstractGetRoleCommand from "../../../gen/login/commands/AbstractGetRoleCommand";

export default class GetRoleCommand extends AbstractGetRoleCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.hash = "#dashboard";
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
