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

    handleError(resolve) {
        if (AppUtils.isUnauthorized(this.commandData.message)) {
            this.addUnauthorizedOutcome();
        }
        resolve();
    }
}

/*       S.D.G.       */
