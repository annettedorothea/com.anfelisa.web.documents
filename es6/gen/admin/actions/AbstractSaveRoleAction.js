import Action from "../../ace/AsynchronousAction";
import SaveRoleCommand from "../../../src/admin/commands/SaveRoleCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractSaveRoleAction extends Action {

    constructor( editedUserId, newRole) {
        super({editedUserId, newRole}, 'admin.SaveRoleAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new SaveRoleCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
