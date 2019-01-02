import AbstractRegisterUserCommand from "../../../gen/registration/commands/AbstractRegisterUserCommand";
import * as App from "../../app/App";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {

    initCommandData() {
        this.commandData.email = App.appState.data.email;
        this.commandData.language = App.appState.language;
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
