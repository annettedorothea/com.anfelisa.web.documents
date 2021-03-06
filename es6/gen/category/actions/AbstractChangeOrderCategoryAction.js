/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ChangeOrderCategoryCommand from "../../../src/category/commands/ChangeOrderCategoryCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractChangeOrderCategoryAction extends Action {

    constructor() {
        super({}, 'category.ChangeOrderCategoryAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ChangeOrderCategoryCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



