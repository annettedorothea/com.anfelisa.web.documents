import Action from "../../ace/AsynchronousAction";
import RevokeUserAccessCommand from "../../../src/category/commands/RevokeUserAccessCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractRevokeUserAccessAction extends Action {

    constructor( revokedUserId) {
        super({revokedUserId}, 'category.RevokeUserAccessAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new RevokeUserAccessCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
