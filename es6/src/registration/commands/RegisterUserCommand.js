import AbstractRegisterUserCommand from "../../../gen/registration/commands/AbstractRegisterUserCommand";
import AppUtils from "../../app/AppUtils";
import {Texts} from "../../app/Texts";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        this.commandData.hash = "#";
        this.commandData.message = AppUtils.createInfoMessage("confirmEmail");
        resolve();
    }

    handleError(resolve) {
        this.addErrorOutcome();
        resolve();
    }
}

/*       S.D.G.       */
