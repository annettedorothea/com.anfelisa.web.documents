import Action from "../../ace/SynchronousAction";
import RevokeUserAccessClickCommand from "../../../src/author/commands/RevokeUserAccessClickCommand";

export default class AbstractRevokeUserAccessClickAction extends Action {

    constructor() {
        super({}, 'author.RevokeUserAccessClickAction');
    }
    
	getCommand() {
		return new RevokeUserAccessClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
