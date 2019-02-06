import AbstractLoadCategoryTreeCommand from "../../../gen/category/commands/AbstractLoadCategoryTreeCommand";
import {findExpandedCategories, initExpandedState, initSelected} from "../utils/CategoryTreeUtils"
import {getState} from "../../../gen/ace/ReadAppState";

export default class LoadCategoryTreeCommand extends AbstractLoadCategoryTreeCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
        const appState = getState();
        const expandedCategories = [];
        if (appState.data && appState.data.categoryTree && appState.data.categoryTree.categoryList) {
            findExpandedCategories(appState.data.categoryTree.categoryList, expandedCategories);
        }
        initExpandedState(this.commandData.categoryList, expandedCategories);

        this.commandData.data = {
            categoryTree: {
                selectedCategory: initSelected(this.commandData.categoryList, this.commandData.selectedCategoryId),
                categoryList: this.commandData.categoryList,
                displayDeleteCategory: false,
                displayEditCategory: false,
                displayNewCategory: false,
                displayInviteUser: false
            },
            cardView: {
                cardList: null,
                naturalInputOrder: true,
                useDictionary: false
            }
        };
        this.commandData.view = "category-tree";
        this.commandData.selectedCategoryId = undefined;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
