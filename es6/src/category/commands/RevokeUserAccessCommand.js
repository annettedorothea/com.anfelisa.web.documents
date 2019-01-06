import AbstractRevokeUserAccessCommand from "../../../gen/category/commands/AbstractRevokeUserAccessCommand";
import {getAppState} from "../../app/App";

export default class RevokeUserAccessCommand extends AbstractRevokeUserAccessCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.categoryId = data.selectedCategory.categoryId;
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
