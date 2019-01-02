import Action from "../../ace/SynchronousAction";
import RevokeUserAccessCommand from "../../../src/author/commands/RevokeUserAccessCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractRevokeUserAccessAction extends Action {

    constructor() {
        super({}, 'author.RevokeUserAccessAction');
    }
    
	getCommand() {
		return new RevokeUserAccessCommand(this.actionData);
	}


}

/*       S.D.G.       */
