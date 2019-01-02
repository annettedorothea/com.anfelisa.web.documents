import AbstractLoginCommand from "../../../gen/login/commands/AbstractLoginCommand";
import * as App from "../../app/App";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        this.commandData.username = App.appState.data.username;
        this.commandData.saveInLocalStorage = App.appState.data.saveInLocalStorage;
        if (this.commandData.saveInLocalStorage === true) {
            this.commandData.outcome = this.saveInLocalStorage;
        } else {
            this.commandData.outcome = this.doNotSaveInLocalStorage;
        }
    }
}

/*       S.D.G.       */
