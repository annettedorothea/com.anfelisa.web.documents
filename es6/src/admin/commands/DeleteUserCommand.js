import AbstractDeleteUserCommand from "../../../gen/admin/commands/AbstractDeleteUserCommand";
import * as App from "../../app/App";

export default class DeleteUserCommand extends AbstractDeleteUserCommand {

    initCommandData() {
        this.commandData.usernameToBeDeleted = App.appState.data.usernameToBeDeleted;
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
