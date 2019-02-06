import Action from "../../ace/AsynchronousAction";
import UpdateCategoryCommand from "../../../src/category/commands/UpdateCategoryCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractUpdateCategoryAction extends Action {

    constructor() {
        super({}, 'category.UpdateCategoryAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new UpdateCategoryCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
