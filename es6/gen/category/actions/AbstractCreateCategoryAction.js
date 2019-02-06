import Action from "../../ace/AsynchronousAction";
import CreateCategoryCommand from "../../../src/category/commands/CreateCategoryCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractCreateCategoryAction extends Action {

    constructor() {
        super({}, 'category.CreateCategoryAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new CreateCategoryCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
