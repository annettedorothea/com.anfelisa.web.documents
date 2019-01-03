import AbstractExpandTreeItemCommand from "../../../gen/category/commands/AbstractExpandTreeItemCommand";
import {getAppState} from "../../app/App";
import {findCategory, isCategoryChildOfParent} from "../utils/CategoryTreeUtils"

export default class ExpandTreeItemCommand extends AbstractExpandTreeItemCommand {
    execute() {
        const data = getAppState().data;
        let category = findCategory(data.categoryList, this.commandData.categoryId);
        category.expanded = true;
        this.commandData.categoryList = data.categoryList;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
