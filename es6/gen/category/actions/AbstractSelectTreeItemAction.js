/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import SelectTreeItemCommand from "../../../src/category/commands/SelectTreeItemCommand";

export default class AbstractSelectTreeItemAction extends Action {

    constructor() {
        super('category.SelectTreeItemAction');
	}
		
	getCommand() {
		return new SelectTreeItemCommand();
	}


}




/******* S.D.G. *******/



