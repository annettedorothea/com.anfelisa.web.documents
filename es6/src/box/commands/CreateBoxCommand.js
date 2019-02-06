import AbstractCreateBoxCommand from "../../../gen/box/commands/AbstractCreateBoxCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class CreateBoxCommand extends AbstractCreateBoxCommand {

    initCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.categoryId = data.selectedCategory.categoryId;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.hash = "#dashboard";
        this.commandData.categoryId = undefined;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
