import AbstractLoadCategoryTreeCommand from "../../../gen/category/commands/AbstractLoadCategoryTreeCommand";
import {findExpandedCategories, initExpandedState, initSelected} from "../utils/CategoryTreeUtils"

export default class LoadCategoryTreeCommand extends AbstractLoadCategoryTreeCommand {

    validateCommandData() {
        if (!this.commandData.rootCategoryId) {
            if (!this.commandData.rootCategory) {
                return false;
            }
            this.commandData.rootCategoryId = this.commandData.rootCategory.categoryId;
        }
        if (this.commandData.filterNonScheduled === undefined) {
            this.commandData.filterNonScheduled = null;
        }
        if (this.commandData.priority === undefined) {
            this.commandData.priority = null;
        }
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        const expandedCategories = [];
        if (this.commandData.rootCategory) {
            findExpandedCategories(this.commandData.rootCategory, expandedCategories);
        }
        initExpandedState(this.commandData.rootCategory, expandedCategories);

        this.commandData.authorView = {
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
            },
            filterNonScheduled: this.commandData.filterNonScheduled,
            priority: this.commandData.priority
        };
        this.commandData.selectedCategoryId = undefined;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
