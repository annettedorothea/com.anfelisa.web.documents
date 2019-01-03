import AbstractCollapseTreeItemCommand from "../../../gen/category/commands/AbstractCollapseTreeItemCommand";
import {getAppState} from "../../app/App";
import {findCategory, isCategoryChildOfParent} from "../utils/CategoryTreeUtils"

export default class CollapseTreeItemCommand extends AbstractCollapseTreeItemCommand {
    execute() {
        const data = getAppState().data;
        let category = findCategory(data.categoryList, this.commandData.categoryId);
        category.expanded = false;
        this.commandData.categoryList = data.categoryList;
        if (data.selectedCategory && isCategoryChildOfParent(category, data.selectedCategory.categoryId)) {
            this.commandData.selectedCategory = undefined;
            this.commandData.outcome = this.deselectCategory;
        } else {
            this.commandData.outcome = this.ok;
        }
    }
}

/*       S.D.G.       */
