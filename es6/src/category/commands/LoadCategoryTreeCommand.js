import AbstractLoadCategoryTreeCommand from "../../../gen/category/commands/AbstractLoadCategoryTreeCommand";
import {findExpandedCategories, initExpandedState, initSelected} from "../utils/CategoryTreeUtils"
import {getState, get_state_State_data_AuthorView_categoryTree_CategoryTree_rootCategory} from "../../../gen/ace/ReadAppState";

export default class LoadCategoryTreeCommand extends AbstractLoadCategoryTreeCommand {

    validateCommandData() {
        if (!this.commandData.rootCategoryId) {
            this.commandData.rootCategoryId = get_state_State_data_AuthorView_categoryTree_CategoryTree_rootCategory().categoryId;
        }
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        const appState = getState();
        const expandedCategories = [];
        if (appState.data && appState.data.categoryTree && appState.data.categoryTree.rootCategory) {
            findExpandedCategories(appState.data.categoryTree.rootCategory, expandedCategories);
        }
        initExpandedState(this.commandData.rootCategory, expandedCategories);

        this.commandData.data = {
            categoryTree: {
                selectedCategory: initSelected(this.commandData.rootCategory, this.commandData.selectedCategoryId),
                rootCategory: this.commandData.rootCategory,
                displayDeleteCategory: false,
                displayEditCategory: false,
                displayNewCategory: false,
                displayInviteUser: false
            },
            cardView: {
                cardList: null,
                naturalInputOrder: true
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
