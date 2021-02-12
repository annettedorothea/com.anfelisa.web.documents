import AbstractResetPasswordCommand from "../../../gen/password/commands/AbstractResetPasswordCommand";
import AppUtils from "../../app/AppUtils";
import {Texts} from "../../app/Texts";

export default class ResetPasswordCommand extends AbstractResetPasswordCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.hash = "#";
        this.commandData.message = AppUtils.createInfoMessage("passwordReset");
        this.addOkOutcome();
    	resolve();
    }

    handleError(resolve) {
        this.commandData.hash = "#";
        this.addErrorOutcome();
    	resolve();
    }
}

/*       S.D.G.       */
