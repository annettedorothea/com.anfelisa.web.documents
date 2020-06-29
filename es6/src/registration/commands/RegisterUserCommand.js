import AbstractRegisterUserCommand from "../../../gen/registration/commands/AbstractRegisterUserCommand";
import {
    get_state_State_data_Registration_email,
    get_state_State_data_Registration_username,
    get_state_State_language
} from "../../../gen/ace/ReadAppState";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {

    validateCommandData() {
        this.commandData.email = get_state_State_data_Registration_email();
        this.commandData.language = get_state_State_language();
        this.commandData.username = get_state_State_data_Registration_username();
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        this.commandData.hash = "#";
        this.commandData.messageKey = "confirmEmail";
        resolve();
    }

    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
