/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import MoveCategoryStartedCommand from "../../../src/category/commands/MoveCategoryStartedCommand";

export default class AbstractMoveCategoryStartedAction extends Action {

    constructor( movedCategoryId) {
        super({movedCategoryId}, 'category.MoveCategoryStartedAction');
	}
		
	getCommand() {
		return new MoveCategoryStartedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



