import AbstractCheckUsernameCommand from "../../../gen/registration/commands/AbstractCheckUsernameCommand";
import * as AppState  from "../../../gen/ace/AppState"

export default class CheckUsernameCommand extends AbstractCheckUsernameCommand {

    initCommandData() {
        this.commandData.username = AppState.get_state_State_data_Registration_username();
        if (this.commandData.username.length === 0) {
            this.commandData.outcome = this.empty;
            return false;
        }
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
