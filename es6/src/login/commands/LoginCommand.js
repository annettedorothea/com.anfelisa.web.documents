import AbstractLoginCommand from "../../../gen/login/commands/AbstractLoginCommand";
import {getAppState} from "../../app/App";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        const appState = getAppState();
        this.commandData.username = appState.data.username;
        this.commandData.saveInLocalStorage = appState.data.saveInLocalStorage;
        if (this.commandData.saveInLocalStorage === true) {
            this.commandData.outcome = this.saveInLocalStorage;
        } else {
            this.commandData.outcome = this.doNotSaveInLocalStorage;
        }
    }
}

/*       S.D.G.       */
