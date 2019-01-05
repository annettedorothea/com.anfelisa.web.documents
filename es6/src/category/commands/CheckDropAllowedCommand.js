import AbstractCheckDropAllowedCommand from "../../../gen/category/commands/AbstractCheckDropAllowedCommand";
import {getAppState} from "../../app/App";
import {findCategory} from "../utils/CategoryTreeUtils";

export default class CheckDropAllowedCommand extends AbstractCheckDropAllowedCommand {
    execute() {
        const data = getAppState().data;
        const dropTarget = findCategory(data.categoryList, this.commandData.categoryId);
        this.commandData.dropTargetCategoryId = dropTarget.categoryId;
        this.commandData.dropAllowed = data.selectedCategory.rootCategoryId === dropTarget.rootCategoryId;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
