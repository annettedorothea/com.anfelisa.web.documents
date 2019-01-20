import AbstractLoginCommand from "../../../gen/login/commands/AbstractLoginCommand";
import * as AppState from "../../../gen/ace/AppState";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        this.commandData.username = AppState.get_state_State_data_Login_username();
        this.commandData.loggedInUser = {
            username: this.commandData.username,
            password: this.commandData.password
        };
        const saveInLocalStorage = AppState.get_state_State_data_Login_saveInLocalStorage();
        if (saveInLocalStorage === true) {
            this.commandData.outcome = this.saveInLocalStorage;
        } else {
            this.commandData.outcome = this.doNotSaveInLocalStorage;
        }
    }
}

/*       S.D.G.       */
