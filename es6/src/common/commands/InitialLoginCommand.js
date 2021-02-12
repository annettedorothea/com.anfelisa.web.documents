import AbstractInitialLoginCommand from "../../../gen/common/commands/AbstractInitialLoginCommand";
import AppUtils from "../../app/AppUtils";

export default class InitialLoginCommand extends AbstractInitialLoginCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        resolve();
    }

    handleError(resolve, reject) {
        if (AppUtils.isUnauthorized(this.commandData.message)) {
            this.addUnauthorizedOutcome();
        }
        reject(this.commandData.message);
    }
}

/*       S.D.G.       */
