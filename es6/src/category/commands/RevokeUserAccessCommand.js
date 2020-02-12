import AbstractRevokeUserAccessCommand from "../../../gen/category/commands/AbstractRevokeUserAccessCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class RevokeUserAccessCommand extends AbstractRevokeUserAccessCommand {

    initCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.categoryId = data.selectedCategory.categoryId;
    	return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
