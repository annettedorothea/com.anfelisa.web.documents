/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import NewCategoryClickCommand from "../../../src/category/commands/NewCategoryClickCommand";

export default class AbstractNewCategoryClickAction extends Action {

    constructor() {
        super({}, 'category.NewCategoryClickAction');
	}
		
	getCommand() {
		return new NewCategoryClickCommand(this.actionData);
	}


}




/******* S.D.G. *******/



