import Action from "../../ace/SynchronousAction";
import CancelRevokeUserAccessCommand from "../../../src/author/commands/CancelRevokeUserAccessCommand";

export default class AbstractCancelRevokeUserAccessAction extends Action {

    constructor() {
        super({}, 'author.CancelRevokeUserAccessAction');
    }
    
	getCommand() {
		return new CancelRevokeUserAccessCommand(this.actionData);
	}


}

/*       S.D.G.       */
