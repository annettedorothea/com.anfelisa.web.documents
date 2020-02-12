import AbstractCreateBoxCommand from "../../../gen/box/commands/AbstractCreateBoxCommand";
import * as AppState from "../../../gen/ace/ReadAppState";

export default class CreateBoxCommand extends AbstractCreateBoxCommand {

    initCommandData() {
        this.commandData.categoryId = AppState.get_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory().categoryId;
        return true;
    }

    handleResponse(resolve) {
        this.commandData.selectedCategoryId = AppState.get_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory().categoryId;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
