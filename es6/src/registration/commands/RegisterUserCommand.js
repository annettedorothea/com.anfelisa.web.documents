import AbstractRegisterUserCommand from "../../../gen/registration/commands/AbstractRegisterUserCommand";
import {getAppState} from "../../app/App";

export default class RegisterUserCommand extends AbstractRegisterUserCommand {

    initCommandData() {
        const appState = getAppState();
        this.commandData.email = appState.data.email;
        this.commandData.language = appState.language;
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
