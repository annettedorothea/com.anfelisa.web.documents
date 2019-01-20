import AbstractInviteUserCommand from "../../../gen/category/commands/AbstractInviteUserCommand";
import {getState} from "../../../gen/ace/AppState";

export default class InviteUserCommand extends AbstractInviteUserCommand {

    initCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.categoryId = data.selectedCategory.categoryId;
        this.commandData.invitedUsername = data.invitedUsername;
    	return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
