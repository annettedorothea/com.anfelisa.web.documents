import AbstractDeleteCategoryCommand from "../../../gen/category/commands/AbstractDeleteCategoryCommand";
import {getState} from "../../../gen/ace/AppState";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {

    initCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.categoryId = data.selectedCategory.categoryId;
        return true;
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
