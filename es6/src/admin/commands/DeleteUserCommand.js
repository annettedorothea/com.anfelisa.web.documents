import AbstractDeleteUserCommand from "../../../gen/admin/commands/AbstractDeleteUserCommand";
import {getAppState} from "../../app/App";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    initCommandData() {
        this.commandData.usernameToBeDeleted = getAppState().data.usernameToBeDeleted;
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
