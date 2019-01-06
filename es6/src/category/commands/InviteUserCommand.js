import AbstractInviteUserCommand from "../../../gen/category/commands/AbstractInviteUserCommand";
import {getAppState} from "../../app/App";

export default class InviteUserCommand extends AbstractInviteUserCommand {

    initCommandData() {
        const data = getAppState().data;
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
