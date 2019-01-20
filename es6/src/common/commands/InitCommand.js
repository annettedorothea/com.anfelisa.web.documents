import AbstractInitCommand from "../../../gen/common/commands/AbstractInitCommand";
import * as AppState from "../../../gen/ace/AppState";

export default class InitCommand extends AbstractInitCommand {
    execute() {
        const username = AppState.get_state_State_username();
        const password = AppState.get_state_State_password();
        this.commandData.hash = AppState.get_state_State_hash();
        this.commandData.language = "de";
        if (username && password) {
            this.commandData.loggedInUser = {
                username,
                password
            };
            this.commandData.outcome = this.user;
        } else {
            this.commandData.outcome = this.noUser;
        }
    }
}

/*       S.D.G.       */
