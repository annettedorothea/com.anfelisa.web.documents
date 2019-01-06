import Action from "../../ace/AsynchronousAction";
import RevokeUserAccessCommand from "../../../src/category/commands/RevokeUserAccessCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractRevokeUserAccessAction extends Action {

    constructor( revokedUserId) {
        super({revokedUserId}, 'category.RevokeUserAccessAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new RevokeUserAccessCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
