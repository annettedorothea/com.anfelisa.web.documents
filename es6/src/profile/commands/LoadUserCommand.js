import AbstractLoadUserCommand from "../../../gen/profile/commands/AbstractLoadUserCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class LoadUserCommand extends AbstractLoadUserCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve) {
    	this.commandData.outcome = this.ok;
    	this.commandData.view = "profile";
        this.commandData.data = {
            username: this.commandData.username,
            email: this.commandData.email,
            role: getState().loggedInUser.role,
            showDeleteUserDialog: false
        };
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */