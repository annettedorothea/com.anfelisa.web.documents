import AbstractCreateBoxCommand from "../../../gen/box/commands/AbstractCreateBoxCommand";
import {getAppState} from "../../app/App";

export default class CreateBoxCommand extends AbstractCreateBoxCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.categoryId = data.selectedCategory.categoryId;
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
