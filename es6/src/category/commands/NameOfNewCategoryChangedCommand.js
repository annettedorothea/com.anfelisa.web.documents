import AbstractNameOfNewCategoryChangedCommand
    from "../../../gen/category/commands/AbstractNameOfNewCategoryChangedCommand";
import {getAppState} from "../../app/App";

export default class NameOfNewCategoryChangedCommand extends AbstractNameOfNewCategoryChangedCommand {
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
                (c) => c.categoryName === this.commandData.newCategoryName
            ).length > 0;
        }
    }
}

/*       S.D.G.       */
