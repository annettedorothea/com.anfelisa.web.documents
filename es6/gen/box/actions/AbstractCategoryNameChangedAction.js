/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import CategoryNameChangedCommand from "../../../src/box/commands/CategoryNameChangedCommand";

export default class AbstractCategoryNameChangedAction extends Action {

    constructor( categoryName) {
        super({categoryName}, 'box.CategoryNameChangedAction');
	}
		
	getCommand() {
		return new CategoryNameChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



