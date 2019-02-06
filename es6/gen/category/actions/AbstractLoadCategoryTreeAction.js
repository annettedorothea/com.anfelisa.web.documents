import Action from "../../ace/AsynchronousAction";
import LoadCategoryTreeCommand from "../../../src/category/commands/LoadCategoryTreeCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractLoadCategoryTreeAction extends Action {

    constructor( pathToSelected, selectedCategoryId) {
        super({pathToSelected, selectedCategoryId}, 'category.LoadCategoryTreeAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadCategoryTreeCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
