import AbstractDeleteUserCommand from "../../../gen/admin/commands/AbstractDeleteUserCommand";
import {getAppState} from "../../../gen/ace/AppState";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    validateCommandData() {
        this.commandData.usernameToBeDeleted = getAppState().data.usernameToBeDeleted;
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        resolve();
    }
}

/*       S.D.G.       */
