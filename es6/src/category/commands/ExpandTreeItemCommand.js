import AbstractExpandTreeItemCommand from "../../../gen/category/commands/AbstractExpandTreeItemCommand";
import {findCategory} from "../utils/CategoryTreeUtils"

export default class ExpandTreeItemCommand extends AbstractExpandTreeItemCommand {
    execute() {
        let category = findCategory(this.commandData.rootCategory.childCategories, this.commandData.categoryId);
        category.expanded = true;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
