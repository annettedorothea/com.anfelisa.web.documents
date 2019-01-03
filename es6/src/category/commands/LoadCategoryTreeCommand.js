import AbstractLoadCategoryTreeCommand from "../../../gen/category/commands/AbstractLoadCategoryTreeCommand";
import {getAppState} from "../../app/App";
import {findExpandedCategories, initExpandedState, initSelected} from "../utils/CategoryTreeUtils"

export default class LoadCategoryTreeCommand extends AbstractLoadCategoryTreeCommand {

    initCommandData() {
        //add from appState to commandData
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
        const data = getAppState().data;
        const expandedCategories = [];
        if (data.categoryList) {
            findExpandedCategories(data.categoryList, expandedCategories);
        }
        initExpandedState(this.commandData.categoryList, expandedCategories);

        this.commandData.selectedCategory = initSelected(this.commandData.categoryList, this.commandData.selectedCategoryId);
        this.commandData.selectedCategoryId = undefined;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
