import AbstractDeleteCategoryCommand from "../../../gen/category/commands/AbstractDeleteCategoryCommand";
import {getAppState} from "../../app/App";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.categoryId = data.selectedCategory.categoryId;
    }

    handleResponse(resolve, reject) {
        this.commandData.displayDeleteCategory = false;
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
        this.commandData.outcome = this.error;
        this.commandData.displayDeleteCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
