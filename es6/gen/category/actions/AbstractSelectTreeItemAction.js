/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import SelectTreeItemCommand from "../../../src/category/commands/SelectTreeItemCommand";

export default class AbstractSelectTreeItemAction extends Action {

    constructor( categoryId) {
        super({categoryId}, 'category.SelectTreeItemAction');
	}
		
	getCommand() {
		return new SelectTreeItemCommand(this.actionData);
	}


}




/******* S.D.G. *******/



