import AbstractInviteUserClickCommand from "../../../gen/category/commands/AbstractInviteUserClickCommand";
import {getState} from "../../../gen/ace/AppState";

export default class InviteUserClickCommand extends AbstractInviteUserClickCommand {

    initCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.categoryId = data.selectedCategory.categoryId;
    	return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.displayInviteUser = true;
        this.commandData.invitedUsername = "";
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
