/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CancelNewCategoryCommand from "../../../src/category/commands/CancelNewCategoryCommand";

export default class AbstractCancelNewCategoryAction extends Action {

    constructor() {
        super({}, 'category.CancelNewCategoryAction');
		}
		
	getCommand() {
		return new CancelNewCategoryCommand(this.actionData);
	}


}




/******* S.D.G. *******/



