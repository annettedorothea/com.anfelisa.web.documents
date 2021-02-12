import AbstractGetRoleCommand from "../../../gen/login/commands/AbstractGetRoleCommand";
import AppUtils from "../../app/AppUtils";

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
        if (AppUtils.isUnauthorized(this.commandData.message)) {
            this.addUnauthorizedOutcome();
            resolve();
        } else {
            reject(this.commandData.message);
        }
    }
}

/*       S.D.G.       */
