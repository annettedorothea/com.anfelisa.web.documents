import AbstractCollapseTreeItemCommand from "../../../gen/category/commands/AbstractCollapseTreeItemCommand";
import {getAppState} from "../../app/App";
import {findCategory, isCategoryChildOfParent} from "../utils/CategoryTreeUtils"

export default class CollapseTreeItemCommand extends AbstractCollapseTreeItemCommand {
    execute() {
        const data = getAppState().data;
        let category = findCategory(data.categoryList, this.commandData.categoryId);
        category.expanded = false;
        if (data.selectedCategory && isCategoryChildOfParent(category, data.selectedCategory.categoryId)) {
            this.commandData.selectedCategory = null;
        }
        this.commandData.categoryList = data.categoryList;
        this.commandData.categoryId = undefined;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
