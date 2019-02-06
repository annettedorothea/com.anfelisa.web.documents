import AbstractToggleSaveInLocalStorageCommand from "../../../gen/login/commands/AbstractToggleSaveInLocalStorageCommand";
import * as AppState from "../../../gen/ace/ReadAppState";

export default class ToggleSaveInLocalStorageCommand extends AbstractToggleSaveInLocalStorageCommand {
    execute() {
        this.commandData.saveInLocalStorage = !AppState.get_state_State_data_Login_saveInLocalStorage();
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
