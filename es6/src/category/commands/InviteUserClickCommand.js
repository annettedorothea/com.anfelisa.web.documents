import AbstractInviteUserClickCommand from "../../../gen/category/commands/AbstractInviteUserClickCommand";
import {getAppState} from "../../app/App";

export default class InviteUserClickCommand extends AbstractInviteUserClickCommand {

    initCommandData() {
        const data = getAppState().data;
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
