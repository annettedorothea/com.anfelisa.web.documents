import Action from "../../ace/AsynchronousAction";
import MoveCategoryCommand from "../../../src/category/commands/MoveCategoryCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractMoveCategoryAction extends Action {

    constructor() {
        super({}, 'category.MoveCategoryAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new MoveCategoryCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
