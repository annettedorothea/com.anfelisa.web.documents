import AbstractConfirmEmailCommand from "../../../gen/registration/commands/AbstractConfirmEmailCommand";
import AppUtils from "../../app/AppUtils";
import {Texts} from "../../app/Texts";

export default class ConfirmEmailCommand extends AbstractConfirmEmailCommand {

    validateCommandData() {
        return true;
    }
    handleResponse(resolve) {
        this.commandData.hash = "#";
        this.commandData.message = AppUtils.createInfoMessage("emailConfirmed");
        this.addOkOutcome();
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
