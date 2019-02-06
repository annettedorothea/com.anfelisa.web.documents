import AbstractDeleteUserCommand from "../../../gen/admin/commands/AbstractDeleteUserCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    initCommandData() {
        this.commandData.usernameToBeDeleted = getState().data.usernameToBeDeleted;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        resolve();
    }
}

/*       S.D.G.       */
