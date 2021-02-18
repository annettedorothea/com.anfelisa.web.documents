import AbstractForgotPasswordCommand from "../../../gen/password/commands/AbstractForgotPasswordCommand";
import AppUtils from "../../app/AppUtils";
import {Texts} from "../../app/Texts";

export default class ForgotPasswordCommand extends AbstractForgotPasswordCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.hash = "#";
        this.commandData.message = AppUtils.createInfoMessage("passwordRequestSubmitted");
    	this.addOkOutcome();
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}

/*       S.D.G.       */
