import Action from "../../ace/AsynchronousAction";
import DeleteCategoryCommand from "../../../src/category/commands/DeleteCategoryCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractDeleteCategoryAction extends Action {

    constructor() {
        super({}, 'category.DeleteCategoryAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new DeleteCategoryCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
