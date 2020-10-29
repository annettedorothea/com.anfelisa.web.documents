/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import RootCategoryNameChangedCommand from "../../../src/box/commands/RootCategoryNameChangedCommand";

export default class AbstractRootCategoryNameChangedAction extends Action {

    constructor( categoryName) {
        super({categoryName}, 'box.RootCategoryNameChangedAction');
	}
		
	getCommand() {
		return new RootCategoryNameChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



