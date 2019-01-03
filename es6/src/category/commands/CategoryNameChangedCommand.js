import AbstractCategoryNameChangedCommand from "../../../gen/category/commands/AbstractCategoryNameChangedCommand";
import {getAppState} from "../../app/App";

export default class CategoryNameChangedCommand extends AbstractCategoryNameChangedCommand {
    execute() {
        this.commandData.outcome = this.ok;
        let categories;
        const appState = getAppState();
        if (appState.data.selectedCategory) {
            categories = appState.data.selectedCategory.childCategories;
        } else {
            categories = appState.data.categoryList;
        }
        if (categories) {
            this.commandData.categoryNameAlreadyExists = categories.filter(
                (c) => c.categoryName === this.commandData.categoryName
            ).length > 0;
        }
    }
}

/*       S.D.G.       */
