/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractMoveCategoryStartedCommand from "../../../gen/category/commands/AbstractMoveCategoryStartedCommand";
import {findCategory} from "../utils/CategoryTreeUtils";

export default class MoveCategoryStartedCommand extends AbstractMoveCategoryStartedCommand {
    execute(data) {
        data.movedCategory = findCategory(data.rootCategory.childCategories, data.movedCategoryId);
        if (!data.movedCategory) {
            data.movedCategory = data.rootCategory
        }
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



